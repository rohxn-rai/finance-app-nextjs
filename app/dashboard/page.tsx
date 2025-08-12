import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-list-loading-skeleton";
import TransactionList from "@/components/transaction-list";
import { Suspense } from "react";

const DashboardPage = () => {
  return (
    <>
      <Suspense fallback={<TransactionItemLoadingSkeleton />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default DashboardPage;
