import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";

export function InviteCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Friends</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <Input type="email" placeholder="Email" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Invite</Button>
      </CardFooter>
    </Card>
  );
}
