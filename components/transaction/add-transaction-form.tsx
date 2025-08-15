"use client"

import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION
} from "@/constants/all-consts";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";

import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CategoryOfTransaction, TypeOfTransaction } from "@/types/transaction";

const FormSchema = z.object ( {
  type : z.enum ( TYPEOFTRANSACTION, "Choose a type from the given options." ),
  category : z.enum ( CATEGORYOFTRANSACTION, "Choose a category from the given options." ),
  created_at : z.iso.datetime ( "Enter a valid date." ),
  amount : z.string ()
    .min ( 1, "Amount is required." )
    .refine ( (
      val
    ) => !isNaN ( Number ( val ) ) && Number ( val ) > 0, {
      message : "Amount must be a valid number."
    } ),
  description : z.string ( "Enter proper description." )
    .min ( 1, "Description is required" )
    .max ( 64, "Description can not exceed 64 characters." )
} );

const AddTransactionForm = () => {
  const form = useForm<z.infer<typeof FormSchema>> ( {
    resolver : zodResolver ( FormSchema ),
    mode : "onBlur",
    defaultValues : {
      type : "" as TypeOfTransaction,
      category : "" as CategoryOfTransaction,
      created_at : "",
      amount : "",
      description : ""
    },
    reValidateMode : "onBlur"
  } );
  
  const onSubmit = (
    data : z.infer<typeof FormSchema>
  ) => {
    const submitData = {
      ...data,
      amount : parseFloat ( data.amount )
    };
    
    toast ( "You submitted the following values", {
      description : (
        <pre>
        <code className="text-white">
          { JSON.stringify ( submitData, null, 2 ) }
        </code>
      </pre>
      ),
    } );
  };
  
  const handleReset = () => {
    form.reset ( {
      type : undefined,
      category : undefined,
      created_at : undefined,
      amount : "",
      description : undefined
    } );
  }
  
  return (
    <>
      <Form { ...form }>
        <form className="flex flex-col gap-4"
              onSubmit={ form.handleSubmit ( onSubmit ) }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <FormField
              control={ form.control }
              name="type"
              render={ ( { field } ) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="type">Type<span
                    className="text-destructive">*</span></FormLabel>
                  <Select
                    value={ field.value }
                    onValueChange={ field.onChange }
                  >
                    <SelectTrigger id="type">
                      <SelectValue
                        placeholder="Select type of transaction ..."/>
                    </SelectTrigger>
                    <SelectContent>
                      { TYPEOFTRANSACTION.map ( (type => (
                        <SelectItem value={ type }
                                    key={ type }>{ type }</SelectItem>
                      )) ) }
                    </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              ) }
            />
            
            <FormField
              control={ form.control }
              name="category"
              render={ ( { field } ) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="category">Category<span
                    className="text-destructive">*</span></FormLabel>
                  <Select
                    value={ field.value }
                    onValueChange={ field.onChange }
                  >
                    <SelectTrigger id="category">
                      <SelectValue
                        placeholder="Select category of transactions ..."/>
                    </SelectTrigger>
                    <SelectContent>
                      { CATEGORYOFTRANSACTION.map ( (type => (
                        <SelectItem value={ type }
                                    key={ type }
                        >
                          { type }
                        </SelectItem>
                      )) ) }
                    </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              ) }
            />
            
            <FormField
              control={ form.control }
              name="created_at"
              render={ ( { field } ) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="created_at">
                    Date<span className="text-destructive">*</span>
                  </FormLabel>
                  <DatePicker
                    id="created_at"
                    { ...field }
                  />
                  <FormMessage/>
                </FormItem>
              ) }
            />
            
            <FormField
              control={ form.control }
              name="amount"
              render={ ( { field } ) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel htmlFor="amount">Amount<span
                    className="text-destructive">*</span></FormLabel>
                  <div className="relative inline-flex gap-1">
                  <span
                    className="absolute top-1.5 left-3 flex h-4 w-4">$</span>
                    <Input id="amount"
                           type="text"
                           placeholder="999.99"
                           className="pl-8"
                           { ...field }
                    />
                  </div>
                  <FormMessage/>
                </FormItem>
              ) }
            />
            
            <FormField
              control={ form.control }
              name="description"
              render={ ( { field } ) => (
                <FormItem className="md:col-span-2 flex flex-col gap-2">
                  <FormLabel htmlFor="description">Description<span
                    className="text-destructive">*</span></FormLabel>
                  <Textarea id="description"
                            rows={ 2 }
                            placeholder="Enter Description ..."
                            { ...field }
                  />
                  <FormMessage/>
                </FormItem>
              ) }
            />
          
          </div>
          
          <div className="flex flex-row justify-between">
            <div></div>
            <div className="flex flex-row gap-4 justify-end">
              <Button className="cursor-pointer"
                      variant="destructive"
                      type="button"
                      onClick={ handleReset }
              >
                Reset
              </Button>
              <Button className="cursor-pointer"
                      type="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}


export default AddTransactionForm;