import TransactionSummaryItem
  from "@/components/transaction/transaction-summary-item";
import TransactionItem from "@/components/transaction/transaction-item";
import type { Transaction } from "@/types/transaction";
import { Separator } from "@/components/ui/separator";

const TransactionSubList = ( {
  date,
  transactions,
  amount,
  onRemove,
} : {
  date : string;
  transactions : Transaction[];
  amount : number;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onRemove : Function;
} ) => {
  return (
    <>
      <TransactionSummaryItem key={ date } date={ date } amount={ amount }/>
      <Separator/>
      <ul className="flex flex-col gap-4">
        { transactions.map ( ( transaction ) => (
          <TransactionItem
            { ...transaction }
            key={ transaction.id }
            onRemove={ onRemove }
          />
        ) ) }
      </ul>
    </>
  );
};

export default TransactionSubList;
