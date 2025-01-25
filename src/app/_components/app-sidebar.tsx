"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { useTranslation } from "react-i18next";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Flag,
  GitBranch,
  AlertTriangle,
  Users,
  ShoppingCart,
  BadgeCheck,
  UserCircle,
  Languages,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { name: "dashboard", icon: LayoutDashboard },
  { name: "projects", icon: FolderKanban },
  { name: "tasks", icon: CheckSquare },
  { name: "milestones", icon: Flag },
  { name: "phases", icon: GitBranch },
  { name: "risks", icon: AlertTriangle },
  { name: "vendors", icon: Users },
  { name: "purchases", icon: ShoppingCart },
  { name: "qualities", icon: BadgeCheck },
  { name: "users", icon: UserCircle },
];

export function AppSidebar() {
  const pathname = usePathname();
  //   const { t, i18n } = useTranslation();
  const { state } = useSidebar();

  //   const changeLanguage = (lng: string) => {
  //     i18n.changeLanguage(lng);
  //   };

  return (
    <Sidebar className="border-r border-grey-700 bg-grey-900">
      <SidebarHeader className="bg-grey-800 p-4">
        <h1 className="text-4xl font-bold text-grey-100">
          Connecteo
          <br />
          <span className="text-sm font-normal text-grey-400">
            Project Management App
          </span>
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-grey-400">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    tooltip={state === "collapsed" ? item.name : undefined}
                  >
                    <Link
                      href={`/${item.name}`}
                      className={`flex items-center text-grey-300 hover:text-grey-100 ${
                        pathname === `/${item.name}` ? "bg-grey-800" : ""
                      }`}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto p-4 bg-grey-800">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full bg-grey-900 text-grey-300 border-grey-600 hover:bg-grey-700 hover:text-grey-100 border-none"
            >
              <Languages className="mr-2 h-5 w-5" />
              <span className={state === "collapsed" ? "hidden" : ""}>
                {"language"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => {}}>Français</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>English</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  );
}
