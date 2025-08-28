import React from "react";

import { Separator } from "@/components/ui/separator";
import BaseTrend from "@/components/base-trend";

const PlaygroundTrends = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-mono">Trend</h2>
      <Separator />
      <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-8">
        <BaseTrend type="Income" amount={1000} prevAmount={900} />
        <BaseTrend type="Expense" amount={12000} prevAmount={10000} />
        <BaseTrend type="Investment" amount={7000} prevAmount={11100} />
        <BaseTrend type="Saving" amount={500} prevAmount={950} />
      </div>
    </div>
  );
};

export default PlaygroundTrends;
