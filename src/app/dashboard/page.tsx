import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  const session = await getServerSession();
  // const router = useRouter();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center text-2xl text-white gap-5">
      <div>Dashboard Page</div>
      <Link href="/dashboard/home">
        <button className="bg-blue-400 px-5 py-2">Home</button>
      </Link>
      <Link href={`/dashboard/${session.user?.name}`}>
        <button className="bg-blue-400 px-5 py-2">Profile</button>
      </Link>
      <Link href="/dashboard/settings">
        <button className="bg-blue-400 px-3 py-2">Settings</button>
      </Link>
    </div>
  );
}
