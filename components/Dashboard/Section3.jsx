import React from "react";

function Section3({ otpSentToday, totalVerifiedOTP, totalUnverifiedOTP }) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-2 mb-10 mt-4 w-full justify-evenly">
        <div className="flex flex-1    items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
          <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
          <div className="flex flex-col justify-start ">
            <h1 className={`text-my_primary`}>{otpSentToday}</h1>
            <p className={`text-my_light`}>OTP Sent Today </p>
          </div>
        </div>
        <div className="flex flex-1  items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
          <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
          <div className="flex flex-col justify-start ">
            <h1 className={`text-my_primary`}>{totalVerifiedOTP}</h1>
            <p className={`text-my_light`}>Total Verified OTP</p>
          </div>
        </div>
        <div className="flex flex-1  items-center space-x-4 p-4 border-2 rounded-lg justify-start lg:justify-center">
          <div className={`w-12 h-12 rounded-full bg-my_secondary`}></div>
          <div className="flex flex-col justify-start ">
            <h1 className={`text-my_primary`}>{totalUnverifiedOTP}</h1>
            <p className={`text-my_light`}>Total Unverfied OTP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
