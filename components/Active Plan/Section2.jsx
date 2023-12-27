"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfile } from "@/app/api/getProfile";
import Link from "next/link";

function Section2() {
  const [CreditsAvailable, setCreditsAvailable] = useState(0);
  useEffect(() => {
    const clientId = Cookies.get("ClientId");
    const token = Cookies.get("token");
    getProfile(clientId, token).then((res) => {
      setCreditsAvailable(res.creditsAvailable);
    });
  }, []);
  return (
    <div className="px-4 flex items-center  mt-5 ">
      <div className="bg-my_secondary flex space-x-2 text-white font-semibold p-4 rounded-l-full">
        <h1 className="text-xl">Credits Available: </h1>
        <h1 className="text-xl">{CreditsAvailable}</h1>
      </div>
      <Link
        href="/user/buycredits"
        className="text-xl font-semibold bg-red-500 p-4 text-white rounded-r-full hover:bg-red-600 transition-all ease-in-out"
      >
        Buy More
      </Link>
    </div>
  );
}

export default Section2;
