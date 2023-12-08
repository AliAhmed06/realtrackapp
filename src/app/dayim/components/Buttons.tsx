import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import React from "react";

export const LogoutButton = ({ mobileScreen }: any) => {
  return (
    <>
      {mobileScreen ? (
        <Button className="w-full bg-gray-300 hover:bg-gray-200 text-black flex gap-5">
          <Image
            src={"/images/dayim/dashboard/logout.png"}
            height={30}
            width={30}
            alt="Signout"
          />
          <span className="flex-1 text-start">Signout</span>
        </Button>
      ) : (
        <Button className="w-full bg-gray-300 hover:bg-gray-200 text-black flex gap-5 max-lg:p-0">
          <Image
            src={"/images/dayim/dashboard/logout.png"}
            height={30}
            width={30}
            alt="Signout"
          />
          <span className="flex-1 text-start max-lg:hidden">Signout</span>
        </Button>
      )}
    </>
  );
};
