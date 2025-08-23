import { Metadata } from "next";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import TransactionItem from "@/components/transaction/transaction-item";
import TransactionSummaryItem from "@/components/transaction/transaction-summary-item";
import BaseTrend from "@/components/base-trend";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "This is a small list of all the tools create and used in this project!",
};

const PlaygroundPage = () => {
  return (
    <main className="flex flex-col mb-44 gap-8">
      <h1 className="text-4xl mt-8">Playground Page</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">Page Header</h2>
        <Separator />
        <div>
          <Header />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <Separator />
        <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-8">
          <BaseTrend type="Income" amount={1000} prevAmount={900} />
          <BaseTrend type="Expense" amount={12000} prevAmount={10000} />
          <BaseTrend type="Investment" amount={7000} prevAmount={11100} />
          <BaseTrend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
        <Separator />
        <div className="flex flex-col gap-4">
          <TransactionItem
            id={1}
            type="Income"
            category=""
            description="Salary"
            amount={2000}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={2}
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={3}
            type="Saving"
            category=""
            description="For children"
            amount={500}
            onRemove={() => console.log("Removed!")}
          />
          <TransactionItem
            id={4}
            type="Investment"
            category=""
            description="In Microsoft"
            amount={9000}
            onRemove={() => console.log("Removed!")}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          Transaction Summary Item + Transaction Item
        </h2>
        <Separator />
        <div className="flex flex-col">
          <TransactionSummaryItem date="2025-08-11" amount={3500} />
          <Separator />
          <div className="flex flex-col gap-4">
            <TransactionItem
              id={5}
              type="Income"
              category=""
              description="Salary"
              amount={2000}
              onRemove={() => console.log("Removed!")}
            />
            <TransactionItem
              id={6}
              type="Expense"
              category="Food"
              description="Going out to eat"
              amount={29}
              onRemove={() => console.log("Removed!")}
            />
            <TransactionItem
              id={7}
              type="Saving"
              category=""
              description="For children"
              amount={500}
              onRemove={() => console.log("Removed!")}
            />
            <TransactionItem
              id={8}
              type="Investment"
              category=""
              description="In Microsoft"
              amount={9000}
              onRemove={() => console.log("Removed!")}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Button</h2>
        <Separator />
        <div className="flex flex-col gap-4">
          <h3>Variants</h3>
          <div className="flex flex-row gap-4 h-16 items-center">
            <Button>Hello</Button>
            <Button variant="outline">Hello</Button>
            <Button variant="ghost">Hello</Button>
            <Button variant="destructive">Hello</Button>
            <Button variant="secondary">Hello</Button>
            <Button variant="link">Hello</Button>
          </div>
          <h3>Disabled Variants</h3>
          <div className="flex flex-row gap-4 h-16 items-center">
            <Button disabled>Hello</Button>
            <Button variant="outline" disabled>
              Hello
            </Button>
            <Button variant="ghost" disabled>
              Hello
            </Button>
            <Button variant="destructive" disabled>
              Hello
            </Button>
            <Button variant="secondary" disabled>
              Hello
            </Button>
            <Button variant="link" disabled>
              Hello
            </Button>
          </div>
          <h3>Sizes</h3>
          <div className="flex flex-row gap-4 h-16 items-center">
            <Button size="xs">Hello</Button>
            <Button size="sm">Hello</Button>
            <Button>Hello</Button>
            <Button size="lg">Hello</Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Form</h2>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" type="text" placeholder="Enter your name ..." />
          </div>

          <div className="flex flex-col gap-1">
            <Label>City</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your city ..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="New Delhi" className="bg-transparent">
                  New Delhi
                </SelectItem>
                <SelectItem value="Mumbai" className="bg-transparent">
                  Mumbai
                </SelectItem>
                <SelectItem value="Jaipur" className="bg-transparent">
                  Jaipur
                </SelectItem>
                <SelectItem value="Kolkata" className="bg-transparent">
                  Kolkata
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Checkbox</h2>
        <Separator />
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2 ml-3">
            <Checkbox id="check-box-unchecked" className="cursor-pointer" />
            <Label htmlFor="check-box-unchecked" className="cursor-pointer">
              Option (unchecked)
            </Label>
          </div>
          <div className="flex flex-row gap-2 ml-3">
            <Checkbox
              id="check-box-checked"
              className="cursor-pointer"
              defaultChecked
            />
            <Label htmlFor="check-box-checked" className="cursor-pointer">
              Option (checked)
            </Label>
          </div>
          <div className="flex flex-row gap-2 ml-3">
            <Checkbox id="check-box-disabled" disabled />
            <Label htmlFor="check-box-disabled">Option (disabled)</Label>
          </div>
          <Label
            htmlFor="wrapped-check-box"
            className={cn(
              "hover:bg-accent/50 flex items-start ",
              "gap-3 rounded-lg border border-input p-3 ml-0",
              "has-[[aria-checked=true]]:border-blue-600 ",
              "has-[[aria-checked=true]]:bg-blue-50 ",
              "dark:has-[[aria-checked=true]]:border-blue-900 ",
              "dark:has-[[aria-checked=true]]:bg-blue-950",
              "cursor-pointer"
            )}
          >
            <Checkbox
              id="wrapped-check-box"
              defaultChecked
              className={cn(
                "data-[state=checked]:border-blue-600 ",
                "data-[state=checked]:bg-blue-600 ",
                "data-[state=checked]:text-white ",
                "dark:data-[state=checked]:border-blue-700 ",
                "dark:data-[state=checked]:bg-blue-700"
              )}
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">
                Enable notifications
              </p>
              <p className="text-muted-foreground text-sm">
                You can enable or disable notifications at any time.
              </p>
            </div>
          </Label>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Skeleton</h2>
        <Separator />
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>

      {/*
       <div>
       <h2 className="mb-4 text-lg font-mono">Component</h2>
       <Separator />
       <div className="flex flex-row gap-8">
       <Component />
       <Component />
       <Component />
       <Component />
       </div>
       </div>
       */}
    </main>
  );
};

export default PlaygroundPage;
