import React from "react";

import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import DatePicker from "@/components/ui/date-picker";

const PlaygroundForm = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Form</h2>
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" placeholder="Enter your name ..." />
        </div>

        <div className="flex flex-col gap-1">
          <Label>City</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your city ..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New Delhi" className="bg-transparent">
                New Delhi
              </SelectItem>
              <SelectItem value="Mumbai" className="bg-transparent">
                Mumbai
              </SelectItem>
              <SelectItem value="Jaipur" className="bg-transparent">
                Jaipur
              </SelectItem>
              <SelectItem value="Kolkata" className="bg-transparent">
                Kolkata
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows={7}
            maxLength={256}
            placeholder="Enter long description here ..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="volume-slider">Volume</Label>
          <Slider
            id="volume-slider"
            min={1}
            max={100}
            step={0.01}
            className="p-3"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="dob">Date of Birth</Label>
          <DatePicker id="dob" />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundForm;
