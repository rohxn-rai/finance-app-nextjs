import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const SettingsLoadingLayout = () => {
  return (
    <>
      <Skeleton className="h-8 w-full" />
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-3.5" />
          <Skeleton className="w-full h-9" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-3.5" />
          <Skeleton className="w-full h-9" />
        </div>
      </div>
    </>
  );
};

export default SettingsLoadingLayout;
