import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter ( { subsets : [ "latin" ] } );

export const metadata : Metadata = {
  title : {
    template : "%s | Finance App",
    default : "Finance App"
  },
  description : "Create and manage your finances!",
};

const RootLayout = ( {
  children,
} : Readonly<{
  children : React.ReactNode;
}> ) => {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={ `${ inter.className } min-h-screen flex flex-col antialiased` }
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>{ children }</main>
      <Toaster position="top-right" richColors/>
    </ThemeProvider>
    </body>
    </html>
  );
}

export default RootLayout;