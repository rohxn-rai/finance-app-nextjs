"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const logoutAction = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  redirect("/login");
};

export default logoutAction;
