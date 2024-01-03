"use client";
import React from "react";
import Card from "./Card";
import animationData from "@/public/Lottie Files/Buy Credits.json";
import Lottie from "lottie-react";

function Section2() {
  return (
    <div className="p-4 rounded-lg mb-4">
      <div className="grid grid-cols-3  ">
        <div className="col-span-2  flex items-center justify-center p-4">
          <Card />
        </div>
        <div className=" col-span-1">
          <Lottie animationData={animationData} height={100} width={100} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
