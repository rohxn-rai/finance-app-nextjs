import fetchTransactionsAction from "@/actions/fetch-transactions-action";
import type { FilterByTime } from "@/types/transaction";
import TransactionList from "@/components/transaction/transaction-list";

const TransactionListWrapper = async ({ filter }: { filter: FilterByTime }) => {
  const transactions = await fetchTransactionsAction(filter);
  return (
    <TransactionList
      initialTransactions={transactions}
      key={filter}
      filter={filter}
    />
  );
};

export default TransactionListWrapper;
