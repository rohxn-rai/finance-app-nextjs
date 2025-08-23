"use server";

import { revalidatePath } from "next/cache";
import { AddTransaction, TransactionSchema } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";
import type { UUID } from "crypto";

const editTransactionAction = async (id: UUID, data: AddTransaction) => {
  try {
    const validateData = TransactionSchema.safeParse(data);

    if (!validateData.success) {
      return { success: false, error: "Invalid transaction data." };
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("transactions")
      .update(validateData.data)
      .eq("id", id);

    if (error) {
      console.log(error);
      return { success: false, error: "Failed to update transaction." };
    }

    revalidatePath("/dashboard", "layout");
    return { success: true };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error:
        err instanceof Error ? err.message : "An unexpected error occurred.",
    };
  }
};

export default editTransactionAction;
