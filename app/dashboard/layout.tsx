"use client";

import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { SplitwiseProCard } from "@/components/splitwise-pro";
import { DashboardTopnavbar } from "@/components/dashboard-topnavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardTopnavbar />
        <div className="grid grid-cols-3 px-10 py-5">
          <div className="col-span-2">
            <div>{children}</div>
          </div>
          <div className="ml-10">
            <SplitwiseProCard />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
