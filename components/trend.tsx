import BaseTrend from "@/components/base-trend";

const Trend = async ({
  type,
}: {
  type: "Income" | "Expense" | "Investment" | "Saving";
}) => {
  const response = await fetch(`http://localhost:3100/trends/${type}`);

  const { amount, prevAmount } = await response.json();
  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trend;
