"use client";
import React, { useState } from "react";
import LoginProvider from "../users/LoginProvider";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRecoilState } from "recoil";
import { usernameAtom } from "@/atoms/atom";

type Props = {};

const Onboarding = (props: Props) => {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const { data: session, update, status } = useSession();
  const updateSession = async () => {
    await update({
      ...session,
      user: {
        ...session?.user,
        username: username,
      },
    });
  };

  if (status === "authenticated") {
    fetch("/api/users/setUsername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    updateSession();
    redirect("/dashboard");
  }

  return (
    <>
      <h1 className="font-black text-3xl lg:text-5xl  lg:leading-relaxed font">
        Welcome Cinephile 👋
      </h1>
      <div className="flex flex-col items-center mt-10 mb-5 shadow-md mx-auto w-[45%]">
        <input
          type="text"
          className="w-full py-4 rounded-md px-5 text-xl text-gray-600"
          placeholder="@username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="text-black flex flex-col items-center">
        <LoginProvider username={username} />
      </div>
    </>
  );
};

export default Onboarding;
