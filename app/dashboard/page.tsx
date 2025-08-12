import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-list-loading-skeleton";
import TransactionList from "@/components/transaction-list";
import Trend from "@/components/trend";

import { Suspense } from "react";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Trend type="Income" />
          <Trend type="Expense" />
          <Trend type="Investment" />
          <Trend type="Saving" />
        </section>
      <Suspense fallback={<TransactionItemLoadingSkeleton />}>
        <TransactionList />
      </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
