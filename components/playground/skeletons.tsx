import React from "react";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PlaygroundSkeletons = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Skeleton</h2>
      <Separator />
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundSkeletons;
