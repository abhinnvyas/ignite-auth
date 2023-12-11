import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function pages() {
  return (
    <div className="flex">
      <div>
        <Sidebar Active={"buycredits"} />
      </div>
      <main>
        <div>Buy Credits</div>
      </main>
    </div>
  );
}

export default pages;
