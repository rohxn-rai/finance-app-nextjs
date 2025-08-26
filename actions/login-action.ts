"use server";

import type { LoginFormState } from "@/types/base-custom";
import { createClient } from "@/utils/supabase/server";

const loginAction = async ( prevState : LoginFormState, formData : FormData ) => {
  const supabase = await createClient ();
  const email = formData.get ( "email" ) as string;
  const { error } = await supabase.auth.signInWithOtp ( {
    email,
    options : {
      shouldCreateUser : true,
    },
  } );
  if ( error ) {
    return {
      title : "Error authenticating!",
      message : error.message || "Servers might be down.",
      error : true,
    };
  }
  
  return {
    title : "Email sent!",
    message : `A signin link has been sent to you email (${ email }).`,
    error : false,
  };
};

export default loginAction;
