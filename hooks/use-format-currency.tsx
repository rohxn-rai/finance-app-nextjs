import { useMemo } from "react";

const useFormatCurrency = (amount: number) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return useMemo(() => formatCurrency(amount), [amount]);
};

export default useFormatCurrency;
