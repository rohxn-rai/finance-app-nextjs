import React from "react";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";

const PlaygroundPageHeader = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Page Header</h2>
      <Separator />
      <div>
        <Header />
      </div>
    </div>
  );
};

export default PlaygroundPageHeader;
