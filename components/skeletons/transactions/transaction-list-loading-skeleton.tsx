import TransactionSubListLoadingSkeleton from "./transaction-sub-list-loading-skeleton";

const TransactionListLoadingSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <TransactionSubListLoadingSkeleton />
        <TransactionSubListLoadingSkeleton />
      </div>
    </>
  );
};

export default TransactionListLoadingSkeleton;
