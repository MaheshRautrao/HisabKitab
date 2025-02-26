import { Button } from "@/components/ui/button";

const AdvancedSettings = () => (
  <div>
    <div className="">
      <div className="flex flex-col gap-4">
        <Button>Undelete Group</Button>
        <Button>Merge Account</Button>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  </div>
);

export default AdvancedSettings;
