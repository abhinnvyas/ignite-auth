"use client";
import React, { useState } from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";
import Image from "next/image";
import Logo from "@/public/igniteauth_logo.png";
import {
  RectangleGroupIcon,
  ViewfinderCircleIcon,
  ShoppingCartIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

function Sidebar({ Active }) {
  const [selected, setSelected] = useState({});

  return (
    <div
      className={`${textPrimary} ${background} shadow-2xl p-2 sticky left-0 max-w-xs h-screen`}
    >
      <div className="">
        <div className="flex items-center space-x-2 text-xl   px-4  w-full py-2">
          <Image
            className="rounded-lg"
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className="font-semibold">UPI Gateway</h1>
        </div>
      </div>

      <div className={`mt-5`}>
        <div className="flex flex-col space-y-2 justify-center">
          <MenuItem
            ActiveTab={Active}
            CurrentTab={"dashboard"}
            Icon={RectangleGroupIcon}
            Text="Dashboard"
            RedirectLink="/user"
          />
          <MenuItem
            ActiveTab={Active}
            CurrentTab={"transaction"}
            Icon={ViewfinderCircleIcon}
            Text="Transaction"
            RedirectLink="/user/transaction"
          />
          <MenuItem
            ActiveTab={Active}
            CurrentTab={"buycredits"}
            Icon={ShoppingCartIcon}
            Text="Buy Credits"
            RedirectLink="/user/buycredits"
          />
          <MenuItem
            ActiveTab={Active}
            CurrentTab={"activeplan"}
            Icon={PaperClipIcon}
            Text="Active Plan"
            RedirectLink="/user/activeplan"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
