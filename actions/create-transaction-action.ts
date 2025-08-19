"use server"

import { revalidatePath } from "next/cache";
import { AddTransaction, TransactionSchema, } from "@/types/transaction";
import { createClient } from "@/utils/supabase/server";


const createTransactionAction = async ( data : AddTransaction ) => {
  try {
    const validateData = TransactionSchema.safeParse ( data )
    
    if ( !validateData.success ) {
      return { success : false, error : "Invalid transaction data." };
    }
    
    const supabase = await createClient ()
    
    const { error } = await supabase.from ( "transactions" ).insert ( validateData.data );
    
    if ( error ) {
      console.log ( error )
      return { success : false, error : "Failed to create transaction." };
    }
    
    revalidatePath ( "/dashboard", "layout" )
    return { success : true };
  } catch ( err ) {
    console.log ( err );
    return {
      success : false,
      error : err instanceof Error ? err.message : "An unexpected error occurred."
    };
  }
}

export default createTransactionAction;