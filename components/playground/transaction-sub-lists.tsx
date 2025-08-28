import React from "react";

import TransactionSummaryItem from "@/components/transaction/transaction-summary-item";
import { Separator } from "@/components/ui/separator";
import TransactionItem from "@/components/transaction/transaction-item";

const PlaygroundTransactionSubLists = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">
        Transaction Summary Item + Transaction Item
      </h2>
      <Separator />
      <div className="flex flex-col">
        <TransactionSummaryItem date="2025-08-11" amount={3500} />
        <Separator />
        <div className="flex flex-col gap-4">
          <TransactionItem
            id={5}
            type="Income"
            category=""
            description="Salary"
            amount={2000}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={6}
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={7}
            type="Saving"
            category=""
            description="For children"
            amount={500}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={8}
            type="Investment"
            category=""
            description="In Microsoft"
            amount={9000}
            onRemove={() => console.log("Removed!")}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundTransactionSubLists;
