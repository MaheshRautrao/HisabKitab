import { AllExpensesCard } from "@/components/all-expenses/all-expenses-card";
import { SettlementCard } from "@/components/common/settlement-card";
import { DashboardSectionHeader } from "@/components/dashboard-section-header";

export default function RecentActivity() {
  return (
    <>
      <DashboardSectionHeader dashboardSectionHeaderTitle="Recent Activity" />
      <div className="flex gap-4 flex-col mt-5">
        <div className="py-1 font-bold">FEBRUARY 2025</div>
        <SettlementCard />
        {/* <AllExpensesCard />
        <AllExpensesCard />
        <AllExpensesCard />
        <div className="py-1 font-bold">FEBRUARY 2025</div>
        <AllExpensesCard />
        <AllExpensesCard />
        <AllExpensesCard /> */}
      </div>
    </>
  );
}
