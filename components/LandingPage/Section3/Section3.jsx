import React from "react";
import Card from "./Card";
import animationData1 from "@/public/Lottie Files/Section3/first.json";
import animationData2 from "@/public/Lottie Files/Section3/second.json";
import animationData3 from "@/public/Lottie Files/Section3/third.json";
import animationData4 from "@/public/Lottie Files/Section3/fourth.json";

function Section3() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-4 xl:px-0 ">
      <div className="flex flex-col items-center">
        <h1 className={`mb-3 font-bold text-left text-base text-my_secondary`}>
          UPIGateway{"'"}s Use Cases
        </h1>
        <h1
          className={`font-bold text-3xl lg:text-4xl text-center text-my_primary`}
        >
          Unlock the potential of UPIGateway's Dynamic QR in different scenarios
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-10  mt-10 lg:mt-20">
        <Card
          heading="E-Commerce Secure Access:"
          paragraph="Enhances user account security, protects sensitive information, and builds trust among online shoppers."
          linkHref=""
          imageData={animationData1}
        />
        <Card
          heading="Financial Transaction Verification"
          paragraph="Adds an extra layer of security to financial transactions, reducing the risk of unauthorized access or fraudulent activities.
          "
          linkHref=""
          imageData={animationData2}
        />
        <Card
          heading="Employee Identity Verification for Enterprise Apps"
          paragraph="Strengthens access controls, mitigates the risk of unauthorized access to corporate resources, and simplifies the login process for employees.
          "
          linkHref=""
          imageData={animationData3}
        />
        <Card
          heading="Subscription-based Services"
          paragraph="Reduces the risk of account sharing, protects premium content, and enhances the overall security of subscription-based platforms."
          linkHref=""
          imageData={animationData4}
        />
      </div>
    </div>
  );
}

export default Section3;
