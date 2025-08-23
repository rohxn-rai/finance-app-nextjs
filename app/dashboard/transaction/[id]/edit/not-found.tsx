import Link from "next/link";

import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFoundTransaction = async () => {
  return (
    <>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-row items-center gap-8">
          <Link href="/dashboard">
            <MoveLeft className="min-h-9 min-w-9" />
          </Link>
          <h1 className="text-4xl font-semibold">Edit Transaction</h1>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center min-h-[50dvh]">
          <h2 className="text-2xl">Transaction not found</h2>
          <Link href="/dashboard">
            <Button size="lg">Go back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundTransaction;
