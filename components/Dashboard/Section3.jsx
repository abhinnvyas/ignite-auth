import React from "react";

function Section3() {
  return (
    <div>
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
    </div>
  );
}

export default Section3;
