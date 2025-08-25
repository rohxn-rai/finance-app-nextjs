"use client";

import { useFormStatus } from "react-dom";

import logoutAction from "@/actions/logout-action";

import { Button } from "@/components/ui/button";

import { Loader, LogOut } from "lucide-react";

const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <form action={logoutAction}>
      <Button
        variant="destructive"
        size="icon"
        disabled={pending}
        type="submit"
      >
        {!pending ? <LogOut /> : <Loader className="animate-spin" />}
      </Button>
    </form>
  );
};

export default LogoutButton;
