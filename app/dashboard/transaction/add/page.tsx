import { Metadata } from "next";
import AddTransactionForm from "@/components/transaction/add-transaction-form";

export const metadata : Metadata = {
  title : "Add Transaction",
  description : "Add your transactions to your account",
}

const AddTransactionPage = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Add Transaction</h1>
    </>
  )
}

export default AddTransactionPage