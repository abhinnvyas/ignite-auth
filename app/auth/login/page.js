"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
  textExtraLight,
} from "@/color.js";
import Image from "next/image";
import { sendOTP, verifyOTP } from "@/app/api/auth/login";
import { useRouter } from "next/navigation";
import { sendOTPSignUp, verifyOTPSignUp } from "@/app/api/auth/signup";

function Page() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [VerficationID, setVerficationID] = useState("");
  const [Flag, setFlag] = useState(false);
  const [IsSignUpFlag, setIsSignUpFlag] = useState(false);
  const router = useRouter();

  const handleSubmitSendOTP = async (e) => {
    e.preventDefault();
    sendOTP(PhoneNumber)
      .then((res) => {
        setVerficationID(res.verificationId);
        setFlag(true);
      })
      .catch((err) => {
        sendOTPSignUp(PhoneNumber).then((res) => {
          setVerficationID(res.verificationId);
          setIsSignUpFlag(true);
          setFlag(true);
        });
      });
  };

  const handleSubmitVerifyOTP = async (e) => {
    e.preventDefault();
    !IsSignUpFlag
      ? verifyOTP(PhoneNumber, OTP, VerficationID)
          .then((res) => {
            Cookies.set("ClientId", res.ClientId, { expires: 7, secure: true });
            Cookies.set("token", res.token, { expires: 7, secure: true });

            router.push("/user");
          })
          .catch((err) => {
            console.log(err);
          })
      : verifyOTPSignUp(PhoneNumber, OTP, VerficationID)
          .then((res) => {
            Cookies.set("ClientId", res.ClientId, { expires: 7, secure: true });
            Cookies.set("token", res.token, { expires: 7, secure: true });

            router.push("/user");
          })
          .catch((err) => {
            console.log(err);
          });
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-between border-2  space-x-10 mx-10 h-">
        <div className="max-w-2xl flex-1 text-center mx-auto ">
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
        <div className=" flex-1">
          {Flag ? (
            <form name="Verify OTP" onSubmit={handleSubmitVerifyOTP}>
              <div>
                <label>Enter OTP:</label>
                <input
                  onChange={(e) => setOTP(e.target.value)}
                  type="text"
                  value={OTP}
                  placeholder="93017xxxxx"
                  required
                />
              </div>
              <input value={"Verify OTP"} type="submit" />
            </form>
          ) : (
            <form name="Send OTP" onSubmit={handleSubmitSendOTP}>
              <div>
                <label>Phone Number:</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  pattern="[0-9]{10}"
                  value={PhoneNumber}
                  placeholder="93017xxxxx"
                  required
                />
              </div>
              <input value={"Send OTP"} type="submit" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
