import React from "react";
import Card from "./Card";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";

function Section3() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-4 xl:px-0 ">
      <div className="flex flex-col items-center">
        <h1 className={`mb-3 font-bold text-left text-base ${textSecondary}`}>
          UPIGateway{"'"}s Use Cases
        </h1>
        <h1
          className={`font-bold text-3xl lg:text-4xl text-center ${textPrimary}`}
        >
          Unlock the potential of UPIGateway's Dynamic QR in different scenarios
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-10  mt-10 lg:mt-20">
        <Card
          heading="Accepts payments via websites"
          paragraph="Make payment acceptance a breeze by integrating dynamic QR codes into your website, e-commerce platform, and mobile apps."
          linkHref=""
          imageHref=""
        />
        <Card
          heading="Accepts payments via OTT & Smart TV Apps"
          paragraph="Integrate Dynamic QR into your app and start accepting payments for premium features, subscriptions, or in-app purchases with ease."
          linkHref=""
          imageHref=""
        />
        <Card
          heading="Accept payments in store"
          paragraph="Say goodbye to errors and delays at the point of sale. Display our dynamic QR code on your POS terminal and accept payments seamlessly."
          linkHref=""
          imageHref=""
        />
        <Card
          heading="Accept payments on self serving Kiosks"
          paragraph="Allow customers to make contactless payments at self-ordering kiosks in fast-food restaurants, vending machines in offices, airports, and parking lots with the help of UPIGateway's dynamic QR feature."
          linkHref=""
          imageHref=""
        />
      </div>
    </div>
  );
}

export default Section3;
