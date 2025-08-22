import { z } from "zod";
import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION,
} from "@/constants/all-consts";

export type FilterByTime =
  | "today"
  | "last7days"
  | "last30days"
  | "last12months";

export interface SupabaseTrendData {
  current_amount: number;
  previous_amount: number;
}

export type TypeOfTransaction = "Income" | "Expense" | "Investment" | "Saving";

export type CategoryOfTransaction =
  | "Housing"
  | "Transport"
  | "Health"
  | "Food"
  | "Education"
  | "Other"
  | "";

export interface Transaction {
  id: string;
  amount: number;
  type: TypeOfTransaction;
  description: string;
  category: CategoryOfTransaction;
  created_at: Date;
}

export const TransactionSchema = z
  .object({
    type: z.enum(TYPEOFTRANSACTION, "Choose a type from the given options."),
    category: z.preprocess(
      (val: string | undefined) => (val?.length ? val : undefined),
      z.string("Enter a valid category for expense.").optional()
    ),
    created_at: z.date("Enter a valid date."),
    amount: z
      .number("Enter amount of transaction.")
      .nonnegative("Enter amount cannot be negative."),
    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "Expense") {
      if (
        data.category === undefined ||
        !CATEGORYOFTRANSACTION.includes(data.category as CategoryOfTransaction)
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["category"],
          message: "Category is required for expense.",
        });
      }
    }

    if (data.created_at > new Date()) {
      ctx.addIssue({
        code: "custom",
        path: ["created_at"],
        message: "Date cannot be in the future.",
      });
    }
  });

export type AddTransaction = z.infer<typeof TransactionSchema>;
