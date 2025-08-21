"use server";

import type { FilterByTime } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";

const fetchTransactionsAction = async (
  filter: FilterByTime,
  offset: number = 0,
  limit: number = 10
) => {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("fetch_transactions", {
    limit_arg: limit,
    offset_arg: offset,
    range_arg: filter,
  });

  if (error) throw new Error("We can't fetch transactions");

  return data;
};

export default fetchTransactionsAction;
