import Image from "next/image";
import React from "react";
function Section1() {
  return (
    <div>
      <div className="max-w-screen-xl flex items-center mx-auto flex-col lg:flex-row pt-4 pb-20 px-4 sm:px-8 md:px-4 xl:px-0 h-screen">
        <div className="flex flex-col justify-center text-left space-y-3 lg:max-w-md">
          <div className={`text-my_primary`}>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-normal lg:leading-normal ">
              Ignite Auth
            </h1>
            <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal font-semibold">
              Elevate Your App's Security,
            </h1>
            <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal font-semibold">
              Simplify User Access
            </h1>
          </div>
          {/* <h1
            className={`mt-2 lg:mt-4 text-3xl lg:text-4xl font-semibold text-my_secondary w-fit transition-all ease-in-out`}
          >
            0% Transaction Fee
          </h1> */}
          <p className={`text-base leading-relaxed md:text:2xl text-my_light`}>
            Revolutionize Your Payment Process with Dynamic QR Codes Service.
          </p>
          <p
            className={`leading-relaxed text-my_light text-xs sm:text-xs text-left`}
          >
            *Ignite Auth provides Dynamic QR Generating service. Ignite Auth
            does not provide payment gateway service.
          </p>
          <a
            className={`text-left mb-4 sm:mb-6 md:mb-8 font-bold text-my_primary  border-b-2 w-fit border-black`}
            href=""
          >
            Start Accepting Payments
          </a>
        </div>
        <div className="border flex flex-1 mt-10 p-3">
          <h1>Add your Image here</h1>
          <Image
            className=""
            src=""
            width={100}
            height={100}
            objectFit="cover"
            alt="Add your Image here"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Section1;
