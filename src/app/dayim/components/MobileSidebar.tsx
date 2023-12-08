import { Button } from "@/app/components/ui/button";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "../CONSTANTS";
import Link from "next/link";
import SidebarMenuItem from "./SidebarMenuItem";
import { LogoutButton } from "./Buttons";
import SidebarSocial from "./SidebarSocial";
const MobileSidebar = () => {
  return (
    <div>
      {/* Hamburger Icon Button */}

      {/* <Button className="absolute top-5 right-5 bg-gray-200 text-black hover:bg-gray-300 max-md:block hidden">
        <RxHamburgerMenu />
      </Button> */}

      {/* Sidebar Sheet */}
      <Sheet>
        <SheetTrigger className="absolute top-5 right-5 bg-gray-200 p-2 text-black  hover:bg-gray-300 max-md:block hidden">
          <RxHamburgerMenu size={25} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="h-full w-full  p-5 flex flex-col gap-5 ">
            {/* Logo */}
            <div>Logo</div>

            {/* Links */}
            <div className="space-y-3  flex-grow overflow-y-auto ">
              {sidebarLinks.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  url={item.url}
                  logo={item.logo}
                  title={item.title}
                  mobileScreen={true}
                />
              ))}
            </div>

            {/* Socail Media Links */}
            <div className="flex flex-col items-center gap-3">
              {/* Signout Button */}
              <LogoutButton mobileScreen={true} />
              <SidebarSocial mobileScreen={true} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
