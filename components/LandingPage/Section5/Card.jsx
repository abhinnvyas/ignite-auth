import React from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";
import { Logo } from "@/public/igniteauth_logo.png";
import Image from "next/image";

function Card({ heading, feedback, name, industry }) {
  return (
    <div>
      <div
        className={`flex flex-col justify-start items-center p-8 text-center bg-gray-50 md:p-12 border-b lg:border-b-0 lg:border-r rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl h-full`}
      >
        <div className="mx-auto mb-8 max-w-2xl">
          <h1 className={`text-lg font-semibold ${textPrimary}`}>{heading}</h1>
          <p className={`my-4 ${textLight}`}>"{feedback}"</p>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div className="font-medium  text-left space-y-0.5 ">
            <div>{name}</div>
            <div className="text-sm font-light text-gray-500">{industry}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
