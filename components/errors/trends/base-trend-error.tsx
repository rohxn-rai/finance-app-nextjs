import { TypeOfTransaction } from "@/types/transaction";

const BaseTrendError = ( { type } : {
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
      <div
        className="text-2xl font-semibold text-destructive dark:text-destructive mb-2">
        Error!
      </div>
      <div
        className="flex items-center text-sm text-destructive dark:text-destructive">
        Server Unreachable!
      </div>
    </div>
  )
}

export default BaseTrendError;
