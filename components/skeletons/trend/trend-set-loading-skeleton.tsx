import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TYPEOFTRANSACTION } from "@/constants/all-consts";

import BaseTrendLoadingSkeleton from "@/components/skeletons/trend/base-trend-loading-skeleton";
import Trend from "@/components/trend";
import BaseTrendError from "@/components/errors/trends/base-trend-error";
import type { FilterByTime } from "@/types/transaction";

const TrendSetLoadingSkeleton = ({ filter }: { filter: FilterByTime }) => {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
      {TYPEOFTRANSACTION.map((type) => (
        <ErrorBoundary key={type} fallback={<BaseTrendError type={type} />}>
          <Suspense fallback={<BaseTrendLoadingSkeleton type={type} />}>
            <Trend type={type} filter={filter} />
          </Suspense>
        </ErrorBoundary>
      ))}
    </section>
  );
};

export default TrendSetLoadingSkeleton;
