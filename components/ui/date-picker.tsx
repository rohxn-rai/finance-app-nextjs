"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  id: string;
  name?: string;
  defaultValue?: Date;
  value?: Date | undefined;
  onChange?: (value: Date | undefined) => void;
  onBlur?: () => void;
  inputRef?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
}

const DatePicker = ({
  id,
  name,
  defaultValue,
  value,
  onChange,
  onBlur,
  inputRef,
  disabled = false,
}: DatePickerProps) => {
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (onChange) onChange(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id={id}
          name={name ?? undefined}
          onBlur={onBlur}
          ref={inputRef ?? null}
          data-empty={!value}
          className={cn(
            "data-[empty=true]:text-muted-foreground ",
            "justify-between text-left ",
            "font-normal "
          )}
          disabled={disabled}
        >
          {value ? format(value, "PPP") : <span>Pick a date</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={defaultValue}
          onSelect={handleDateSelect}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
