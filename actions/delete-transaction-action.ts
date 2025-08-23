"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import type { UUID } from "crypto";

const deleteTransaction = async (id: UUID) => {
  const supabase = await createClient();
  const { error } = await supabase.from("transactions").delete().eq("id", id);
  if (error) {
    console.log(error);

    throw new Error(`Could not delete the transaction ${id}`);
  }
  revalidatePath("/dashboard");
};

export default deleteTransaction;
