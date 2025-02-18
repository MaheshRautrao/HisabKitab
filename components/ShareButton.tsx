import { ReactNode } from "react";
import { Button } from "./ui/button";

export function SocialMediaShareButton({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <Button>
      {icon}
      {text}
    </Button>
  );
}
