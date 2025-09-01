import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <footer className="border-t border-input py-8 text-center">
      <div className="flex flex-col xs:flex-row xs:justify-between items-center">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-foreground">
            <span className="font-semibold">FinanceTracker </span>- Built with
            ❤️ using Next.js
          </h3>
          <p className="text-muted-foreground">
            Connect with me:{" "}
            <Link
              href="https://github.com/rohxn-rai"
              className="text-primary hover:underline"
            >
              GitHub
            </Link>
            {" | "}
            <Link
              href="https://github.com/rohxn-rai/finance-app-nextjs#"
              className="text-primary hover:underline"
            >
              Documentation
            </Link>
          </p>
          <p className="text-muted-foreground text-sm">
            © No copyright. This is just a demo project.
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
