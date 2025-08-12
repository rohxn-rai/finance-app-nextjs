import { Skeleton } from "@/components/ui/skeleton";

const TransactionItemLoadingSkeleton = () => {
  return (
    <li className="w-full flex flex-row gap-4 items-center">
      <div className="flex items-center grow">
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="min-w-[70px] text-right">
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="min-w-[50px] flex justify-end">
        <Skeleton className="h-6 w-full" />
      </div>
    </li>
  );
};

export default TransactionItemLoadingSkeleton;
