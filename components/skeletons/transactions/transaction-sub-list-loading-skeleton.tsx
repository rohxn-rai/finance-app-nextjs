import { Separator } from "@/components/ui/separator";
import TransactionSummaryItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-summary-item-loading-skeleton";
import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-item-loading-skeleton";

const TransactionSubListLoadingSkeleton = () => {
  return (
    <div>
      <TransactionSummaryItemLoadingSkeleton />
      <Separator />
      <div className="flex flex-col gap-4">
        <TransactionItemLoadingSkeleton />
        <TransactionItemLoadingSkeleton />
        <TransactionItemLoadingSkeleton />
      </div>
    </div>
  );
};

export default TransactionSubListLoadingSkeleton;
