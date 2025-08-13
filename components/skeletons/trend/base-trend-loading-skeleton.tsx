import { Skeleton } from "@/components/ui/skeleton";
import { TypeOfTransaction } from "@/types/transaction";

const BaseTrendLoadingSkeleton = ( { type } : {
  type : TypeOfTransaction;
} ) => {
  const colorClasses = {
    Income : "text-green-700 dark:text-green-300",
    Expense : "text-red-700 dark:text-red-300",
    Investment : "text-indigo-700 dark:text-indigo-300",
    Saving : "text-yellow-700 dark:text-yellow-300",
  };
  
  return (
    <div>
      <div className={ `font-semibold ${ colorClasses[type] }` }>{ type }</div>
      <div className="mb-2">
        <Skeleton className="w-full h-8"/>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Skeleton className="w-6 h-6"/>
        <Skeleton className="w-full h-6"/>
      </div>
    </div>
  )
}

export default BaseTrendLoadingSkeleton;