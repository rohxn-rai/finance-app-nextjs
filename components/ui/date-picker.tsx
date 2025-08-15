"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils";

interface DatePickerProps {
  id : string;
  name? : string;
  value? : string;
  onChange? : ( value : string ) => void;
  onBlur? : () => void
  inputRef? : React.Ref<HTMLButtonElement>;
}

const DatePicker = ( {
    id,
    name,
    value,
    onChange,
    onBlur,
    inputRef
  } : DatePickerProps
) => {
  const dateValue = value ? new Date ( value ) : undefined;
  
  const handleDateSelect = ( selectedDate : Date | undefined ) => {
    if ( selectedDate && onChange ) {
      const isoString = selectedDate.toISOString ();
      onChange ( isoString );
    }
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id={ id }
          name={ name ?? undefined }
          onBlur={ onBlur }
          ref={ inputRef ?? null }
          data-empty={ !dateValue }
          className={ cn (
            "data-[empty=true]:text-muted-foreground ",
            "justify-between text-left ",
            "font-normal cursor-pointer" ) }
        >
          { dateValue ? format ( dateValue, "PPP" ) : <span>Pick a date</span> }
          <CalendarIcon/>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={ dateValue }
          onSelect={ handleDateSelect }
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker;