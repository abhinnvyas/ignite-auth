"use client";
import React, { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  CheckIcon,
  NoSymbolIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { buyCredits } from "@/app/api/buyCredits";
import Cookies from "js-cookie";
import Logo from "@/public/Logo.png";
import Script from "next/script";
import { useRouter } from "next/navigation";

function Card() {
  const [Credits, setCredits] = useState("1000");
  const [OrderID, setOrderID] = useState("");
  const [Amount, setAmount] = useState("100");
  const [Step, setStep] = useState(1000);
  const router = useRouter();

  useEffect(() => {
    const amount = Credits * 0.1;
    setAmount(amount);
  }, [Credits]);

  const onClick = (e) => {
    e.preventDefault();
    const clientid = Cookies.get("ClientId");
    const token = Cookies.get("token");
    buyCredits(clientid, token, Credits)
      .then((res) => {
        setOrderID(res.orderId);
        Layer.checkout(
          {
            token: res.paymentToken,
            accesskey: "dee32b80-9524-11ee-a139-81627df0a68b",
            theme: {
              color: "#2F855A",
              error_color: "#ff2b2b",
            },
          },
          function (response) {
            if (response.status == "captured") {
              // response.payment_token_id
              // response.payment_id
              router.push("/user/activeplan");
            } else if (response.status == "created") {
            } else if (response.status == "pending") {
            } else if (response.status == "failed") {
              router.push("/user/buycredits");
            } else if (response.status == "cancelled") {
              router.push("/user/buycredits");
            }
          },
          function (err) {
            //integration errors
            console.log(err);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const increment = () => {
    setCredits(parseInt(Credits) + Step);
  };
  const decrement = () => {
    if (Credits != 1000) setCredits(parseInt(Credits) - Step);
  };

  return (
    <div className="max-w-lg flex flex-col  items-start justify-center">
      <Script src="https://sandbox-payments.open.money/layer" />
      <h1 className="text-lg mb-2">How many credits do you want?*</h1>
      <div className="flex w-full space-x-2">
        <input
          disabled
          type="number"
          className="w-full p-2 border-2  rounded-lg border-gray-200 outline-none hover:border-gray-600 focus:border-green-600 cursor-not-allowed"
          onChange={(e) => setCredits(e.target.value)}
          placeholder=""
          value={Credits}
        />
        <div className="w-fit flex space-x-1">
          <div
            onClick={increment}
            className="p-2 rounded-lg bg-my_secondary hover:bg-my_secondary_dark hover:cursor-pointer"
          >
            <PlusIcon className="w-6 h-6  text-white" />
          </div>
          <div
            onClick={decrement}
            className="p-2 rounded-lg bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          >
            <MinusIcon className="w-6 h-6  text-white" />
          </div>
        </div>
      </div>
      <button
        onClick={onClick}
        className="w-full bg-my_secondary p-2 rounded-lg text-xl font-semibold text-white mt-2 hover:bg-my_secondary_dark transition-all ease-in-out"
      >
        Pay {Amount}
      </button>
    </div>
  );
}

export default Card;
