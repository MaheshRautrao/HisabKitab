import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Header section */}
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Dashboard</div>
        <div className="flex gap-4">
          <Button>Add Expense</Button>
          <Button>Settle Up</Button>
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex justify-between gap-4 mt-5">
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center">
            <div className="font-semibold">Total Balance</div>
            <div className="font-semibold">- Rs 2200</div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center">
            <div className="font-semibold">You are owed</div>
            <div className="font-semibold">Rs 2200</div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center">
            <div className="font-semibold">You owe</div>
            <div className="font-semibold">Rs 2200</div>
          </div>
        </div>
      </div>
      {/* Summary Details Section */}
      <div className="mt-5 flex">
        <div className="flex-1 bg-green-50 flex items-center flex-col">
          <p>You Owe</p>
          <div>
            <div>
              <User />
              <div>Mahesh</div>
            </div>
            <div>
              <User />
              <div>Amit</div>
            </div>
            <div>
              <User />
              <div>Ayaan</div>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" color="#ff1717" />
        <div className="flex-1 bg-green-50 flex items-center flex-col">
          <p>You Are Owed</p>
          <div>
            <div>
              <User />
              <div>Mahesh</div>
            </div>
            <div>
              <User />
              <div>Amit</div>
            </div>
            <div>
              <User />
              <div>Ayaan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
