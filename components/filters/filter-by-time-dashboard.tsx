"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterByTime } from "@/types/transaction";

const FilterByTimeRecent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const filter = (searchParams.get("filter") as FilterByTime) ?? "last30days";

  const handleChange = (newFilter: FilterByTime) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set("filter", newFilter);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="flex flex-col gap-2">
      <Label htmlFor="filter">Filter</Label>
      <Select defaultValue={filter} onValueChange={handleChange}>
        <SelectTrigger id="filter" className="w-[200px]">
          <SelectValue placeholder="Select Filter by time ..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="last24hours">Last 24 hours</SelectItem>
          <SelectItem value="last7days">Last 7 days</SelectItem>
          <SelectItem value="last30days">Last 30 days</SelectItem>
          <SelectItem value="last12months">Last 12 months </SelectItem>
        </SelectContent>
      </Select>
    </aside>
  );
};

export default FilterByTimeRecent;
