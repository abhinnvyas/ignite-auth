import React from "react";
import Lottie from "lottie-react";
import animationData from "@/components/Loading.jsx"; // Replace with your Lottie animation file

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={50} width={50} />;
}

export default Loading;
