import { Metadata } from "next";
import Link from "next/link";

import AddTransactionForm from "@/components/transaction/add-transaction-form";

import { MoveLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Add Transaction",
  description: "Add your transactions to your account",
};

const AddTransactionPage = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="flex flex-row items-center gap-8">
        <Link href="/dashboard">
          <MoveLeft className="min-h-9 min-w-9" />
        </Link>
        <h1 className="text-4xl font-semibold">Add Transaction</h1>
      </div>
      <AddTransactionForm />
    </div>
  );
};

export default AddTransactionPage;
