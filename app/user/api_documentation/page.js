import Section1 from "@/components/API Documentation/Section1";
import Section2 from "@/components/API Documentation/Section2";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex space-x-4 w-full">
        <Sidebar Active={"api_documentation"} />
        <main className="w-full px-4 h-screen overflow-y-scroll">
          <Section1 />
          <Section2 />
          <div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default page;
