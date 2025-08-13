import BaseTrend from "@/components/base-trend";
import { TypeOfTransaction } from "@/types/transaction";

const Trend = async ( {
  type,
} : {
  type : TypeOfTransaction;
} ) => {
  const response = await fetch ( `http://localhost:3100/trends/${ type }` );
  
  const { amount, prevAmount } = await response.json ();
  return <BaseTrend type={ type } amount={ amount } prevAmount={ prevAmount }/>;
};

export default Trend;
