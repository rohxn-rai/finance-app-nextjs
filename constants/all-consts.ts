import {
  CategoryOfTransaction,
  TypeOfTransaction,
  type FilterByTime,
} from "@/types/transaction";

export const TYPEOFTRANSACTION: TypeOfTransaction[] = [
  "Income",
  "Expense",
  "Investment",
  "Saving",
];

export const CATEGORYOFTRANSACTION: CategoryOfTransaction[] = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Other",
];

export const FILTERBYTIME: FilterByTime[] = [
  "last24hours",
  "last7days",
  "last30days",
  "last3months",
  "last12months",
];
