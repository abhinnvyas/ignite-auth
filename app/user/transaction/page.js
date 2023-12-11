import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function page() {
  return (
    <div className="flex">
      <div>
        <Sidebar Active={"transaction"} />
      </div>
      <main>
        <div>Transaction</div>
      </main>
    </div>
  );
}

export default page;
