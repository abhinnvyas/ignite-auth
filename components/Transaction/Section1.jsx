import React from "react";

function Section1() {
  return (
    <div className={`text-my_primary  p-4  mt-5  mb-5`}>
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
        Transactions Report
      </h1>
      <h1
        className={`text-md md:text-md lg:text-md font-normal mt-2  text-my_light`}
      >
        This is a report of all the transactions that have taken place on your
        account.
      </h1>
    </div>
  );
}

export default Section1;
