const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <footer className="mt-auto text-center py-8">Footer</footer>
    </>
  );
};

export default DashboardLayout;
