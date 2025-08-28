import React from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const PlaygroundButtons = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Button</h2>
      <Separator />
      <div className="flex flex-col gap-4">
        <h3>Variants</h3>
        <div className="flex flex-row gap-4 h-16 items-center">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button variant="destructive">Hello</Button>
          <Button variant="secondary">Hello</Button>
          <Button variant="link">Hello</Button>
          <Button variant="selectedGhost">Hello</Button>
          <Button variant="success">Hello</Button>
          <Button variant="yellow">Hello</Button>
        </div>
        <h3>Disabled Variants</h3>
        <div className="flex flex-row gap-4 h-16 items-center">
          <Button disabled>Hello</Button>
          <Button variant="outline" disabled>
            Hello
          </Button>
          <Button variant="ghost" disabled>
            Hello
          </Button>
          <Button variant="destructive" disabled>
            Hello
          </Button>
          <Button variant="secondary" disabled>
            Hello
          </Button>
          <Button variant="link" disabled>
            Hello
          </Button>
          <Button variant="selectedGhost" disabled>
            Hello
          </Button>
          <Button variant="success" disabled>
            Hello
          </Button>
          <Button variant="yellow" disabled>
            Hello
          </Button>
        </div>
        <h3>Sizes</h3>
        <div className="flex flex-row gap-4 h-16 items-center">
          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button>Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundButtons;
