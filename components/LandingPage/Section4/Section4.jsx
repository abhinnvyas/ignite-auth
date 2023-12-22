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
            Advantages of using Ignite Auth
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <Card
              image={Section41}
              heading="Two-Factor Authentication (2FA)"
              paragraph="Ignite Auth provides a robust layer of security through its two-factor authentication (2FA) mechanism. By integrating this solution, you add an extra step to the authentication process, requiring users to verify their identity not just with a password but also with a one-time password (OTP) delivered via WhatsApp. This significantly reduces the risk of unauthorized access, data breaches, and other security threats."
            />
            <Card
              image={Section42}
              heading="WhatsApp Integration"
              paragraph="Leveraging WhatsApp for OTP delivery makes the authentication process more user-friendly. Many users are already familiar with WhatsApp, and receiving OTPs through this widely-used platform adds a level of convenience. This streamlined user experience contributes to higher user satisfaction and adoption rates."
            />
            <Card
              image={Section43}
              heading="Credits System"
              paragraph="Ignite Auth's credit-based pricing model allows for flexibility and cost control. Users can purchase credits based on their specific authentication needs, and the affordable pricing per credit (0.1 INR) ensures a cost-effective solution. This flexibility is particularly beneficial for businesses with varying authentication volumes."
            />
            <Card
              image={Section44}
              heading="Adaptable to Various Sectors"
              paragraph="Ignite Auth is versatile and applicable across different industries. Whether you are in e-commerce, finance, healthcare, education, or any other sector, Ignite Auth provides a secure and scalable authentication solution. Its versatility makes it suitable for a wide range of use cases, allowing businesses from various domains to enhance their security measures."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
