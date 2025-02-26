"use client";
import { AllExpensesCard } from "@/components/all-expenses/all-expenses-card";
import { SettlementCard } from "@/components/common/settlement-card";
import { DashboardSectionHeader } from "@/components/dashboard-section-header";

export default function AllExpenses() {
  const sampleProps = {
    month: "FEB",
    date: "20",
    category: "wifi",
    title: "Dinner at Restaurant",
    group: {
      id: "flat-404",
      name: "MNIT Flat 404",
    },
    paidByUserId: "user123",
    paidByUserName: "John Doe",
    paidByUserProfile: "/path/to/profile.jpg",
    amount: "300",
    borrowers: [
      {
        userId: "user456",
        userName: "Jane Smith",
        amount: "150",
        userProfile: "/path/to/profile2.jpg",
      },
    ],
    comments: [
      {
        userId: "user789",
        userName: "Alice Johnson",
        message: "Thanks for covering the dinner!",
        createdAt: "23 feb",
      },
    ],
    userContext: {
      createdAt: "23 feb",
      updatedAt: "23 feb",
      createdByUserId: "user123",
      createdByUserName: "John Doe",
      updatedByUserName: "John Doe",
      updatedByUserId: "user123",
      createdByUserProfile: "/path/to/profile.jpg",
      updatedByUserProfile: "/path/to/profile.jpg",
    },
  };

  return (
    <>
      <DashboardSectionHeader dashboardSectionHeaderTitle="All Expenses" />
      <div className="flex gap-4 flex-col mt-5">
        <div className="py-1 font-bold">FEBRUARY 2025</div>
        <AllExpensesCard {...sampleProps} />
        <AllExpensesCard {...sampleProps} />
        <div className="py-1 font-bold">FEBRUARY 2025</div>
        <SettlementCard />
      </div>
    </>
  );
}
