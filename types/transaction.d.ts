export type TypeOfTransaction =
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
  "Other";

export interface Transaction {
  id : number;
  amount : number;
  type : TypeOfTransaction
  description : string;
  category : CategoryOfTransaction;
  created_at : Date;
}
