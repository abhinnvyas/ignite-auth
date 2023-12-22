import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/Lottie Files/Loading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return;
  <div className="w-100 h-100">
    <Lottie animationData={animationData} />;
  </div>;
}

export default Loading;
