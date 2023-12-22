import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ image, heading, Icon, linktext, link }) {
  return (
    <Link href={link}>
      <div className="flex items-center justify-center space-x-4 border-2 rounded-lg p-4 w-fit ">
        <div>
          <Image className="w-16 h-16 rounded-full" src={image} />
        </div>
        <div className="flex-col justify-center items-center ">
          <div className="text-lg">{heading}</div>
          <div className="flex items-center  space-x-1 ">
            <div>
              <Icon className="w-6 h-6 text-my_secondary" />
            </div>
            <p className="hover:text-my_secondary text-my_secondary_dark">
              {linktext}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
