import Image from "next/image";
import React from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";

function Card({ image, heading, paragraph }) {
  return (
    <div>
      <div className="p-6 flex flex-start flex-col">
        <div className="flex items-start justify-start mb-3">
          <Image className="w-20 h-20" src={image} />
        </div>
        <h2 className={`mb-2 text-lg font-medium text-my_primary`}>
          Error-free Transactions
        </h2>
        <p
          className={`mb-4 text-base text-my_light leading-relaxed font-normal`}
        >
          Simplify payment collection with our dynamic QR code feature that
          allows you to set the payment amount and gives you complete control
          over the transaction.
        </p>
      </div>
    </div>
  );
}

export default Card;
