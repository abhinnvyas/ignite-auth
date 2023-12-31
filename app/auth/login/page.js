"use client";
import React from "react";
import Image from "next/image";
import Form from "@/components/LoginPage/Form";
import Logo from "@/public/Logo.png";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/public/Animation2.json";

function Page() {
  return (
    <div className="min-h-screen ">
      <title>
        Sign In - Ignite Auth : Secure Authentication, Seamless Sign-In
      </title>
      
     
      <div className="flex items-center justify-between px-5 h-18 border-b-2 p-2">
        <div className="flex items-center space-x-1 px-2">
          <Link href="/">
            <Image
              className=""
              src={Logo}
              width={100}
              objectFit="contain"
              alt="logo"
            />
          </Link>
          {/* <h1 className="font-bold">Ignite Auth</h1> */}
        </div>
        <div
          className={`flex items-center px-2 py-1 bg-white text-my_light border-my_light hover:cursor-pointer hover:shadow-md border-2 rounded-lg
          transition-all ease-in-out`}
        >
          <div>
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </div>
          <p>Get Help</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10 mx-10 h-">
        <div className="max-w-2xl flex-1 text-center mx-auto mb-20">
          <div className="hidden  md:flex items-center justify-around flex-1  p-3">
            {/* <h1>Add your Image here</h1>
            <Image
              className=""
              src=""
              width={100}
              height={100}
              objectFit="cover"
              alt="Add your Image here"
            ></Image> */}
            <Lottie
              color="#2F855A"
              width={100}
              height={100}
              animationData={animationData}
            />
          </div>
          <p className="w-xxl-65 w-100 mx-auto">
            Accept payments from your customers through our easy-to-use QR code
            service, with 0% transaction fees.
          </p>
        </div>
        <div className="flex-1  border-l-my_light">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Page;
