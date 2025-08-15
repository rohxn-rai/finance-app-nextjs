import BaseTrend from "@/components/base-trend";
import { TypeOfTransaction } from "@/types/transaction";
import axios from "axios";

const Trend = async ( {
  type,
} : {
  type : TypeOfTransaction;
} ) => {
  const response = await axios.get ( `${ process.env.API_URL }/trends/${ type }` );
  
  const { amount, prevAmount } = await response.data;
  return <BaseTrend type={ type } amount={ amount } prevAmount={ prevAmount }/>;
};

export default Trend;
