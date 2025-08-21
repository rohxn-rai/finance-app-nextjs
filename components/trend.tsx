import BaseTrend from "@/components/base-trend";
import { TypeOfTransaction } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";

const Trend = async ({ type }: { type: TypeOfTransaction }) => {
  const supabase = await createClient();

  let { data, error } = await supabase.rpc("calculate_total", {
    type_arg: type,
  });

  if (error) console.error(error);

  const amount = data ?? 0;

  return <BaseTrend type={type} amount={amount} prevAmount={amount} />;
};

export default Trend;
