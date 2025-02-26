"use client";

import { DashboardSectionHeader } from "@/components/dashboard-section-header";
import { Users } from "lucide-react";

export default function Groups() {
  return (
    <>
      <DashboardSectionHeader dashboardSectionHeaderTitle="Groups" />
      <div className="grid grid-cols-4 py-5">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 border-l-2 border-black px-2 text-xl cursor-pointer items-center">
              <Users /> Group 1
            </div>
            <div className="px-1 text-xl cursor-pointer">Group 1</div>
          </div>
        </div>
        <div className="col-span-3">Mahesh</div>
      </div>
    </>
  );
}
