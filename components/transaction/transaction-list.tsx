"use client";

import { useState } from "react";

import fetchTransactionsAction from "@/actions/fetch-transactions-action";

import TransactionSubList from "@/components/transaction/transaction-sub-list";
import { Button } from "@/components/ui/button";
import type { FilterByTime, Transaction } from "@/types/transaction";
import { groupAndSumTransactionsByDate } from "@/utils/transactions/untils";

import { LoaderCircle } from "lucide-react";

const TransactionList = ({
  initialTransactions,
  filter,
}: {
  initialTransactions: Transaction[];
  filter: FilterByTime;
}) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [offset, setOffset] = useState(initialTransactions.length);
  const [isLoading, setIsLoading] = useState(false);
  const [removeButton, setRemoveButton] = useState(
    initialTransactions.length === 0
  );
  const grouped = groupAndSumTransactionsByDate(transactions);

  const handleLoadMore = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    try {
      const nextSetOfTransactions = await fetchTransactionsAction(
        filter,
        offset,
        10
      );
      setOffset((prevValue) => prevValue + nextSetOfTransactions.length);
      setRemoveButton(offset % 10 !== 0);
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        ...nextSetOfTransactions,
      ]);
    } catch (err) {
      throw new Error("Cannot fetch data at the moment!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSubList
            date={date}
            transactions={transactions}
            amount={amount}
          />
        </div>
      ))}
      {transactions.length === 0 && (
        <span className="flex justify-center text-muted-foreground dark:text-muted-foreground">
          No transactions found
        </span>
      )}
      {!removeButton && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className={`flex flex-row gap-2 ${
              isLoading ? "" : "cursor-pointer"
            }`}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading && <LoaderCircle className="animate-spin" />}
            Load more ...
          </Button>
        </div>
      )}
    </section>
  );
};

export default TransactionList;
