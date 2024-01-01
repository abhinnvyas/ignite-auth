import Section1 from "@/components/Active Plan/Section1";
import Section2 from "@/components/Active Plan/Section2";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function page() {
  return (
    <div className="flex space-x-4 w-full ">
      <title>Active Plan | Ignite Auth</title>
      <div>
        <Sidebar Active={"activeplan"} />
      </div>
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default page;
