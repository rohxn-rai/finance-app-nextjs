import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[80dvh]">{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
