import Link from "next/link";
import { Suspense } from "react";

import TrendSetLoadingSkeleton from "@/components/skeletons/trend/trend-set-loading-skeleton";
import FilterByTimeRecent from "@/components/filters/filter-by-time-dashboard";
import { Button } from "@/components/ui/button";
import TransactionListWrapper from "@/components/transaction/transaction-list-wrapper";
import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-list-loading-skeleton";

import { PlusCircle } from "lucide-react";
import type { FilterByTime } from "@/types/transaction";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: FilterByTime | undefined }>;
}) => {
  const { filter = "last30days" } = await searchParams;

  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-semibold mt-2.5">Summary</h1>
          <FilterByTimeRecent />
        </section>
        <TrendSetLoadingSkeleton filter={filter} />
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
          <TransactionListWrapper filter={filter} />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
