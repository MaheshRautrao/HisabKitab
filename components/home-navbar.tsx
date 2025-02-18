import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";

export function HomeNavbar() {
  return (
    <nav className="flex justify-between p-5 items-center bg-green-300">
      <div className="flex gap-2 text-3xl items-center">
        <Wallet size={44} color="#1dd320" strokeWidth={3} absoluteStrokeWidth />
        <p>Hisab Kitab</p>
      </div>
      <div className="flex gap-4">
        <Link href="/auth/login">
          <Button>Log in</Button>
        </Link>
        <Link href="/auth/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
}
