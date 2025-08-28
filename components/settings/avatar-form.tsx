"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";

import uploadAvatar from "@/actions/upload-avatar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

import { getCroppedImg } from "@/lib/crop";
import { cn } from "@/lib/utils";

import { CheckCircle, SquarePen, Upload } from "lucide-react";

const UploadAvatarForm = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [originalFileName, setOriginalFileName] = useState<string>("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [zoomInput, setZoomInput] = useState<string>(zoom.toFixed(2));
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    toast.loading("Uploading avatar ...", { id: "upload:imagetoweb" });
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const fileExt = file.name.split(".").pop()?.toLowerCase();
      if (!fileExt || !["jpeg", "jpg", "png", "webp"].includes(fileExt)) {
        toast.dismiss("upload:imagetoweb");
        toast.error("Please select a JPEG, PNG, or WebP image file");
        e.target.value = "";
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.dismiss("upload:imagetoweb");
        toast.error("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      setOriginalFileName(file.name);
      setUploadSuccess(false);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result as string);
        setCroppedImage(null);
        setCroppedBlob(null);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
      });
      reader.readAsDataURL(file);
      toast.dismiss("upload:imagetoweb");
      toast.success("Image uploaded!");
      return;
    }
    toast.dismiss("upload:imagetoweb");
    toast.warning("An image needs to be uploaded!");
  };

  const onCropComplete = useCallback((_: any, areaPixels: any) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const onEdit = async () => {
    setCroppedImage(null);
    setCroppedBlob(null);
    setUploadSuccess(false);
  };

  const showCroppedImage = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    try {
      const fileExt = originalFileName.split(".").pop()?.toLowerCase();
      const mimeType =
        fileExt === "png"
          ? "image/png"
          : fileExt === "webp"
          ? "image/webp"
          : fileExt === "jpeg"
          ? "image/jpeg"
          : fileExt === "jpg"
          ? "image/jpg"
          : null;

      if (!mimeType) {
        toast.dismiss("upload:imagetoweb");
        toast.error(
          "Upload an image file with extention (.png, .webp, .jpeg, .jpg)!"
        );
        return;
      }

      const cropped = await getCroppedImg(imageSrc, croppedAreaPixels);
      const url = URL.createObjectURL(cropped);
      setCroppedImage(url);
      setCroppedBlob(cropped);
    } catch (err) {
      console.log(err);
      toast.dismiss("upload:imagetoweb");
      toast.error("Failed to crop image. Please try again.");
    }
  }, [imageSrc, croppedAreaPixels, originalFileName]);

  const onUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!croppedBlob || !originalFileName) {
      toast.error("Please select and crop an image first");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("avatar", croppedBlob, originalFileName);

      await uploadAvatar(formData);

      setUploadSuccess(true);
      toast.success("Avatar uploaded successfully!");
    } catch (error) {
      console.log("Upload failed:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Upload failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setZoomInput(zoom.toFixed(2));
  }, [zoom]);

  const resetForm = () => {
    setImageSrc(null);
    setCroppedImage(null);
    setCroppedBlob(null);
    setOriginalFileName("");
    setUploadSuccess(false);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    toast.success("Cleared!");
  };

  return (
    <form onSubmit={onUpload} className="grid gap-4">
      <>
        {}
        {imageSrc && !croppedImage && (
          <>
            <div
              className={cn(
                "relative ",
                "min-w-[128px] min-h-[384px] ",
                "w-full h-full ",
                "bg-background dark:bg-background"
              )}
            >
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                minZoom={1}
                maxZoom={5}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="flex w-full items-center gap-2">
              <Input
                id="zoom-slider"
                name="zoom-slider"
                type="number"
                min={1}
                max={5}
                step={0.1}
                value={zoomInput}
                onChange={(e) => {
                  setZoomInput(e.target.value);
                }}
                onBlur={() => {
                  let value = Number(zoomInput);
                  if (isNaN(value) || value < 1) value = 1;
                  else if (value > 5) value = 5;
                  setZoom(value);
                  setZoomInput(value.toFixed(2));
                }}
                className="max-w-[75px] text-sm"
              />
              <Label htmlFor="zoom-slider">Zoom</Label>
              <Slider
                id="zoom-slider"
                name="zoom-slider"
                value={[zoom]}
                min={1}
                max={5}
                step={0.01}
                onValueChange={(val) => setZoom(val[0])}
                className="w-full"
              />
            </div>
          </>
        )}

        {croppedImage && (
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="preview" className="text-lg">
              Preview
            </Label>
            <div className="relative">
              <Image
                src={croppedImage}
                alt="Cropped avatar"
                className={cn(
                  "min-w-[256px] min-h-[256px] ",
                  "max-w-[256px] max-h-[256px] ",
                  "w-full h-full ",
                  "rounded-full object-cover"
                )}
                width={256}
                height={256}
              />
              {!uploadSuccess && (
                <Button
                  type="button"
                  onClick={onEdit}
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                >
                  <SquarePen className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        )}

        {imageSrc && !croppedImage && (
          <Button
            type="button"
            onClick={showCroppedImage}
            className="w-full"
            disabled={!croppedAreaPixels}
          >
            <CheckCircle className="w-4 h-4" />
            Preview Crop
          </Button>
        )}
      </>

      {/* file input */}
      <div className="flex flex-col w-full gap-1">
        <Label htmlFor="avatar" className="text-sm font-medium">
          {imageSrc ? "Change Avatar" : "Upload your avatar"}
        </Label>
        <Input
          id="avatar"
          name="avatar"
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={onFileChange}
          className="w-full file:rounded-2xl file:text-muted-foreground file:cursor-pointer text-sm"
        />
      </div>

      {/* Submit/Reset Buttons */}
      <div className="flex gap-3">
        {uploadSuccess ? (
          <Button type="button" onClick={resetForm} className="flex-1">
            Change Avatar Again
          </Button>
        ) : (
          <>
            {imageSrc && (
              <Button
                type="button"
                onClick={resetForm}
                variant="destructive"
                className="flex-1"
                disabled={isLoading}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              variant="success"
              disabled={!croppedBlob || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Save Avatar
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </form>
  );
};

export default UploadAvatarForm;
