import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

const YourAccount = () => {
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  const handleSave = () => {
    console.log("Save changes");
  };

  const handleChangePassword = () => {
    console.log("Change password");
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md bg-blue-100">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            width={150}
            height={150}
            src={profilePic}
            alt="Profile"
            className="rounded-full object-cover"
          />
          <label
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
            </svg>
          </label>
          <Input
            type="file"
            id="profile-pic"
            className="hidden"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </div>
        <div className="p-4 rounded-md">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700">Phone Number</label>
              <Input
                type="tel"
                className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="+1234567890"
              />
            </div>

            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
        <div className="bg-red-300 p-4 rounded-md mt-4">
          <div className="flex flex-col gap-4">
            <Button onClick={() => setShowChangePassword(!showChangePassword)}>
              Change Password
            </Button>
            {showChangePassword && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <Input
                    type="password"
                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <Button onClick={handleChangePassword}>Change Password</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
