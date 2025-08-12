import Header from "@/components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header className="my-8" />
      <>{children}</>
      <footer className="mt-auto text-center py-8">Footer</footer>
    </>
  );
};

export default DashboardLayout;
