"use client";
import React from "react";
import Card from "./Card";
import animationData from "@/public/Lottie Files/Buy Credits.json";
import Lottie from "lottie-react";

function Section2() {
  return (
    <div className="p-4 rounded-lg mb-4">
      <div className="grid lg:grid-cols-3 grid-rows-2  ">
        <div className="col-span-2  flex  items-center justify-center p-4">
          <div className="flex flex-col space-y-4">
            <Card />
            <div className="flex flex-col space-y-2">
              <p>
                Enjoy cost-effective communication with our credit system. For
                just 0.1 rupees per credit, you can send one message, making it
                an economical option for staying in in business.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <Lottie animationData={animationData} height={100} width={100} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
