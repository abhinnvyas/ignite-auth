import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
  textExtraLight,
} from "@/color.js";

function page() {
  return (
    <div className="flex space-x-4 ">
      <div>
        <Sidebar Active={"dashboard"} />
      </div>
      <main>
        <div className={`${textPrimary} p-4  mt-5 `}>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            Welcome,
            <span className={`${textSecondary} font-bold`}> User</span>
          </h1>
          <h1
            className={`text-md md:text-lg lg:text-xl font-normal mt-2  ${textExtraLight}`}
          >
            Accept payments online hassle-free with our QR code service.
          </h1>
        </div>

        <div class="flex flex-col border-2 rounded-lg  justify-left p-2 bg-white">
          <div className="p-2">
            <h1 className="text-xl font-semibold ">Recent Activity</h1>
          </div>
          <div class="p-6 overflow-auto px-0">
            <table class="w-full table-auto text-left">
              <thead className="">
                <tr>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text- font-normal leading-none opacity-70">
                      #
                    </p>
                  </th>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text-blue-gray-900 font-normal leading-none opacity-70">
                      Customer Name
                    </p>
                  </th>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text-blue-gray-900 font-normal leading-none opacity-70">
                      Client Txn ID
                    </p>
                  </th>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text-blue-gray-900 font-normal leading-none opacity-70">
                      Amount
                    </p>
                  </th>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text-blue-gray-900 font-normal leading-none opacity-70">
                      Status
                    </p>
                  </th>
                  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p class="block antialiased font-sans text-lg text-blue-gray-900 font-normal leading-none opacity-70">
                      Date
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p
                        class={`block antialiased font-sans text-lg leading-normal ${textSecondary} `}
                      >
                        1
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p class="block antialiased font-sans text-lg leading-normal text-blue-gray-900 ">
                        Test Name
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p class="block antialiased font-sans text-lg leading-normal text-blue-gray-900 ">
                        000111
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p class="block antialiased font-sans text-lg leading-normal text-blue-gray-900 ">
                        500$
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p class="block antialiased font-sans text-lg leading-normal text-blue-gray-900  bg-yellow-400 text-white p-2 rounded-lg">
                        Created
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <p class="block antialiased font-sans text-lg leading-normal text-blue-gray-900  ">
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

export default page;