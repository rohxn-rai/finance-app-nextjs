"use client"

import { useState } from "react";

import {
  CATEGORYOFTRANSACTION,
  TYPEOFTRANSACTION
} from "@/constants/all-consts";
import {
  CategoryOfTransaction,
  Transaction,
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
import { z } from "zod";

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
    .min ( 1, "Description is required." )
    .max ( 64, "Description can not exceed 64 characters." )
} );

const AddTransactionForm = () => {
  const [ isSaving, setIsSaving ] = useState ( false );
  const [ isResetting, setIsResetting ] = useState ( false );
  
  const form = useForm<z.infer<typeof FormSchema>> ( {
    resolver : zodResolver ( FormSchema ),
    mode : "all",
    defaultValues : {
      type : "" as TypeOfTransaction,
      category : "" as CategoryOfTransaction,
      created_at : "",
      amount : "",
      description : ""
    },
    reValidateMode : "onBlur"
  } );
  
  const onSubmit = async (
    data : z.infer<typeof FormSchema>
  ) => {
    setIsSaving ( true )
    
    const submitData : Transaction = {
      ...data,
      id : Math.random (),
      amount : parseFloat ( data.amount )
    };
    
    const addingData = async ( data : Transaction ) => {
      await
        fetch ( `${ process.env.NEXT_PUBLIC_API_URL }/transactions`, {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify ( data )
        }, )
    }
    
    toast.promise ( addingData ( submitData ), {
      loading : "Adding transaction ...",
      success : "Transaction has been added.",
      error : "Error"
    } );
    setIsSaving ( false )
  };
  
  const handleReset = async () => {
    setIsResetting ( true )
    
    const resetForm = async () => {
      form.reset ( {
        type : undefined,
        category : undefined,
        created_at : "",
        amount : "",
        description : ""
      } )
    }
    
    toast.promise ( resetForm (), {
      loading : 'Adding transaction ...',
      success : "Reset the form!",
      error : 'Error'
    } )
    
    setIsResetting ( false )
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
                      disabled={ isSaving || isResetting }
              >
                { isResetting ? "Resetting ..." : "Reset" }
              </Button>
              <Button className="cursor-pointer"
                      type="submit"
                      disabled={ isSaving || isResetting }
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