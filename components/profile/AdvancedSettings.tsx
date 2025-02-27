import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WarningDangerIcon } from "../warning-danger-icon";

const AdvancedSettings = () => (
  <Card className="w-[450px]">
    <CardHeader>
      <CardTitle className="text-2xl">Advanced Settings</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="flex flex-col gap-4">
        <div className="border rounded-md p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <WarningDangerIcon height="40" width="40" type="warning" />
            You will be logged out from all the devices that you are currently
            logged in to
          </div>
          <Button>Log out on all devices</Button>
        </div>
        <div className="border rounded-md p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <WarningDangerIcon height="40" width="40" type="danger" />
            All your associated data will be deleted permanently
          </div>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AdvancedSettings;
