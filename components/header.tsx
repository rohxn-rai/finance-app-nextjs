import Link from "next/link";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const Header = () => {
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
          <div>User Dropdown</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
