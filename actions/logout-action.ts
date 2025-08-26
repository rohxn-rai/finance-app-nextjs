"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const logoutAction = async () => {
  const supabase = await createClient ();
  const { error } = await supabase.auth.signOut ();
  if ( error ) redirect ( "/error" )
  redirect ( "/login" );
};

export default logoutAction;
