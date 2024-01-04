import Link from "next/link";
import React from "react";

function Section4({ RecentActivity }) {
  return (
    <div>
      <div className="flex flex-col border-2 rounded-lg  justify-left p-2 bg-white">
        <div className="p-2 flex justify-between">
          <h1 className="text-md font-semibold mb-2">Recent Activity</h1>
          <Link
            className="hover:underline cursor-pointer transition-all ease-in-out"
            href="/user/transaction"
          >
            View all transactions
          </Link>
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
                    App Name
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                    Client Txn ID
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                    Phone Number
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                    Verification Code
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="block antialiased font-sans text-md text-blue-gray-900 font-normal leading-none opacity-70">
                    Attempts
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {RecentActivity?.map((item, index) => (
                <tr className="" key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p
                        className={`block antialiased font-sans text-md leading-normal text-my_secondary `}
                      >
                        {index + 1}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        {item?.AppName}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        {item?.ClientId}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900 ">
                        {item?.PhoneNumber}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p
                        className={`block antialiased font-sans text-md leading-normal text-blue-gray-900 ${
                          item?.Verified ? "bg-my_secondary" : "bg-red-500"
                        } text-white p-2 rounded-lg`}
                      >
                        {item?.Verified ? "Verified" : "Not Verified"}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-md leading-normal text-blue-gray-900  ">
                        {item?.Attempts}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Section4;
