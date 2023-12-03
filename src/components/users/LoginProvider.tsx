"use client";
import React from "react";
// import { CardContent } from "../ui/card";
import { signIn } from "next-auth/react";
import { user } from "@nextui-org/react";

// const providers = [
//   // { providerName: "github", Icon: "" },
//   { providerName: "google", Icon: "" },
// ];
type Props = {
  username: string;
};

export default function LoginProvider({ username }: Props) {
  const handleOAuthSignIn = (provider: string) => {
    try {
      localStorage.setItem("username", username);
      const res = signIn(provider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-500 text-gray-300 px-5 py-3 rounded-md hover:bg-gray-700 active:bg-gray-800 transform duration-150 ease-in-out text-lg w-full"
        onClick={() => handleOAuthSignIn("google")}
      >
        {/* <Icons.google className="mr-2 h-4 w-4" /> */}
        Continue
      </button>
    </div>
  );
}
