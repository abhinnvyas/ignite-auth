"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import Section2 from "@/components/Dashboard/Section2";
import Section1 from "@/components/Dashboard/Section1";
import Section3 from "@/components/Dashboard/Section3";
import Section4 from "@/components/Dashboard/Section4";

function Page() {
  return (
    <div className="flex space-x-4 w-full">
      <title>Dashboard | Ignite Auth</title>
      <Sidebar Active={"dashboard"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section3 />
        <Section2 />
        <Section4 />
      </main>
    </div>
  );
}

export default Page;
