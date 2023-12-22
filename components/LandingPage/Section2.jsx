"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/Lottie Files/2.json";

function Section2() {
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
            How does Ignite Auth Dynamic QR work?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:items-center space-y-5 lg:space-x-10 mt-10 ">
          <div className=" flex flex-grow h-full ">
            <Lottie
              color="#2F855A"
              width={100}
              height={100}
              animationData={animationData}
            />
          </div>
          <div className="flex flex-col justify-start space-y-4 ">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center w-16 h-16  rounded-full bg-my_secondary`}
              >
                <div
                  className={`h-8 items-center justify-center w-1/2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>1</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  Customer will select the product on your website and proceed
                  to checkout.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center w-16 h-16  rounded-full bg-my_secondary`}
              >
                <div
                  className={`h-8 items-center justify-center w-1/2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>2</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  During checkout, Ignite Auth generates a dynamic QR code that
                  is displayed on your website.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center w-16 h-16  rounded-full bg-my_secondary`}
              >
                <div
                  className={`h-8 items-center justify-center w-1/2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>3</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  The customer will make the payment through any UPI app by
                  scanning the QR code.
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-10 ">
              <div
                className={`flex flex-col items-center justify-center w-16 h-16  rounded-full bg-my_secondary`}
              >
                <div
                  className={`h-8 items-center justify-center w-1/2 flex bg-my_background rounded-full`}
                >
                  <h2 className={`text-lg text-my_primary font-normal`}>4</h2>
                </div>
              </div>
              <div>
                <h2
                  className={`mb-2 text-lg font-normal text-my_primary transition-all`}
                >
                  After payment, Ignite Auth will verify the transaction and
                  send a status response through webhook.
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
