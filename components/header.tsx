import Link from "next/link";

import { ModeToggle } from "@/components/ui/theme-toggle";

import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { CircleUser, KeyRound } from "lucide-react";

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 pt-8 backdrop-blur-md mb-8">
      <div
        className={cn(
          "border border-input mx-4 ",
          "bg-popover px-4 py-2 rounded-md ",
          "flex flex-row justify-between ",
          "items-center ",
          "border border-input "
        )}
      >
        <Link
          href="/dashboard"
          className="text-xl hover:underline underline-offset-8 decoration-2"
        >
          Finance App
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {user && (
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-row gap-2 items-center"
            >
              <CircleUser className="w-6 h-6" />
              <span>{user?.email}</span>
            </Button>
          )}
          {!user && (
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-row gap-2 items-center"
              >
                <KeyRound className="w-6 h-6" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
