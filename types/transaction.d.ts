export type TypesOfTransaction =
  "Income" |
  "Expense" |
  "Investment" |
  "Saving";


export type CategoryOfTransaction =
  "Housing" |
  "Transport" |
  "Health" |
  "Food" |
  "Education" |
  "Other" |
  "";


export interface Transaction {
  id : number;
  amount : number;
  type : TypesOfTransaction
  description : string;
  category : CategoryOfTransaction;
  created_at : string;
}
