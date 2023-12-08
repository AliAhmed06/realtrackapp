import Image from "next/image";
import React from "react";
import { Button } from "../components/ui/button";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="h-full w-[50%] hidden lg:block">
        <img
          src="/images/login-bg.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-[100%] md:w-[80%] lg:w-[50%]  flex items-center justify-center">
        <div className="w-[60%]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
