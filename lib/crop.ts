export const getCroppedImg = (
  imageSrc: string,
  pixelCrop: { width: number; height: number; x: number; y: number }
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const mimeMatch = /^data:(image\/[a-zA-Z]+);base64,/.exec(imageSrc);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas context not found"));
        return;
      }
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        resolve(blob);
      }, mimeType);
    };
    image.onerror = (error) => reject(error);
  });
};
