"use server"

import { revalidateTag } from "next/cache";

const revalidateTransactionListAction = async () => {
  revalidateTag ( "transaction-list" );
}

export default revalidateTransactionListAction