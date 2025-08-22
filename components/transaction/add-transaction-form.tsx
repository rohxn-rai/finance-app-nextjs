"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

import createTransactionAction from "@/actions/create-transaction-action";

import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION,
} from "@/constants/all-consts";
import {
  AddTransaction,
  CategoryOfTransaction,
  TransactionSchema,
  TypeOfTransaction,
} from "@/types/transaction";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

import { type Resolver, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddTransactionForm = () => {
  const router = useRouter();

  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<AddTransaction, object, AddTransaction>({
    resolver: zodResolver(TransactionSchema) as Resolver<
      AddTransaction,
      object,
      AddTransaction
    >,
    mode: "all",
    defaultValues: {
      type: "" as TypeOfTransaction,
      category: "" as CategoryOfTransaction,
      created_at: new Date(
        new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
      ),
      amount: undefined,
      description: "",
    },
    reValidateMode: "onChange",
  });

  const type = form.watch("type");

  console.log(form.getValues("created_at"));

  const onSubmit: SubmitHandler<AddTransaction> = async (
    data: AddTransaction
  ) => {
    setIsSaving(true);

    const randId = Math.random();
    toast.loading("Processing...", {
      id: `create:transaction-${randId}`,
    });

    try {
      const processedData = {
        ...data,
        amount: Number(data.amount),
      };

      const result = await createTransactionAction(processedData);

      if (!result.success) {
        throw new Error(result.error);
      }
      toast.dismiss(`create:transaction-${randId}`);

      toast.success("Transaction saved successfully.");

      router.push("/dashboard");
    } catch (err) {
      toast.dismiss(`create:transaction-${randId}`);
      toast.error(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    form.reset({
      type: "" as TypeOfTransaction,
      category: "" as CategoryOfTransaction,
      created_at: new Date(
        new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
      ),
      amount: undefined,
      description: "",
    });

    toast.success("Reset the form!");
  };

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="type">
                    Type<span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value: TypeOfTransaction) => {
                      field.onChange(value);

                      if (value !== "Expense") {
                        form.setValue("category", "");
                      }
                    }}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type of transaction ..." />
                    </SelectTrigger>
                    <SelectContent>
                      {TYPEOFTRANSACTION.map((type) => (
                        <SelectItem value={type} key={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="category">
                    Category
                    {type === "Expense" && (
                      <span className="text-destructive">*</span>
                    )}
                  </FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={type !== "Expense"}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category of transactions ..." />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORYOFTRANSACTION.map((type) => (
                        <SelectItem value={type} key={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="created_at"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="created_at">
                    Date<span className="text-destructive">*</span>
                  </FormLabel>
                  <DatePicker id="created_at" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="amount">
                    Amount<span className="text-destructive">*</span>
                  </FormLabel>
                  <div className="relative inline-flex gap-1">
                    <span className="absolute top-1.5 left-3 flex h-4 w-4">
                      $
                    </span>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="999.99"
                      className="pl-8"
                      value={field.value ?? ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value;
                        field.onChange(
                          value === "" ? undefined : Number(value)
                        );
                      }}
                      onBlur={field.onBlur}
                      name={field.name}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="md:col-span-2 flex flex-col gap-2">
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea
                    id="description"
                    rows={2}
                    placeholder="Enter Description ..."
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="flex flex-row items-center text-xs">
              <span className="text-destructive">*</span>
              These fields are mandatory.
            </div>
            <div className="flex flex-row gap-4 justify-end">
              <Button
                variant="destructive"
                type="button"
                onClick={handleReset}
                disabled={isSaving}
              >
                Reset
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving ..." : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddTransactionForm;
