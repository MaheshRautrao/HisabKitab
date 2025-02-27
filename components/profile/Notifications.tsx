import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Notifications = () => (
  <Card className="w-[450px]">
    <CardHeader>
      <CardTitle className="text-2xl">Notification settings</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <div className="text-xl">Groups and friends</div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4">
            <div className="col-span-3">When someone adds me to a group</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">When someone adds me as a friend</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer opacity-0 pointer-events-none" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <div className="text-xl">Expenses</div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4">
            <div className="col-span-3">When an expense is added</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">When an expense is edited/deletedd</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              When someone comments on an expense
            </div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">When an expense is due</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">When someone pays me</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-md p-4 flex flex-col gap-4">
        <div className="text-xl">News and updates</div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4">
            <div className="col-span-3">Monthly summary of my activity</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer opacity-0 pointer-events-none" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">Major Splitwise news and updates</div>
            <div className="col-span-1 flex gap-5">
              <Phone className="cursor-pointer opacity-0 pointer-events-none" />
              <Mail className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save</Button>
    </CardFooter>
  </Card>
);

export default Notifications;
