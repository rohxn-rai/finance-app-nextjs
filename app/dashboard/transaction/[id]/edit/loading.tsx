import TransactionFormSkeleton from "@/components/skeletons/transactions/transaction-form-skeleton";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const EditTransactionPageLoading = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-row items-center gap-8">
          <Link href="/dashboard">
            <MoveLeft className="min-h-9 min-w-9" />
          </Link>
          <h1 className="text-4xl font-semibold">Edit Transaction</h1>
        </div>
        <TransactionFormSkeleton />
      </div>
    </>
  );
};

export default EditTransactionPageLoading;
