import React from "react";
import Card from "./Card";
import PostmanLogo from "@/public/Postman.png";
import { EyeIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";

function Section2() {
  return (
    <div>
      <Card
        image={PostmanLogo}
        heading={"Postman Collection"}
        Icon={EyeIcon}
        linktext={"View Collection"}
        link={
          "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
        }
      />
      <Card
        image={PostmanLogo}
        heading={"Postman Collection"}
        Icon={InboxArrowDownIcon}
        linktext={"Download Code"}
        link={
          "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
        }
      />
      <Card
        image={PostmanLogo}
        heading={"Postman Collection"}
        Icon={InboxArrowDownIcon}
        linktext={"Downoad Code"}
        link={
          "https://documenter.getpostman.com/view/26156306/2s9YeN39Gr#e619855a-2e3f-434a-b5f4-634653cd81f9"
        }
      />
    </div>
  );
}

export default Section2;
