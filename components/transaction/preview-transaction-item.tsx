import type {
  CategoryOfTransaction,
  TypeOfTransaction,
} from "@/types/transaction";

import { Badge } from "@/components/ui/badge";

import useFormatCurrency from "@/hooks/use-format-currency";

import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";

const PreviewTransactionItem = ({
  type,
  description,
  amount,
}: {
  id: string | number;
  type: TypeOfTransaction;
  description: string;
  amount: number;
}) => {
  const typesMap = {
    Income: {
      icon: HandCoins,
      colors: "text-green-500 dark:text-green-400",
    },
    Expense: {
      icon: Wallet,
      colors: "text-red-500 dark:text-red-400",
    },
    Investment: {
      icon: Landmark,
      colors: "text-indigo-500 dark:text-indigo-400",
    },
    Saving: {
      icon: PiggyBank,
      colors: "text-yellow-500 dark:text-yellow-400",
    },
  };

  const IconComponent = typesMap[type].icon;
  const colors = typesMap[type].colors;

  const formattedAmount = useFormatCurrency(amount);

  return (
    <li className="w-full flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex flex-row gap-2 items-center grow">
        <IconComponent size={20} className={`${colors} mr-2 min-h-5 min-w-5`} />
        <span>{description}</span>
      </div>

      <div className="min-w-[70px] text-right">{formattedAmount}</div>
    </li>
  );
};

export default PreviewTransactionItem;
