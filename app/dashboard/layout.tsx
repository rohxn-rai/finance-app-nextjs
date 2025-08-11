import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header className="mt-8" />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default DashboardLayout;
