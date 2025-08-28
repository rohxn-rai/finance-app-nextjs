import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import SettingsSidebar from "@/components/dashboard/settings-sidebar";

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="flex flex-col md:flex-row gap-2">
      <SettingsSidebar />
      <div className="flex flex-col gap-4 md:pt-11 px-6 w-full">{children}</div>
    </SidebarProvider>
  );
};

export default SettingLayout;
