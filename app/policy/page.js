import Section6 from "@/components/LandingPage/Section6";
import Section7 from "@/components/LandingPage/Section7";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Policy/Section1";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className="m-10">
        <Section1 />
        <Section6 />
        <Section7 />
      </div>
    </div>
  );
}

export default page;
