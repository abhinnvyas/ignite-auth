"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
  textExtraLight,
} from "@/color.js";
import BarChart from "@/components/Dashboard/BarChart";
import RadialBar from "@/components/Dashboard/RadialBar";
import { useState } from "react";

function Page() {
  const [TotalTxns, setTotalTxns] = useState(100);
  const [UsedTxns, setUsedTxns] = useState(50);
  return (
    <div className="flex space-x-4 w-full">
      <Sidebar Active={"dashboard"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <div className={`${textPrimary} p-4  mt-5 `}>
          <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            Welcome,
            <span className={`${textSecondary} font-bold`}> User</span>
          </h1>
          <h1
            className={`text-md md:text-md lg:text-md font-normal mt-2  ${textExtraLight}`}
          >
            Accept payments online hassle-free with our QR code service.
          </h1>
        </div>

        {/* Bar Graphs */}
        <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-2 mb-10 mt-4">
          <div className="border-2 p-4  rounded-lg flex-1">
            <h1 className="border-b-2">Last 10 Days Statistics</h1>
            <div className="w-full">
              <BarChart />
            </div>
          </div>
          <div className="border-2 p-4 flex-1 rounded-lg ">
            <h1 className="border-b-2">QR Transactions Statistics</h1>
            <div className="w-full">
              <RadialBar UsedTxns={UsedTxns} />
            </div>
            <div className="flex justify-between items-center mx-20">
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

        {/* Top Cards  */}
        <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-2 mb-10 mt-4 w-full justify-evenly">
          {/* Card1 */}
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div
              className={`w-12 h-12 rounded-full ${
                foreground ? "bg-green-700" : ""
              } `}
            ></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`${textPrimary}`}>₹ 0</h1>
              <p className={`${textExtraLight ? textExtraLight : ""}`}>
                Today Receive Amount
              </p>
            </div>
          </div>
          {/* Card2 */}
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div
              className={`w-12 h-12 rounded-full ${
                foreground ? "bg-green-700" : ""
              } `}
            ></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`${textPrimary}`}>0</h1>
              <p className={`${textExtraLight ? textExtraLight : ""}`}>
                Today Success Transaction
              </p>
            </div>
          </div>
          {/* Card3 */}
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div
              className={`w-12 h-12 rounded-full ${
                foreground ? "bg-green-700" : ""
              } `}
            ></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`${textPrimary}`}>0</h1>
              <p className={`${textExtraLight ? textExtraLight : ""}`}>
                Today Pending Transaction
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col border-2 rounded-lg  justify-left p-2 bg-white">
          <div className="p-2 flex justify-between">
            <h1 className="text-md font-semibold mb-2">Recent Activity</h1>
            <h1 className="hover:underline cursor-pointer transition-all ease-in-out">
              See all transactions
            </h1>
          </div>
          <div></div>
          <div className=" px-0 overflow-auto w-full">
            <table className="table-auto w-full text-left ">
              <thead className="">
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text- font-normal leading-none opacity-70">
                      #
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                      Customer Name
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                      Client Txn ID
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                      Amount
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                      Status
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                      Date
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p
                        className={`block antialiased font-sans text-md leading-normal ${textSecondary} `}
                      >
                        1
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        Test Name
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        000111
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        500$
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900  bg-yellow-400 text-white p-2 rounded-lg">
                        Created
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900  ">
                        29-11-2023 12:29 PM
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
