import Image from "next/image";
import { Button } from "./ui/button";

export function SplitwiseProCard() {
  return (
    <div className="max-w-64 border border-gray-300 rounded-md p-5 fixed">
      <div className="flex flex-col gap-3">
        <p>Get Splitwise Pro!</p>
        <Image src="/splitwisePro.svg" alt="logo" height={120} width={120} />
        <div>
          Subscribe to Splitwise Pro for no ads, currency conversion, charts,
          search, and more.
        </div>
        <div>
          <Button>Get Splitwise Pro</Button>
        </div>
      </div>
    </div>
  );
}
