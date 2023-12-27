import React from "react";

function Section1() {
  return (
    <div className={`text-my_primary border-b p-4  mt-5 `}>
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
        Active Subscription
      </h1>
      <h1
        className={`text-md md:text-md lg:text-md font-normal mt-2  text-my_light`}
      >
        Here, you can view your account's active subscription and upgrade it as
        well
      </h1>
    </div>
  );
}

export default Section1;
