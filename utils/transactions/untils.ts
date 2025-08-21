import type { Transaction } from "@/types/transaction";

interface Group {
  transactions: Transaction[];
  amount: number;
}

interface Grouped {
  [date: string]: Group;
}

export const groupAndSumTransactionsByDate = (transactions: Transaction[]) => {
  const grouped: Grouped = {};
  for (const transaction of transactions) {
    const date: string = transaction.created_at.toString().split("T")[0];
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
