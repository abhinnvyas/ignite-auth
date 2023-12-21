"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import Section2 from "@/components/Dashboard/Section2";
import Section1 from "@/components/Dashboard/Section1";

function Page() {
  return (
    <div className="flex space-x-4 w-full">
      <Sidebar Active={"dashboard"} />
      <main className="w-full px-4 h-screen overflow-y-scroll">
        <Section1 />
        <Section2 />

        <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-2 mb-10 mt-4 w-full justify-evenly">
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`text-my_primary`}>₹ 0</h1>
              <p className={`text-my_light`}>Today Receive Amount</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`text-my_primary`}>0</h1>
              <p className={`text-my_light`}>Today Success Transaction</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
            <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
            <div className="flex flex-col justify-start ">
              <h1 className={`text-my_primary`}>0</h1>
              <p className={`text-my_light`}>Today Pending Transaction</p>
            </div>
          </div>
        </div>

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
                        className={`block antialiased font-sans text-md leading-normal text-my_secondary `}
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
