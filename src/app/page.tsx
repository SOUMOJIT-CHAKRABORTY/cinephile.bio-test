"use client";
import Onboarding from "@/components/ui/onboarding";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col p-24 text-slate-100 gap-6">
        {/* <section> */}
        <Onboarding />
        {/* </section> */}
      </main>
    </RecoilRoot>
  );
}
