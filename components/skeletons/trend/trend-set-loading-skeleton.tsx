import BaseTrendLoadingSkeleton
  from "@/components/skeletons/trend/base-trend-loading-skeleton";
import Trend from "@/components/trend";

import {Suspense} from "react";

const TrendSetLoadingSkeleton = () => {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <Suspense fallback={<BaseTrendLoadingSkeleton type="Income"/>}>
        <Trend type="Income"/>
      </Suspense>
      <Suspense fallback={<BaseTrendLoadingSkeleton type="Expense"/>}>
        <Trend type="Expense"/>
      </Suspense>
      <Suspense fallback={<BaseTrendLoadingSkeleton type="Investment"/>}>
        <Trend type="Investment"/>
      </Suspense>
      <Suspense fallback={<BaseTrendLoadingSkeleton type="Saving"/>}>
        <Trend type="Saving"/>
      </Suspense>
    </section>
  )
}

export default TrendSetLoadingSkeleton;