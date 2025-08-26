import React from "react";
import Header from "@/components/header";

const DashboardLayout = ( { children } : { children : React.ReactNode } ) => {
  return (
    <>
      <Header/>
      <main className="min-h-[80dvh]">{ children }</main>
      <footer className="mt-auto text-center py-8">Footer</footer>
    </>
  );
};

export default DashboardLayout;
