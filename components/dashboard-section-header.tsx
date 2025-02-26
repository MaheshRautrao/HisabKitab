export function DashboardSectionHeader({
  dashboardSectionHeaderTitle,
}: {
  dashboardSectionHeaderTitle: string;
}) {
  return (
    <div className="text-3xl font-bold sticky top-16  w-full bg-white">
      {dashboardSectionHeaderTitle}
    </div>
  );
}
