import { z } from "zod";
import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION
} from "@/constants/all-consts";

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
  "Other" |
  "";

export interface Transaction {
  id : number;
  amount : number;
  type : TypeOfTransaction
  description : string;
  category : CategoryOfTransaction;
  created_at : Date;
}

export const TransactionSchema = z.object ( {
  type : z.enum ( TYPEOFTRANSACTION, "Choose a type from the given options." ),
  category : z.enum (
    CATEGORYOFTRANSACTION,
    "Choose a category from the given options."
  ),
  created_at : z.date ( "Enter a valid date." ),
  amount : z.number ().min ( 0.01, "Amount must be greater than 0." ),
  description : z.string ( "Enter proper description." )
    .min ( 1, "Description is required." )
    .max ( 64, "Description can not exceed 64 characters." )
} );

export type AddTransaction = z.infer<typeof TransactionSchema>;
