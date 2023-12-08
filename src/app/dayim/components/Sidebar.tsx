import React from "react";
import { sidebarLinks } from "../CONSTANTS";
import Image from "next/image";
import Link from "next/link";
import SidebarMenuItem from "./SidebarMenuItem";
import { Button } from "@/app/components/ui/button";
import { LogoutButton } from "./Buttons";
import SidebarSocial from "./SidebarSocial";

const Sidebar = () => {
  return (
    <div className="h-full w-full  p-5 overflow-hidden flex flex-col gap-5 border-r border-gray-300 max-md:hidden pt-10">
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
          />
        ))}
      </div>

      {/* Socail Media Links */}
      <div className="flex flex-col items-center gap-3">
        <LogoutButton />
        <SidebarSocial />
      </div>
    </div>
  );
};

export default Sidebar;
