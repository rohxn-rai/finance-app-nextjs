import Link from "next/link";
import { Suspense } from "react";

import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-list-loading-skeleton";
import TransactionList from "@/components/transaction/transaction-list";
import TrendSetLoadingSkeleton from "@/components/skeletons/trend/trend-set-loading-skeleton";
import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import FilterByTimeRecent from "@/components/filters/filter-by-time-dashboard";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-semibold mt-2.5">Summary</h1>
          <FilterByTimeRecent />
        </section>
        <TrendSetLoadingSkeleton />
        <section className="flex flex-row justify-between items-center">
          <h2 className="text-2xl">Transactions</h2>
          <Link href="/dashboard/transaction/add">
            <Button variant="outline" size="sm" className="cursor-pointer">
              <PlusCircle className="w-4 h-4" />
              <span>Add</span>
            </Button>
          </Link>
        </section>
        <Suspense fallback={<TransactionItemLoadingSkeleton />}>
          <TransactionList />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
