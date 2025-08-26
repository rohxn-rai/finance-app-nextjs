import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

const AuthenticationLayoutGroup = async ( {
  children,
} : Readonly<{
  children : React.ReactNode;
}> ) => {
  return (
    <>
      <main className="flex flex-col gap-8">
        <div className="sticky top-8 left-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex flex-row items-center gap-2 text-sm"
            >
              <ChevronLeft className="h-4 w-4"/>
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="mt-8">{ children }</div>
      </main>
    </>
  );
};

export default AuthenticationLayoutGroup;
