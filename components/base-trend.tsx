import { useMemo } from "react";
import { TypesOfTransaction } from "@/types/transaction";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import useFormatCurrency from "@/hooks/use-format-currency";

const BaseTrend = ( {
  type,
  amount,
  prevAmount,
} : {
  type : TypesOfTransaction;
  amount : number;
  prevAmount? : number;
} ) => {
  const colorClasses = {
    Income : "text-green-700 dark:text-green-300",
    Expense : "text-red-700 dark:text-red-300",
    Investment : "text-indigo-700 dark:text-indigo-300",
    Saving : "text-yellow-700 dark:text-yellow-300",
  };
  
  const calcPercentageChange = ( amount : number, prevAmount? : number ) => {
    if ( !prevAmount || !amount ) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };
  
  const percentageChange = useMemo (
    () => calcPercentageChange ( amount, prevAmount ),
    [ amount, prevAmount ]
  );
  
  const formattedAmount = useFormatCurrency ( amount );
  
  return (
    <div>
      <div className={ `font-semibold ${ colorClasses[type] }` }>{ type }</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        { formattedAmount }
      </div>
      <div className="flex flex-row gap-1 items-center text-sm">
        { percentageChange <= 0 && (
          <ArrowDownLeft className="text-red-700 dark:text-red-300"/>
        ) }
        { percentageChange > 0 && (
          <ArrowUpRight className="text-green-700 dark:text-green-300"/>
        ) }
        { percentageChange.toFixed ( 0 ) }% vs last period
      </div>
    </div>
  );
};

export default BaseTrend;
