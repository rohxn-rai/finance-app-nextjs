import { CategoryOfTransaction, TypeOfTransaction } from "@/types/transaction";
import useFormatCurrency from "@/hooks/use-format-currency";
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TransactionItemActionButton from "@/components/transaction/transaction-item-action-button";

const TransactionItem = ({
  id,
  type,
  category,
  description,
  amount,
  onRemove,
}: {
  id: string | number;
  type: TypeOfTransaction;
  category: CategoryOfTransaction;
  description: string;
  amount: number;
  onRemove: Function;
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
    <li className="w-full flex flex-row gap-4 items-center">
      <div className="flex items-center grow">
        <IconComponent
          size={20}
          className={`${colors} mr-2 min-h-5 min-w-5 hidden md:flex`}
        />
        <span>{description}</span>
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        {category !== "" && <Badge>{category}</Badge>}
      </div>

      <div className="min-w-[70px] text-right">{formattedAmount}</div>

      <div className="min-w-[100px] flex justify-end">
        <TransactionItemActionButton id={id} onRemove={onRemove(id)} />
      </div>
    </li>
  );
};

export default TransactionItem;
