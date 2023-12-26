import React from "react";
import Card from "./Card";

function Section2() {
  return (
    <div className="border-2 p-4 rounded-lg mb-4">
      <h1 className="text-center border-2 py-4 rounded-lg text-xl font-semibold">
        Monthly Plan
      </h1>
      <div className=" flex justify-evenly items-center space-x-4 mt-4 ">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section2;
