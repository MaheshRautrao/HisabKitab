import {
  Activity,
  DollarSign,
  Facebook,
  Group,
  LayoutDashboard,
  Twitter,
  Users,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { InviteCard } from "./invite-card";
import { SidebarMenuItemCustom } from "./sidebar-menu-item-custom";
import { SocialMediaShareButton } from "./ShareButton";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="py-3 flex gap-2 items-center font-bold text-2xl">
          <Wallet size={24} color="#1dd320" />
          <p>Hisab Kitab</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col gap-2">
            <SidebarMenuItemCustom
              link="/dashboard"
              text="Dashboard"
              icon={<LayoutDashboard />}
            />
            <SidebarMenuItemCustom
              link="/dashboard/recent-activity"
              text="Recent Activity"
              icon={<Activity />}
            />
            <SidebarMenuItemCustom
              link="/dashboard/all-expenses"
              text="All Expenses"
              icon={<DollarSign />}
            />
            <SidebarMenuItemCustom
              link="/dashboard/groups"
              text="Groups"
              icon={<Group />}
            />
            <SidebarMenuItemCustom
              link="/dashboard/friends"
              text="Friends"
              icon={<Users />}
            />
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-3">
          <InviteCard />
          <div className="flex justify-center gap-3">
            <SocialMediaShareButton icon={<Facebook />} text="Share" />
            <SocialMediaShareButton icon={<Twitter />} text="Tweet" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
