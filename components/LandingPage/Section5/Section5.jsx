import React from "react";
import Card from "../Section5/Card";

function Section5() {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-4 xl:px-0 mt-10 lg:mt-20">
        <div className="flex flex-col items-center">
          <h1
            className={`mb-3 font-bold text-left text-base text-my_secondary`}
          >
            Ignite Auth{"'"}s Testimonial
          </h1>
          <h1
            className={`font-bold text-3xl lg:text-4xl text-center text-my_primary`}
          >
            What people are saying about Ignite Auth
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-3 border rounded-xl">
            <Card
              heading="Secure, reliable, and easy-to-use"
              feedback="We have been using Ignite Auth for a while now, and we are extremely satisfied with its services. The platform is easy to use, and the payment process is seamless. Moreover, the security features provided by Ignite Auth are top-notch, giving us complete peace of mind."
              name="Akshay Arora"
              industry="Telecom Industry"
            />
            <Card
              heading="Revolutionizing Payment Acceptance"
              feedback="Ignite Auth has been a game-changer for our business. With its dynamic QR feature, we can now accept payments from customers through multiple payment apps, making the payment process hassle-free. The customer support team is also very responsive and helpful."
              name="Rohan Kapoor"
              industry="Retail & E-comm (POS)"
            />
            <Card
              heading="Streamlining Payments with Ignite Auth"
              feedback="We switched to Ignite Auth for our payment processing needs and it has made a significant difference in our operations. The system is intuitive and easy to use, and we appreciate the flexibility to accept payments through various UPI apps."
              name="Aishwarya Sharma"
              industry="OTT Platform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
