import useFormatCurrency from "@/hooks/use-format-currency";
import { cn } from "@/lib/utils";

const TransactionSummaryItem = ({
  date,
  amount,
}: {
  date: string;
  amount: number;
}) => {
  const formattedAmount = useFormatCurrency(amount);

  return (
    <div
      className={cn(
        "flex flex-row gap-4 text-muted-foreground ",
        "dark:text-muted-foreground font-semibold"
      )}
    >
      <div className="grow">{date}</div>

      <div className="min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>

      <div className="hidden xs:flex min-w-[100px]"></div>
    </div>
  );
};

export default TransactionSummaryItem;
