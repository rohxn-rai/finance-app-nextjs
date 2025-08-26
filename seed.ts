import dotenv from "dotenv";

import type { UUID } from "crypto";

import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";

dotenv.config({
  path: ".env",
  debug: false,
});

type TypeOfTransaction = "Income" | "Expense" | "Investment" | "Saving";

type CategoryOfTransaction =
  | "Housing"
  | "Transport"
  | "Health"
  | "Food"
  | "Education"
  | "Other"
  | "";

interface Transaction {
  created_at: Date;
  amount: number;
  type: TypeOfTransaction;
  category: CategoryOfTransaction;
  description: string;
  user_id: UUID;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
);

const categories: CategoryOfTransaction[] = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Other",
];

const seedUsers = async () => {
  for (let i = 0; i < 5; i++) {
    try {
      const { error } = await supabase.auth.admin.createUser({
        email: faker.internet.email(),
        password: "Password",
      });

      if (error) throw new Error(error.message);

      console.log(`User ${i + 1} was added`);
    } catch (e) {
      console.error("Error adding user");
    }
  }
};

const seed = async () => {
  await seedUsers();

  const transactions: Transaction[] = [];

  const {
    data: { users },
    error: ListUsers,
  } = await supabase.auth.admin.listUsers();

  const userIds: UUID[] = users?.map((user) => user.id as UUID);

  if (ListUsers) {
    console.error("Cannot list users, aborting!");
    return;
  }

  for (let i = 0; i < 100; i++) {
    const created_at = faker.date.past();

    let type: TypeOfTransaction,
      category: CategoryOfTransaction = "";

    const user_id = faker.helpers.arrayElement(userIds);

    const typeBias = Math.random();

    if (typeBias < 0.8) {
      type = "Expense";
      category = faker.helpers.arrayElement(categories);
    } else if (typeBias < 0.9) {
      type = "Income";
    } else {
      type = faker.helpers.arrayElement(["Saving", "Investment"]);
    }

    let amount: number;

    switch (type) {
      case "Expense":
        amount = faker.number.int({
          min: 10,
          max: 1000,
        });
        break;
      case "Income":
        amount = faker.number.int({
          min: 2000,
          max: 9000,
        });
        break;
      case "Investment":
      case "Saving":
      default:
        amount = faker.number.int({
          min: 3000,
          max: 10000,
        });
        break;
    }

    transactions.push({
      created_at,
      amount,
      type,
      description: faker.lorem.sentence(),
      category,
      user_id,
    });
  }

  const { error } = await supabase.from("transactions").insert(transactions);

  if (error) {
    console.error(error);
  } else {
    console.log("Data inserted successfully.");
  }
};

seed().catch(console.error);
