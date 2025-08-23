import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import { MoveLeft } from "lucide-react";
import EditTransactionForm from "@/components/transaction/edit-transaction-form";
import type { UUID } from "crypto";

export const metadata: Metadata = {
  title: "Edit Transaction",
  description: "Edit your transactions from your account",
};

const EditTransactionPageComponent = async ({
  params,
}: {
  params: { id: UUID };
}) => {
  const { id } = await params;
  const supabase = await createClient();

  const { data: transaction, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();

  return (
    <>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-row items-center gap-8">
          <Link href="/dashboard">
            <MoveLeft className="min-h-9 min-w-9" />
          </Link>
          <h1 className="text-4xl font-semibold">Edit Transaction</h1>
        </div>
        <EditTransactionForm initialData={transaction} />
      </div>
    </>
  );
};

export default EditTransactionPageComponent;
