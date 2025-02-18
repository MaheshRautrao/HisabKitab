// Function component with typed props
export function DashboardCommonContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-5">{children}</div>;
}
