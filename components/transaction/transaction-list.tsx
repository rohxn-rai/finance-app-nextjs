import type { Transaction } from "@/types/transaction";
import TransactionSubList from "./transaction-sub-list";

interface Group {
  transactions : Transaction[];
  amount : number;
}

interface Grouped {
  [date : string] : Group;
}

const groupAndSumTransactionsByDate = ( transactions : Transaction[] ) => {
  const grouped : Grouped = {};
  for ( const transaction of transactions ) {
    const date = transaction.created_at.split ( "T" )[0];
    if ( !grouped[date] ) {
      grouped[date] = {
        transactions : [],
        amount : 0,
      };
    }
    grouped[date].transactions.push ( transaction );
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }
  
  return grouped;
};

const getSortedGroupedEntries = (
  grouped : Grouped,
  sort : "newest" | "oldest" = "newest"
) => {
  return Object.entries ( grouped ).sort ( ( [ dateA ], [ dateB ] ) => {
    if ( sort === "newest" ) {
      return dateB.localeCompare ( dateA );
    } else {
      return dateA.localeCompare ( dateB );
    }
  } );
};

const TransactionList = async () => {
  const response = await fetch ( `${ process.env.API_URL }/transactions`, );
  
  const transactions : Transaction[] = await response.json ();
  
  const grouped = groupAndSumTransactionsByDate ( transactions );
  const sortedEntries = getSortedGroupedEntries ( grouped );
  
  return (
    <section className="flex flex-col gap-8">
      { sortedEntries.map ( ( [ date, { transactions, amount } ] ) => (
        <div key={ date }>
          <TransactionSubList
            date={ date }
            transactions={ transactions }
            amount={ amount }
          />
        </div>
      ) ) }
    </section>
  );
};

export default TransactionList;
