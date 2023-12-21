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
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

function Sidebar({ Active }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`text-my_primary bg-my_background shadow-2xl p-2 sticky left-0  max-w-xs h-screen transition-all ease-in-out`}
    >
      <div
        className={`flex items-center ${isCollapsed ? "" : "space-x-4 p-2"}`}
      >
        <div
          className={`flex items-center space-x-2 text-lg w-full ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <Image
            className={`rounded-lg`}
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className={`font-semibold ${isCollapsed ? "hidden" : "block"}`}>
            UPI Gateway
          </h1>
        </div>
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-all ease-in-out"
        >
          {isCollapsed ? (
            <div className="w-10 h-10 ">
              <Image className="" src={Logo} alt="logo" />
            </div>
          ) : (
            <ArrowLeftIcon className="w-6 h-6" />
          )}
        </div>
      </div>

      <div className={`mt-5`}>
        <div className="flex flex-col space-y-2 justify-center ">
          <MenuItem
            isCollapsed={isCollapsed}
            ActiveTab={Active}
            CurrentTab={"dashboard"}
            Icon={RectangleGroupIcon}
            Text="Dashboard"
            RedirectLink="/user"
          />
          <MenuItem
            isCollapsed={isCollapsed}
            ActiveTab={Active}
            CurrentTab={"transaction"}
            Icon={ViewfinderCircleIcon}
            Text="Transaction"
            RedirectLink="/user/transaction"
          />
          <MenuItem
            isCollapsed={isCollapsed}
            ActiveTab={Active}
            CurrentTab={"buycredits"}
            Icon={ShoppingCartIcon}
            Text="Buy Credits"
            RedirectLink="/user/buycredits"
          />
          <MenuItem
            isCollapsed={isCollapsed}
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
