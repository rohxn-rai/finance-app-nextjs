import BaseTrend from "@/components/base-trend";
import {
  type FilterByTime,
  type SupabaseTrendData,
  TypeOfTransaction,
} from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";

const Trend = async ( {
  type,
  filter = "last30days",
} : {
  type : TypeOfTransaction;
  filter : FilterByTime;
} ) => {
  const supabase = await createClient ();
  
  const { data, error } = await supabase.rpc ( "calculate_total", {
    range_arg : filter,
    type_arg : type,
  } );
  
  if ( error ) console.error ( error );
  
  const amounts : SupabaseTrendData = data[0];
  
  return (
    <BaseTrend
      type={ type }
      amount={ amounts.current_amount }
      prevAmount={ amounts.previous_amount }
    />
  );
};

export default Trend;
