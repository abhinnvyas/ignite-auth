import React from "react";
import Card from "./Card";
import Section41 from "@/public/section4(1).png";
import Section42 from "@/public/section4(2).png";
import Section43 from "@/public/section4(3).png";
import Section44 from "@/public/section4(4).png";

function Section4() {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-4 xl:px-0 mt-10 lg:mt-20 ">
        <div className="flex flex-col items-center">
          <h1
            className={`mb-3 font-bold text-left text-base text-my_secondary`}
          >
            Ignite Auth{"'"}s Features
          </h1>
          <h1
            className={`font-bold text-3xl lg:text-4xl text-center text-my_primary`}
          >
            Advantages of integrating Ignite Auth's Dynamic QR code service
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <Card
              image={Section41}
              heading="Error-free Transactions"
              paragraph="Simplify payment collection with our dynamic QR code feature that allows you to set the payment amount and gives you complete control over the transaction."
            />
            <Card
              image={Section42}
              heading="Supports all UPI apps"
              paragraph="Accept payments from all UPI and bank apps, including Paytm, Google Pay, PhonePe, BHIM, and more."
            />
            <Card
              image={Section43}
              heading="Secure & seamless"
              paragraph="Merchants can generate a unique QR code for each order, which can be easily displayed on a POS terminal or website for convenient payment collection."
            />
            <Card
              image={Section44}
              heading="Easy Integration"
              paragraph="Connect seamlessly using our no-code setup, developer-friendly APIs, and native SDK."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
