"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";

function Card({ heading, paragraph, linkHref, imageData, loop = true }) {
  return (
    <div
      className={`relative flex bg-my_background flex-col lg:flex-row p-4 lg:p-7 rounded-xl border overflow-hidden items-center col-span-1 lg:col-span-2 text-my_primary`}
    >
      <div className="lg:mr-7  w-full lg:w-1/2 xl:w-2/3">
        <div className="font-medium text-lg ">{heading}</div>
        <div className={`font-normal pr-2 mt-2 text-gray-500 text-base`}>
          {paragraph}
        </div>
        <div className="flex items-start justify-start mt-3">
          <a
            className={`font-bold  text-base focus:outline-none`}
            href={linkHref}
          >
            Integrate Now
          </a>
        </div>
      </div>
      <div className=" flex  p-3  overflow-hidden rounded-lg  lg:mb-0 lg:absolute w-52 lg:-right-6">
        <Lottie
          loop
          color="#2F855A"
          width={100}
          height={100}
          animationData={imageData}
        />
      </div>
    </div>
  );
}

export default Card;
