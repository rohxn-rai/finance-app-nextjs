import React from "react";

import { Separator } from "@/components/ui/separator";
import TransactionItem from "@/components/transaction/transaction-item";

const PlaygroundTransactionItems = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
      <Separator />
      <div className="flex flex-col gap-4">
        <TransactionItem
          id={1}
          type="Income"
          category=""
          description="Salary"
          amount={2000}
          onRemove={() => console.log("Removed!")}
        />
        <TransactionItem
          id={2}
          type="Expense"
          category="Food"
          description="Going out to eat"
          amount={29}
          onRemove={() => console.log("Removed!")}
        />
        <TransactionItem
          id={3}
          type="Saving"
          category=""
          description="For children"
          amount={500}
          onRemove={() => console.log("Removed!")}
        />
        <TransactionItem
          id={4}
          type="Investment"
          category=""
          description="In Microsoft"
          amount={9000}
          onRemove={() => console.log("Removed!")}
        />
      </div>
    </div>
  );
};

export default PlaygroundTransactionItems;
