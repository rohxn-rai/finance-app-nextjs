import TransactionItemLoadingSkeleton
  from "@/components/skeletons/transactions/transaction-list-loading-skeleton";
import TransactionList from "@/components/transaction-list";
import TrendSetLoadingSkeleton
  from "@/components/skeletons/trend/trend-set-loading-skeleton";

import {Suspense} from "react";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <TrendSetLoadingSkeleton/>
        <Suspense fallback={<TransactionItemLoadingSkeleton/>}>
          <TransactionList/>
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
