"use server";

import type { LoginFormState } from "@/types/base-custom";
import { createClient } from "@/utils/supabase/server";

const loginAction = async (prevState: LoginFormState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });
  if (error) {
    return {
      title: "Error authenicating!",
      message: error.message || "Servers might be down.",
      error: true,
    };
  }

  return {
    title: "Email sent!",
    message: `Check your email at ${email} for signin link.`,
    error: false,
  };
};

export default loginAction;
