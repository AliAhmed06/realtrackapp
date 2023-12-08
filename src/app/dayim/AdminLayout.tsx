import { Button } from "../components/ui/button";
import MobileSidebar from "./components/MobileSidebar";
import Sidebar from "./components/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex">
      <div className="h-screen md:w-[10%] lg:w-[30%]">
        <Sidebar />
      </div>
      <div className="grow p-5">
        {children}

        {/* Mobile Sidebar */}
        <MobileSidebar />
      </div>
    </div>
  );
}
