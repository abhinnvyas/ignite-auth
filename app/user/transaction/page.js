import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function page() {
  return (
    <div className="flex">
      <title>Authentications | Ignite Auth</title>
      <div>
        <Sidebar Active={"transaction"} />
      </div>
      <main>
        <div>Authentications</div>
      </main>
    </div>
  );
}

export default page;
