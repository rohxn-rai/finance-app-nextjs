import React from "react";

import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

const PlaygroundCheckboxes = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Checkbox</h2>
      <Separator />
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-2 ml-3">
          <Checkbox id="check-box-unchecked" className="cursor-pointer" />
          <Label htmlFor="check-box-unchecked" className="cursor-pointer">
            Option (unchecked)
          </Label>
        </div>
        <div className="flex flex-row gap-2 ml-3">
          <Checkbox
            id="check-box-checked"
            className="cursor-pointer"
            defaultChecked
          />
          <Label htmlFor="check-box-checked" className="cursor-pointer">
            Option (checked)
          </Label>
        </div>
        <div className="flex flex-row gap-2 ml-3">
          <Checkbox id="check-box-disabled" disabled />
          <Label htmlFor="check-box-disabled">Option (disabled)</Label>
        </div>
        <Label
          htmlFor="wrapped-check-box"
          className={cn(
            "hover:bg-accent/50 flex items-start ",
            "gap-3 rounded-lg border border-input p-3 ml-0",
            "has-[[aria-checked=true]]:border-blue-600 ",
            "has-[[aria-checked=true]]:bg-blue-50 ",
            "dark:has-[[aria-checked=true]]:border-blue-900 ",
            "dark:has-[[aria-checked=true]]:bg-blue-950",
            "cursor-pointer"
          )}
        >
          <Checkbox
            id="wrapped-check-box"
            defaultChecked
            className={cn(
              "data-[state=checked]:border-blue-600 ",
              "data-[state=checked]:bg-blue-600 ",
              "data-[state=checked]:text-white ",
              "dark:data-[state=checked]:border-blue-700 ",
              "dark:data-[state=checked]:bg-blue-700"
            )}
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">
              Enable notifications
            </p>
            <p className="text-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default PlaygroundCheckboxes;
