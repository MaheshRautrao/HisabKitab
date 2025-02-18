"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation"; // Import usePathname

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";
import Link from "next/link";
import { DashboardCommonContainer } from "@/components/dashboard-common-container";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname

  // Function to generate breadcrumbs from the pathname
  const generateBreadcrumbs = (pathname: string) => {
    // Split the pathname into segments (removes leading '/')
    const segments = pathname.split("/").filter(Boolean);

    // Dynamically create breadcrumb items
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`; // Build href from segments
      return (
        <BreadcrumbItem key={index}>
          {index === segments.length - 1 ? (
            // Last item is a page (BreadcrumbPage)
            <BreadcrumbPage>{segment}</BreadcrumbPage>
          ) : (
            // Link for intermediate breadcrumb items
            <Link href={href}>{segment}</Link>
          )}
          {index < segments.length - 1 && <BreadcrumbSeparator />}{" "}
          {/* Separator */}
        </BreadcrumbItem>
      );
    });
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16  gap-2 justify-between items-center">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            {/* Breadcrumb component with dynamic items */}
            <Breadcrumb>
              <BreadcrumbList>
                {/* Dynamically generate breadcrumb items */}
                {generateBreadcrumbs(pathname)}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <NavUser
              user={{
                name: "Mahesh",
                email: "maheshrautrao",
                avatar: "path_to_avatar_image",
              }}
            />
          </div>
        </header>
        <DashboardCommonContainer>{children}</DashboardCommonContainer>
      </SidebarInset>
    </SidebarProvider>
  );
}
