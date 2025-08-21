import BaseTrend from "@/components/base-trend";
import {
  TypeOfTransaction,
  type FilterByTime,
  type SupabaseTrendData,
} from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";

const Trend = async ({
  type,
  filter = "last30days",
}: {
  type: TypeOfTransaction;
  filter: FilterByTime;
}) => {
  const supabase = await createClient();

  let { data, error } = await supabase.rpc("calculate_total", {
    range_arg: filter,
    type_arg: type,
  });

  if (error) console.error(error);

  const amounts: SupabaseTrendData = data[0];

  return (
    <BaseTrend
      type={type}
      amount={amounts.current_amount}
      prevAmount={amounts.previous_amount}
    />
  );
};

export default Trend;
