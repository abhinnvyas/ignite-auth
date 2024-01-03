"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import Section2 from "@/components/Dashboard/Section2";
import Section1 from "@/components/Dashboard/Section1";
import Section3 from "@/components/Dashboard/Section3";
import Section4 from "@/components/Dashboard/Section4";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getAnalytics } from "../api/getAnalytics";

function Page() {
  const [Response, setResponse] = useState(null);
  useEffect(() => {
    const clientId = Cookies.get("ClientId");
    const token = Cookies.get("token");

    getAnalytics(clientId, token).then((res) => {
      setResponse(res);
      console.log(Response);
    });
  }, [Response]);
  return (
    <div className="flex space-x-4 w-full">
      <title>Dashboard | Ignite Auth</title>
      <Sidebar Active={"dashboard"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section3
          otpSentToday={Response?.otpSentToday}
          totalVerifiedOTP={Response?.otpVerifiedToday}
          totalUnverifiedOTP={Response?.otpUnverifiedToday}
        />
        <Section2 WeeklyAnalysis={Response?.weeklyAnalysis} />
        <Section4 />
      </main>
    </div>
  );
}

export default Page;
