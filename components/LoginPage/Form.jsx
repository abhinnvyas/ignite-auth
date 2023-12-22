import React, { useState } from "react";
import Cookies from "js-cookie";
import { sendOTP, verifyOTP } from "@/app/api/auth/login";
import { useRouter } from "next/navigation";
import { sendOTPSignUp, verifyOTPSignUp } from "@/app/api/auth/signup";
import Lottie from "lottie-react";
import animationData from "@/public/Lottie Files/Loading.json";

function Form() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [VerficationID, setVerficationID] = useState("");
  const [Flag, setFlag] = useState(false);
  const [IsSignUpFlag, setIsSignUpFlag] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [AppName, setAppName] = useState("");

  const router = useRouter();

  const handleSubmitSendOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendOTP(PhoneNumber, AppName)
      .then((res) => {
        setVerficationID(res.verificationId);
        setFlag(true);
        setIsLoading(false);
      })
      .catch((err) => {
        sendOTPSignUp(PhoneNumber, AppName).then((res) => {
          setVerficationID(res.verificationId);
          setIsSignUpFlag(true);
          setFlag(true);
          setIsLoading(false);
        });
      });
  };

  const handleSubmitVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    !IsSignUpFlag
      ? verifyOTP(PhoneNumber, OTP, VerficationID, AppName)
          .then((res) => {
            console.log(res);
            Cookies.set("ClientId", res.ClientId, { expires: 7, secure: true });
            Cookies.set("token", res.token, { expires: 7, secure: true });
            router.push("/user");
            setIsLoading(false);
          })
          .catch((err) => {
            alert("OTP has Expired!");
            console.log(err);
          })
      : verifyOTPSignUp(PhoneNumber, OTP, VerficationID, AppName)
          .then((res) => {
            console.log(res);
            Cookies.set("ClientId", res.ClientId, { expires: 7, secure: true });
            Cookies.set("token", res.token, { expires: 7, secure: true });
            router.push("/user");
            setIsLoading(false);
          })
          .catch((err) => {
            alert("OTP has Expired!");
            console.log(err);
          });
  };

  return (
    <div>
      <div className="flex space-x-2 justify-center items-center mb-5 ">
        <h1 className="text-2xl">Sign in to</h1>
        <h1 className={`text-2xl font-semibold text-my_secondary`}>
          Ignite Auth
        </h1>
      </div>

      {Flag ? (
        <form name="Verify OTP" onSubmit={handleSubmitVerifyOTP}>
          <div className="flex flex-col ">
            <label className={`text-my_light font-normal`}>Enter OTP:</label>
            <input
              className="w-full p-2 border-2 rounded-lg border-gray-200 outline-none hover:border-gray-600 focus:border-green-600"
              onChange={(e) => setOTP(e.target.value)}
              type="text"
              value={OTP}
              placeholder="Enter your OTP"
              required
            />
          </div>

          <button
            className="w-full p-2 mt-4 bg-my_secondary  rounded-lg text-white hover:cursor-pointer shadow-md hover:shadow-lg transition-all ease-in-out active:scale-95 flex items-center justify-center h-10"
            type="submit"
          >
            {IsLoading ? (
              <Lottie className="w-6 h-6 " animationData={animationData} />
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>
      ) : (
        <form name="Send OTP" onSubmit={handleSubmitSendOTP}>
          <div className="flex flex-col justify-center space-y-2">
            <label className={`text-my_light font-normal`}>Phone Number:</label>
            <input
              className="w-full p-2 border-2 rounded-lg border-gray-200 outline-none hover:border-gray-600 focus:border-green-600"
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              pattern="[0-9]{10}"
              value={PhoneNumber}
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 mt-2">
            <label className={`text-my_light font-normal`}>App Name: </label>
            <input
              className="w-full p-2 border-2 rounded-lg border-gray-200 outline-none hover:border-gray-600 focus:border-green-600"
              onChange={(e) => setAppName(e.target.value)}
              type="text"
              value={AppName}
              placeholder="Enter your App Name"
              required
            />
          </div>

          <button
            className="w-full p-2 mt-4 bg-my_secondary  rounded-lg text-white hover:cursor-pointer shadow-md hover:shadow-lg transition-all ease-in-out active:scale-95 flex items-center justify-center h-10"
            type="submit"
          >
            {IsLoading ? (
              <Lottie className="w-6 h-6 " animationData={animationData} />
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
