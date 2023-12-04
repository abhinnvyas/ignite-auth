import React from "react";

function Page() {
  return (
    <div className="">
      <div className="w-full  p-3 border-b-2">
        <div className="text-2xl font-semibold">UPIGateway</div>
        UPIGateway
      </div>

      {/* Form */}
      <div className="m-2 mt-10 p-1">
        <div className="flex items-center space-x-2 text-xl">
          <h1>Sign in to </h1>
          <h1 className="font-semibold text-2xl">EKQR</h1>
        </div>
        <form>
          <div className="flex-col w-full">
            <div className="mt-4">
              <h1>Mobile No.</h1>
            </div>
            <input
              type="text"
              className="mt-2 px-3 py-1 w-full border outline-none rounded-md border-gray-300 hover:border-black hover:shadow-blue-300 focus:ring-1"
              placeholder="Enter Mobile number"
            />
            <div className="mt-4 flex justify-between items-center">
              <h1>Password</h1>
              <h1 className="text-green-700 text-sm hover:cursor-pointer hover:text-green-600">
                Forgot Password ?
              </h1>
            </div>
            <input
              type="password"
              className="mt-2 px-3 py-1 w-full border outline-none rounded-md border-gray-300 hover:border-black hover:shadow-blue-300 focus:ring-1"
              placeholder="Enter your password"
            />
            <div className="mt-4 flex justify-center items-center space-x-2 text-sm text-gray-500">
              <input
                type="checkbox"
                className="outline-none bg-green-700 text-green-900"
              />
              <h1>Keep me Logged in</h1>
            </div>
            <button className="mt-1 w-full rounded-lg py-2 font-bold text-white bg-green-800 hover:bg-green-900">
              LOGIN
            </button>
            <h1 className="mt-4 text-center text-sm text-gray-500">
              New to UPIGateway?
            </h1>
            <button className="mt-2 w-full rounded-lg py-2 font-bold bg-green-200 hover:bg-green-900 text-green-800 hover:text-white transition-all ease-in-out">
              CREATE NEW ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
