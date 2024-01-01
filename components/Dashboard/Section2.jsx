"use client";
import React, { useState } from "react";

import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("./BarChart"), { ssr: false });
const RadialBar = dynamic(() => import("./RadialBar"), { ssr: false });

function Section2() {
  const [TotalTxns, setTotalTxns] = useState(100);
  const [UsedTxns, setUsedTxns] = useState(50);
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-2 mb-10 mt-4">
        <div className="border-2 p-4  rounded-lg flex-1">
          <h1 className="border-b-2">Last 10 Days Statistics</h1>
          <div className="w-full">
            <BarChart />
          </div>
        </div>
        <div className="border-2 p-4 lg:w-1/4 rounded-lg ">
          <h1 className="border-b-2">QR Transactions Statistics</h1>
          <div className="w-full">
            <RadialBar UsedTxns={UsedTxns} />
          </div>
          <div className="flex justify-between items-center mx-20 lg:mt-10">
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-my_light">Total Txns</h1>
              <h1 className="text-my_light font-semibold text-xl">
                {TotalTxns}
              </h1>
            </div>
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-my_light">Used Txns</h1>
              <h1 className="text-my_light font-semibold text-xl">
                {UsedTxns}
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center mt-5">
            <h1 className="text-my_light">Plan Expire</h1>
            <h1 className="text-my_light font-semibold text-xl">
              No Active Plan
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
