import React from "react";

function Section1() {
  return (
    <div className={`text-my_primary  p-4  mt-5 border-b`}>
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
        Choose a plan
      </h1>
      <h1
        className={`text-md md:text-md lg:text-md font-normal mt-2  text-my_light`}
      >
        Flexible pricing solutions for your business
      </h1>
    </div>
  );
}

export default Section1;
