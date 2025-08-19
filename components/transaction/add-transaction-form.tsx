"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import createTransactionAction from "@/actions/create-transaction-action";

import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION
} from "@/constants/all-consts";
import {
  AddTransaction,
  CategoryOfTransaction,
  TransactionSchema,
  TypeOfTransaction
} from "@/types/transaction";

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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { toast } from "sonner"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

const AddTransactionForm = () => {
  const router = useRouter ()
  
  const [ isSaving, setIsSaving ] = useState ( false )
  
  const form = useForm<AddTransaction> ( {
    resolver : zodResolver ( TransactionSchema ),
    mode : "all",
    defaultValues : {
      type : "" as TypeOfTransaction,
      category : "" as CategoryOfTransaction,
      created_at : undefined,
      amount : undefined,
      description : ""
    },
    reValidateMode : "onBlur"
  } );
  
  const onSubmit = async ( data : AddTransaction ) => {
    setIsSaving ( true )
    
    toast.loading ( "Processing...", {
      id : "Add-Transaction",
    } )
    
    try {
      const processedData = {
        ...data,
        amount : Number ( data.amount )
      };
      
      const result = await createTransactionAction ( processedData )
      
      toast.dismiss ( "Add-Transaction" )
      
      if ( !result.success ) {
        throw new Error ( result.error )
      }
      
      toast.success ( "Transaction saved successfully." )
      
      router.push ( "/dashboard" );
    } catch ( err ) {
      toast.dismiss ( "Add-Transaction" )
      toast.error ( err instanceof Error ? err.message : "An unexpected error occurred" )
    } finally {
      setIsSaving ( false );
    }
  }
  
  const handleReset = () => {
    form.reset ( {
      type : undefined,
      category : undefined,
      created_at : undefined,
      amount : undefined,
      description : ""
    } )
    
    toast.success ( "Reset the form!" )
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
                           type="number"
                           placeholder="999.99"
                           className="pl-8"
                           value={ field.value ?? "" }
                           onChange={ ( e ) => {
                             const value = e.target.value;
                             field.onChange ( value === "" ? undefined : Number ( value ) );
                           } }
                           onBlur={ field.onBlur }
                           name={ field.name }
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
                      disabled={ isSaving }
              >
                Reset
              </Button>
              <Button className="cursor-pointer"
                      type="submit"
                      disabled={ isSaving }
              >
                { isSaving ? "Saving ..." : "Save" }
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}

export default AddTransactionForm;
