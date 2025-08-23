import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

const TransactionFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="type">Type</Label>
          <Skeleton className="w-full h-9" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="category">Category</Label>
          <Skeleton className="w-full h-9" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="created_at">Date</Label>
          <Skeleton className="w-full h-9" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Skeleton className="w-full h-9" />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <Label htmlFor="description">Description</Label>
          <Skeleton className="w-full h-16" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <div className="flex flex-row items-center text-xs">
          <Skeleton className="h-9 w-32" />
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-20" />
        </div>
      </div>
    </div>
  );
};

export default TransactionFormSkeleton;
