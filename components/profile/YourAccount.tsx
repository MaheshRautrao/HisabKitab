import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const YourAccount = () => {
  const [profilePic, setProfilePic] = useState("/categories/wifi.png");

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfilePic(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardDescription>
          <div className="relative w-24">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profilePic}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <Label
              htmlFor="profile-pic"
              className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM5 12v3h3l7.586-7.586-3-3L5 12z" />
                <path d="M4 14v2h2l10-10-2-2L4 14z" />
              </svg>
            </Label>
            <Input
              type="file"
              id="profile-pic"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Phone</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default YourAccount;
