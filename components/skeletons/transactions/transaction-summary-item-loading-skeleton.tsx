import { Skeleton } from "@/components/ui/skeleton";

const TransactionSummaryItemLoadingSkeleton = () => {
  return (
    <div className="flex flex-row gap-4 text-gray-500 dark:text-gray-400 font-semibold">
      <Skeleton className="h-6 w-full" />

      <div className="min-w-[70px] text-right font-semibold">
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="min-w-[50px]">
        <Skeleton className="h-6 w-full" />
      </div>
    </div>
  );
};

export default TransactionSummaryItemLoadingSkeleton;
