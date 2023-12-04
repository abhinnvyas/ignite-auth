import React from "react";

function Page() {
  return (
    <div>
      <div className="w-full  p-3 border-b-2">
        <div className="text-2xl font-semibold">UPIGateway</div>
        UPIGateway
      </div>

      {/* Form */}
      <div className="m-2 mt-10">
        <div className="flex items-center space-x-2 text-xl">
          <h1>Sign in to </h1>
          <h1 className="font-semibold text-2xl">EKQR</h1>
        </div>

        <div className="flex-col w-full">
          <h1>Mobile No.</h1>
          <input
            className="px-3 py-1 w-full border outline-none rounded-md border-gray-300 hover:border-black hover:shadow-blue-300 focus:ring-1"
            placeholder="Enter Mobile number"
          />
          <div className="flex justify-between items-center">
            <h1>Password</h1>
            <h1 className="text-green-700 text-sm">Forgot Password ?</h1>
          </div>
          <input
            className="px-3 py-1 w-full border outline-none rounded-md border-gray-300 hover:border-black hover:shadow-blue-300 focus:ring-1"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
