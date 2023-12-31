"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/Animation2.json";
function Section1() {
  return (
    <div>
      <div className="max-w-screen-xl flex items-center mx-auto flex-col lg:flex-row pt-4 pb-20 px-4 sm:px-8 md:px-4 xl:px-0 h-screen ">
        <div className="flex flex-col justify-center text-left space-y-3 lg:max-w-100">
          <div className={`text-my_primary`}>
            <h1 style={{
              color: "#2F855A"
            }} className="text-xl lg:text-5xl font-bold  leading-normal lg:leading-normal ">
              Ignite Auth
            </h1>
            <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal ">
              Elevate Your App's Security,
            </h1>
            <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal ">
              Simplify User Access
            </h1>
          </div>
          {/* <h1
            className={`mt-2 lg:mt-4 text-3xl lg:text-4xl font-semibold text-my_secondary w-fit transition-all ease-in-out`}
          >
            0% Transaction Fee
          </h1> */}
          <p className={`text-base leading-relaxed md:text:2xl text-my_light`}>
            Revolutionize Your Authentication System with One Time Passwords
          </p>
          <p
            className={`leading-relaxed text-my_light text-xs sm:text-xs text-left`}
          >
            *Ignite Auth provides OTP based authentication system for your
            application. It is not a messaging service.
          </p>
          <a
            className={`text-left mb-4 sm:mb-6 md:mb-8 font-bold text-my_primary  border-b-2 w-fit border-black`}
            href=""
          >
            Start Authenticating Now
          </a>
        </div>
        <div className="hidden md:flex items-end justify-end flex-1 mt-10  ">
          {/* <h1>Add your Image here</h1>
          <Image
            className=""
            src=""
            width={100}
            height={100}
            objectFit="cover"
            alt="Add your Image here"
          ></Image> */}<video autoPlay loop muted playsInline width={"800px"}>
            <source src="/Section1Vid.mp4" type="video/mp4" />
          </video>
          {/* <Lottie
            color="#2F855A"
            width={100}
            height={100}
            animationData={animationData}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Section1;
