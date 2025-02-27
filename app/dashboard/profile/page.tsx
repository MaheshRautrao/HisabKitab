"use client";
import { DashboardSectionHeader } from "@/components/dashboard-section-header";
import AdvancedSettings from "@/components/profile/AdvancedSettings";
import Notifications from "@/components/profile/Notifications";
import YourAccount from "@/components/profile/YourAccount";
import { useState } from "react";

type ComponentsDictionary = {
  [key: string]: React.ComponentType;
};

const componentsDictionary: ComponentsDictionary = {
  "Your Account": YourAccount,
  Notifications: Notifications,
  "Advanced Settings": AdvancedSettings,
};

export default function Profile() {
  const [selected, setSelected] = useState("Your Account");

  const SelectedComponent = componentsDictionary[selected];

  return (
    <>
      <DashboardSectionHeader dashboardSectionHeaderTitle="Profile" />
      <div className="grid grid-cols-12 gap-5 py-5">
        <div className="col-span-3 flex flex-col gap-4">
          {Object.keys(componentsDictionary).map((key) => (
            <div
              key={key}
              className={`cursor-pointer rounded-md p-2 ${
                selected === key ? "bg-zinc-300" : ""
              }`}
              onClick={() => setSelected(key)}
            >
              {key}
            </div>
          ))}
        </div>
        <div className="col-span-9">
          <SelectedComponent />
        </div>
      </div>
    </>
  );
}
