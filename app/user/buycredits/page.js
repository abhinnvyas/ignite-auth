import Section1 from "@/components/Buy Credits/Section1";
import Section2 from "@/components/Buy Credits/Section2";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useEffect } from "react";

function pages() {
  return (
    <div className="flex space-x-4 w-full">
      <Sidebar Active={"buycredits"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default pages;
