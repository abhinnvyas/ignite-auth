import React from "react";
import Card from "./Card";
import PostmanLogo from "@/public/Postman.png";
import { EyeIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";
import ReactNativeLogo from "@/public/reactNativeLogo.png";
function Section2() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-2 mb-10 mt-4 w-full justify-evenly">
      <div className="flex-1">
        <Card
          image={PostmanLogo}
          heading={"Postman Collection"}
          Icon={EyeIcon}
          linktext={"View Collection"}
          link={
            "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
          }
        />
      </div>
      <div className="flex-1">
        <Card
          image={ReactNativeLogo}
          heading={"React Native Sample Code"}
          Icon={InboxArrowDownIcon}
          linktext={"Download Code"}
          link={
            "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
          }
        />
      </div>
      <div className="flex-1">
        <Card
          image={PostmanLogo}
          heading={"NodeJS Sample Code"}
          Icon={InboxArrowDownIcon}
          linktext={"Downoad Code"}
          link={
            "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
          }
        />
      </div>
    </div>
  );
}

export default Section2;
