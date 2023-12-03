"use client";
import { usernameAtom } from "@/atoms/atom";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";

export default function DashboardPage() {
  const session = useSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center text-2xl text-white gap-5">
      <div>Dashboard Page</div>
      <Link href="/dashboard/home">
        <button className="bg-blue-400 px-5 py-2">Home</button>
      </Link>
      <Link href={`/dashboard/${session.data?.user.username}`}>
        <button className="bg-blue-400 px-5 py-2">Profile</button>
      </Link>
      <Link href="/dashboard/settings">
        <button className="bg-blue-400 px-3 py-2">Settings</button>
      </Link>
    </div>
  );
}
