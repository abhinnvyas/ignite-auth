"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageStack = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative  h-[500px] flex items-center justify-center transition-all ease-in-out duration-700">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute  transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            border:"1px solid #2F855A",
            padding:"10px",
            width: "150%",
            height: "100%",
            objectFit: "contain",
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default ImageStack;
