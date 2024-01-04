"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getAnalytics } from "@/app/api/getAnalytics";
import Section4 from "@/components/Dashboard/Section4";
import Section1 from "@/components/Transaction/Section1";

function page() {
  const [Response, setResponse] = useState(null);
  useEffect(() => {
    const clientId = Cookies.get("ClientId");
    const token = Cookies.get("token");

    getAnalytics(clientId, token).then((res) => {
      setResponse(res);
    });
  }, [Response]);
  return (
    <div className="flex">
      <title>Authentications | Ignite Auth</title>
      <div>
        <Sidebar Active={"transaction"} />
      </div>
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section4
          RecentActivity={Response?.recentActivity}
          isDashboard={false}
        />
      </main>
    </div>
  );
}

export default page;
