import Sidebar from "@/components/shared/Sidebar/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-dvh flex">
      <Sidebar />
      {children}
    </main>
  );
};

export default DashboardLayout;
