import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RealTrack",
  description: "",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        {children}
      </body>
    </html>
  );
}
