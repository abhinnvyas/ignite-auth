import React from "react";

function Section1() {
  return (
    <div>
      <div className={`text-my_primary  p-4  mt-5 `}>
        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          Welcome,
          <span className={`text-my_secondary  font-bold`}> User</span>
        </h1>
        <h1
          className={`text-md md:text-md lg:text-md font-normal mt-2  text-my_light`}
        >
          Accept payments online hassle-free with our QR code service.
        </h1>
      </div>
    </div>
  );
}

export default Section1;
