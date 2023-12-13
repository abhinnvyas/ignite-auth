import Navbar from "@/components/Navbar";
import React from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
  textExtraLight,
} from "@/color.js";
import Image from "next/image";

function Page() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <div className="max-w-2xl text-center mx-auto">
          <div className="border flex flex-1 mt-10 p-3">
            <h1>Add your Image here</h1>
            <Image
              className=""
              src=""
              width={100}
              height={100}
              objectFit="cover"
              alt="Add your Image here"
            ></Image>
          </div>
          <p className="w-xxl-65 w-100 mx-auto">
            Accept payments from your customers through our easy-to-use QR code
            service, with 0% transaction fees.
          </p>
        </div>
        <div>{/* Form */}</div>
      </div>
    </div>
  );
}

export default Page;
