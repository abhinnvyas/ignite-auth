"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfile } from "@/app/api/getProfile";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/public/Lottie Files/Credits.json";

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
    <div className="flex items-center">
      <div className=" p-4 px-4 flex flex-col space-y-2 justify-center items-start   ">
        <div className=" flex space-x-4  items-center justify-center">
          <h1 className="text-2xl font-semibold">Credits Available: </h1>
          <h1 className="text-2xl bg-my_secondary text-white px-4 py-2 rounded-full">
            {CreditsAvailable}
          </h1>
        </div>
        <Link
          href="/user/buycredits"
          className="text-lg  font-semibold bg-my_secondary_dark px-8 py-2 shadow-lg text-white rounded-full hover:bg-my_secondary transition-all ease-in-out"
        >
          Buy More
        </Link>
      </div>
      <div className="w-[200px]">
        <Lottie animationData={animationData} width={100} height={100} />
      </div>
    </div>
  );
}

export default Section2;
