"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/Lottie Files/2.json";
import image1 from "@/public/Landing Page/Section2/1.png";
import image2 from "@/public/Landing Page/Section2/2.png";
import image3 from "@/public/Landing Page/Section2/3.jpeg";
import image4 from "@/public/Landing Page/Section2/4.png";
import ImageStack from "./ImageStack";

function Section2() {
  const images = [image1, image2, image3, image4];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-4 xl:px-0 mb-20 ">
        <div className="flex flex-col items-center">
          <h1
            className={`mb-3 font-bold text-left text-base text-primary text-my_secondary`}
          >
            How it works
          </h1>
          <h1 className="font-bold text-3xl lg:text-4xl text-center ">
            How does Ignite Auth work?
          </h1>
        </div>
        <div className="flex flex-col  lg:flex-row justify-center lg:items-center space-y-5 lg:space-x-10 mt-10 ">
          <div className="flex w-full flex-1 items-center justify-center flex-grow h-full ">
            <div className="w-full  ">
              <ImageStack images={images} />
            </div>

            {/* <Lottie
              className="w-full"
              color="#2F855A"
              height={100}
              animationData={animationData}
            /> */}
          </div>
          <div className="flex flex-1 flex-col justify-start space-y-4 ">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center px-2 py-2  rounded-full bg-my_secondary`}
              >
                <div
                  className={` items-center justify-center px-4 py-2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>1</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  User Request - User initiates an OTP request through your
                  application.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center px-2 py-2  rounded-full bg-my_secondary`}
              >
                <div
                  className={` items-center justify-center px-4 py-2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>2</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  IgniteAuth API Call - Your application communicates with
                  IgniteAuth's API, requesting the generation of a dynamic OTP
                  for the user.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center px-2 py-2  rounded-full bg-my_secondary`}
              >
                <div
                  className={` items-center justify-center px-4 py-2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>3</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  OTP Delivery and User Verification - IgniteAuth generates a
                  dynamic OTP and sends it to the user's WhatsApp number. The
                  user enters the OTP into your application for verification.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center px-2 py-2  rounded-full bg-my_secondary`}
              >
                <div
                  className={` items-center justify-center px-4 py-2  flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>4</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  Verification and Access - Your application sends a
                  verification request to IgniteAuth, which checks the validity
                  of the OTP. Based on the verification result, your application
                  either grants or denies access to the user.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
