import Link from "next/link";

import { ModeToggle } from "@/components/ui/theme-toggle";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import LogoutButton from "@/components/logout-button";

import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

import { CircleUser, KeyRound } from "lucide-react";

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const avatarPath = user?.user_metadata?.avatar;
  let signedUrl = "";

  if (avatarPath) {
    const { data } = await supabase.storage
      .from("finance-avatars")
      .createSignedUrl(avatarPath, 60 * 5);

    if (data?.signedUrl) {
      signedUrl = data.signedUrl;
    }
  }

  return (
    <header className="sticky top-0 pt-8 backdrop-blur-md mb-8 z-10">
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
            <Link href="/dashboard/settings">
              <Button
                variant="ghost"
                className="flex flex-row gap-2 items-center"
              >
                <Avatar className="rounded-full bg-popover">
                  <AvatarImage src={signedUrl} alt={user.email} />
                  <AvatarFallback>
                    {signedUrl ? (
                      <Skeleton className="w-8 h-8" />
                    ) : (
                      <CircleUser />
                    )}
                  </AvatarFallback>
                </Avatar>
                <span>{user?.email}</span>
              </Button>
            </Link>
          )}
          {user && <LogoutButton />}
          {!user && (
            <Link href="/login">
              <Button
                variant="ghost"
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
