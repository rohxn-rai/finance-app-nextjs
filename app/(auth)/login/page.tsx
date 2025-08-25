import LoginForm from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login into your Financial app",
};

const LoginPage = () => {
  return (
    <div className="mx-auto flex flex-col w-full gap-6 xs:max-w-[350px]">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-2xl font-semibold">Wellcome back</h1>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
          Enter your email to sign in/create your account. No password iss
          required.
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
