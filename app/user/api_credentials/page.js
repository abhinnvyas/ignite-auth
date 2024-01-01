import Section1 from "@/components/API Credentials/Section1";
import Section2 from "@/components/API Credentials/Section2";
import Sidebar from "@/components/Sidebar/Sidebar";

import React from "react";

function page() {
  return (
    <div className="flex space-x-4 w-full">

      <title>API Credentials | Ignite Auth</title>

      <Sidebar Active={"api_credentials"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default page;
