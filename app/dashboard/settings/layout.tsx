import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SettingsSidebar from "@/components/dashboard/settings-sidebar";

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="flex flex-col md:flex-row gap-2">
      <SettingsSidebar />
      <div className="flex flex-col gap-4 md:pt-11">
        <div className="flex flex-row items-center md:hidden">
          <SidebarTrigger />
          <span>User</span>
        </div>
        <div className="pl-2">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default SettingLayout;
