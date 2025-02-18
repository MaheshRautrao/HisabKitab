"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

export function SidebarMenuItemCustom({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link href={link}>
      <div
        className={`${
          pathname === link ? "bg-zinc-200" : ""
        } p-2 rounded-md hover:bg-zinc-200 font-bold text-md flex gap-2 items-center`}
      >
        {icon}
        {text}
      </div>
    </Link>
  );
}
