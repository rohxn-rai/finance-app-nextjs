import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const AuthenticationLayoutGroup = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main>
        <div className="absolute top-8 left-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex flex-row items-center gap-2 text-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="mt-8">{children}</div>
      </main>
    </>
  );
};

export default AuthenticationLayoutGroup;
