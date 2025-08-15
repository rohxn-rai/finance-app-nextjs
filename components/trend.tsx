import BaseTrend from "@/components/base-trend";
import { TypeOfTransaction } from "@/types/transaction";

const Trend = async ( {
  type,
} : {
  type : TypeOfTransaction;
} ) => {
  const response = await fetch ( `${ process.env.API_RULE }/trends/${ type }` );
  
  const { amount, prevAmount } = await response.json ();
  return <BaseTrend type={ type } amount={ amount } prevAmount={ prevAmount }/>;
};

export default Trend;
