import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function page() {
  return (
    <div className="flex">
      <div>
        <Sidebar Active={"activeplan"} />
      </div>
      <main>
        <div>Active Plan</div>
      </main>
    </div>
  );
}

export default page;
