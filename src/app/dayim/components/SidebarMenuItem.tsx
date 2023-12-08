import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarMenuItem = ({ url, logo, title, mobileScreen }: any) => {
  return (
    <>
      <Link
        href={url}
        className="bg-gray-200 hover:bg-gray-100 flex items-center justify-center gap-5 p-1 lg:py-2 lg:px-5 rounded-md"
      >
        <Image src={logo} height={30} width={30} alt={title} />
        {mobileScreen ? (
          <h4 className="w-full">{title}</h4>
        ) : (
          <h4 className="w-full hidden lg:block">{title}</h4>
        )}
      </Link>
    </>
  );
};

export default SidebarMenuItem;
