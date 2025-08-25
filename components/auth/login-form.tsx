"use client";

import { useActionState } from "react";

import loginAction from "@/actions/login-action";

import type { LoginFormState } from "@/types/base-custom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { CircleCheck, CircleX, Loader } from "lucide-react";

const initialState: LoginFormState = {
  title: undefined,
  message: undefined,
  error: false,
};

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Enter your email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <Button type="submit" size="sm" disabled={isPending} className="flex ">
        {isPending && <Loader className="animate-spin" />}
        Sign in with email
      </Button>
      {state.message && (
        <Alert variant={state.error ? "destructive" : "success"}>
          {state.error ? <CircleX /> : <CircleCheck />}
          <AlertTitle>{state.title}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default LoginForm;
