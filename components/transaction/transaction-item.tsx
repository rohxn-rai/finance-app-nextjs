import { CategoryOfTransaction, TypesOfTransaction } from "@/types/transaction";
import useFormatCurrency from "@/hooks/use-format-currency";
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TransactionItem = ( {
  type,
  category,
  description,
  amount,
} : {
  type : TypesOfTransaction;
  category? : CategoryOfTransaction;
  description : string;
  amount : number;
} ) => {
  const typesMap = {
    Income : {
      icon : HandCoins,
      colors : "text-green-500 dark:text-green-400",
    },
    Expense : {
      icon : Wallet,
      colors : "text-red-500 dark:text-red-400",
    },
    Investment : {
      icon : Landmark,
      colors : "text-indigo-500 dark:text-indigo-400",
    },
    Saving : {
      icon : PiggyBank,
      colors : "text-yellow-500 dark:text-yellow-400",
    },
  };
  
  const IconComponent = typesMap[type].icon;
  const colors = typesMap[type].colors;
  
  const formattedAmount = useFormatCurrency ( amount );
  
  return (
    <li className="w-full flex flex-row gap-4 items-center">
      <div className="flex items-center grow">
        <IconComponent
          className={ `${ colors } mr-2 w-4 h-4 hidden md:block` }/>
        <span>{ description }</span>
      </div>
      
      <div className="min-w-[150px] items-center hidden md:flex">
        { category && <Badge>{ category }</Badge> }
      </div>
      
      <div className="min-w-[70px] text-right">{ formattedAmount }</div>
      
      <div className="min-w-[50px] flex justify-end">...</div>
    </li>
  );
};

export default TransactionItem;
