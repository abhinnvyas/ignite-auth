import Image from "next/image";
import React from "react";
function Card({ image, heading, paragraph }) {
  return (
    <div>
      <div className="p-6 flex flex-start flex-col">
        <div className="flex items-start justify-start mb-3">
          <Image className="w-20 h-20" src={image} />
        </div>
        <h2 className={`mb-2 text-lg font-bold text-my_primary`}>{heading}</h2>
        <p
          className={`mb-4 text-base text-my_light leading-relaxed font-normal`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Card;
