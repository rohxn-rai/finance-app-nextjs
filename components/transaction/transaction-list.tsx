import type { Transaction } from "@/types/transaction";
import TransactionSubList from "@/components/transaction/transaction-sub-list";
import { createClient } from "@/lib/supabase/server";

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
    const date : string = transaction.created_at.toString ().split ( "T" )[0];
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


const TransactionList = async () => {
  const supabase = await createClient ()
  
  const {
    data : transactions,
    error
  } = await supabase.from ( "transactions" )
    .select ( "*" )
    .order ( "created_at", { ascending : false } )
  
  const grouped = groupAndSumTransactionsByDate ( transactions! );
  
  return (
    <section className="flex flex-col gap-8">
      { Object.entries ( grouped ).map ( ( [ date, {
        transactions,
        amount
      } ] ) => (
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
