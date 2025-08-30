import Link from "next/link";
import { Suspense } from "react";

import type { FilterByTime } from "@/types/transaction";

import { createClient } from "@/utils/supabase/server";

import TrendSetLoadingSkeleton from "@/components/skeletons/trend/trend-set-loading-skeleton";
import FilterByTimeRecent from "@/components/filters/filter-by-time-dashboard";
import { Button } from "@/components/ui/button";
import TransactionListWrapper from "@/components/transaction/transaction-list-wrapper";
import TransactionItemLoadingSkeleton from "@/components/skeletons/transactions/transaction-list-loading-skeleton";

import { PlusCircle } from "lucide-react";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [filter: string]: FilterByTime | undefined }>;
}) => {
  const params = await searchParams;
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  let defaultView: FilterByTime = "last3months";

  if (!error) defaultView = user?.user_metadata?.defaultView ?? "last3months";

  const filter: FilterByTime = params?.filter ?? defaultView;

  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="flex xs:flex-row flex-col xs:justify-between gap-8 md:items-center">
          <h1 className="text-4xl font-semibold mt-3">Summary</h1>
          <FilterByTimeRecent defaultView={defaultView} />
        </section>
        <TrendSetLoadingSkeleton filter={filter} />
        <section className="flex flex-row justify-between items-center">
          <h2 className="text-2xl">Transactions</h2>
          <Link href="/dashboard/transaction/add">
            <Button variant="outline" size="sm">
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
