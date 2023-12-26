import React from "react";
import {
  CheckBadgeIcon,
  CheckIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";

function Card() {
  return (
    <div className="flex flex-col space-y-3 items-center justify-center border-2 rounded-lg flex-1">
      <h1 className="text-xl font-bold mt-5">Starter</h1>
      <CheckBadgeIcon className="text-my_secondary w-8 h-8" />
      <h1 className="text-3xl">₹ 499</h1>
      <h1 className="text-my_light">per 28 Days</h1>
      <h1 className="text-my_secondary font-semibold text-xl">
        4,999 QR Code Request
      </h1>
      <div className="flex-col space-y-1 text-left">
        <div className="flex space-x-2 items-center">
          <CheckIcon className="w-4 h-4 text-my_secondary" />
          <p>0 Transaction Fee*</p>
        </div>
        <div className="flex space-x-2 items-center">
          <CheckIcon className="w-4 h-4 text-my_secondary" />
          <p>0 Transaction Fee*</p>
        </div>
        <div className="flex space-x-2 items-center">
          <CheckIcon className="w-4 h-4 text-my_secondary" />
          <p>0 Transaction Fee*</p>
        </div>
        <div className="flex space-x-2 items-center">
          <CheckIcon className="w-4 h-4 text-my_secondary" />
          <p>0 Transaction Fee*</p>
        </div>
        <div className="flex space-x-2 items-center">
          <NoSymbolIcon className="w-4 h-4 text-red-500" />
          <p>0 Transaction Fee*</p>
        </div>
        <div className="flex space-x-2 items-center">
          <NoSymbolIcon className="w-4 h-4 text-red-500" />
          <p>0 Transaction Fee*</p>
        </div>
      </div>
      <div className="w-5/6 ">
        <button className=" bg-my_secondary text-lg text-white w-full p-2 rounded-lg mt-2 mb-4">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
