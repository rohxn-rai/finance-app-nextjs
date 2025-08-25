"use server";

import type { LoginFormState } from "@/types/base-custom";

const loginAction = async (prevState: LoginFormState, formData: FormData) => {
  const email = formData.get("email");
  if (email === "test@test.com") {
    return { title: "Email sent!", message: "Check your email.", error: false };
  } else {
    return {
      title: "Wrong email",
      message: "email does not match",
      error: true,
    };
  }
};

export default loginAction;
