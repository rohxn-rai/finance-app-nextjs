import Link from "next/link";
import { ModeToggle } from "@/components/ui/theme-toggle";

const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={`flex flex-row justify-between items-center ${className}`}
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
    </header>
  );
};

export default Header;
