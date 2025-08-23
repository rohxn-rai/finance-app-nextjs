import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TransactionItemActionButton from "@/components/transaction/transaction-item-action-button";

import { CategoryOfTransaction, TypeOfTransaction } from "@/types/transaction";
import useFormatCurrency from "@/hooks/use-format-currency";
import {
  HandCoins,
  Landmark,
  PencilLine,
  PiggyBank,
  Wallet,
} from "lucide-react";
import type { UUID } from "crypto";

const TransactionItem = ({
  id,
  type,
  category,
  description,
  amount,
  onRemove,
}: {
  id: UUID | number;
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
      <div className="flex flex-row gap-2 items-center grow">
        <IconComponent
          size={20}
          className={`${colors} mr-2 min-h-5 min-w-5 hidden xs:flex`}
        />
        <span>{description}</span>
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        {category !== "" && <Badge>{category}</Badge>}
      </div>

      <div className="min-w-[70px] text-right">{formattedAmount}</div>

      <div className="min-w-[50px] xs:min-w-[100px] flex justify-end">
        <div className="flex flex-col xs:flex-row gap-2 items-center">
          <Link href={`/dashboard/transaction/${id}/edit`}>
            <Button variant="outline" size="sm">
              <PencilLine />
            </Button>
          </Link>
          <TransactionItemActionButton
            id={id}
            type={type}
            description={description}
            amount={amount}
            onRemove={onRemove(id)}
          />
        </div>
      </div>
    </li>
  );
};

export default TransactionItem;
