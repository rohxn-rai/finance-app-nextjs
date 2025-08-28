"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const PlaygroundToasters = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Toaster</h2>
      <Separator />
      <div className="flex flex-row gap-8">
        <Button
          variant="success"
          onClick={() => toast.success("Success toaster!")}
        >
          Success
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error("Error toaster!")}
        >
          Error
        </Button>
        <Button
          variant="yellow"
          onClick={() => toast.warning("Warning toaster!")}
        >
          Warning
        </Button>
        <Button variant="secondary" onClick={() => toast.info("Info toaster!")}>
          Info
        </Button>
        <Button
          onClick={async () => {
            toast.loading("Loading ...", { id: "playground-toast" });
            setTimeout(() => toast.dismiss("playground-toast"), 2000);
          }}
        >
          Loading
        </Button>
        <Button
          onClick={async () => {
            const promise = () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Sonner" }), 2000)
              );
            toast.promise(promise, {
              loading: "Loading ...",
              success: "Action done!",
              error: "Error while performing action!",
            });
          }}
        >
          Promise
        </Button>
      </div>
    </div>
  );
};

export default PlaygroundToasters;
