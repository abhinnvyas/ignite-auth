import React from "react";
function Section6() {
  return (
    <div className="max-w-screen-xl mx-auto overflow-x-hidden">
      <div
        className={`flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center my-14 md:my-28 px-4 bg-my_secondary p-4 py-10 lg:px-10 text-white`}
      >
        <div className="flex-col flex justify-center items-start">
          <div className="mb-1 lg:mb-2 font-medium text-left text-2xl lg:text-3xl ">
            Start Authenticating Your Users and their Activities with
          </div>
          <div className="mb-4 text-xl md:mb-0 font-medium text-left">
            Ignite Auth's OTP Service
          </div>
        </div>
        <a
          className={`inline-flex items-center bg-white hover:bg-gray-100 text-my_secondary hover:x px-8 py-6 font-semibold rounded text-base focus:outline-none md:mt-0 whitespace-nowrap`}
          href=""
        >
          Try it now!
        </a>
      </div>
    </div>
  );
}

export default Section6;
