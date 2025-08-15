import { Metadata } from "next";
import AddTransactionForm from "@/components/transaction/add-transaction-form";

export const metadata : Metadata = {
  title : "Add Transaction",
  description : "Add your transactions to your account",
}

const AddTransactionPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-semibold mb-8">Add Transaction</h1>
      <AddTransactionForm/>
    </div>
  )
}

export default AddTransactionPage