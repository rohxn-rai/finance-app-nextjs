"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { Camera, Settings, User } from "lucide-react";

const items = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Avatar",
    url: "/dashboard/settings/avatar",
    icon: Camera,
  },
  {
    title: "Profile",
    url: "/dashboard/settings/profile",
    icon: User,
  },
];

const SettingsSidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <Sidebar collapsible={"none"} variant="inset" className="not-md:w-full">
        <SidebarContent className="sticky top-24">
          <SidebarGroup>
            <SidebarGroupLabel>User</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Link
                      href={item.url}
                      className="flex flex-row gap-2 items-center"
                    >
                      <SidebarMenuButton asChild>
                        <Button
                          variant={
                            pathname === item.url ? "selectedGhost" : "ghost"
                          }
                          className="justify-start"
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Button>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default SettingsSidebar;
