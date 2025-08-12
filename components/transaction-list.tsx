import type { Transaction } from "@/types/transaction";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "./transaction-summary-item";
import { Separator } from "@/components/ui/separator";
import TransactionSubList from "./transaction-sub-list";

interface Group {
  transactions: Transaction[];
  amount: number;
}

interface Grouped {
  [date: string]: Group;
}

const groupAndSumTransactionsByDate = (transactions: Transaction[]) => {
  const grouped: Grouped = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = {
        transactions: [],
        amount: 0,
      };
    }
    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};

const getSortedGroupedEntries = (
  grouped: Grouped,
  sort: "newest" | "oldest" = "newest"
) => {
  return Object.entries(grouped).sort(([dateA], [dateB]) => {
    if (sort === "newest") {
      return dateB.localeCompare(dateA);
    } else {
      return dateA.localeCompare(dateB);
    }
  });
};

const TransactionList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch("http://localhost:3100/transactions");

  const transactions: Transaction[] = await response.json();

  const grouped = groupAndSumTransactionsByDate(transactions);
  const sortedEntries = getSortedGroupedEntries(grouped);

  return (
    <div className="flex flex-col gap-8">
      {sortedEntries.map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSubList
            date={date}
            transactions={transactions}
            amount={amount}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
