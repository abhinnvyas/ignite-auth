"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Logo2 from "@/public/Logo2.png";
import {
  RectangleGroupIcon,
  ViewfinderCircleIcon,
  ShoppingCartIcon,
  PaperClipIcon,
  ChevronLeftIcon,
  CommandLineIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import Link from "next/link";

function Sidebar({ Active }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarStyles = {
    maxWidth: isCollapsed ? "60px" : "300px",
    transition: "max-width 0.3s ease-in-out",
  };

  return (
    <div
      style={Object.assign({}, sidebarStyles, {
        textMyPrimary: true,
        bgMyBackground: true,
        shadow2xl: true,
        p2: true,
        sticky: true,
        left0: true,
        maxWs: true,
        hScreen: true,
        transitionAll: true,
        easeInOut: true,
      })}
      className={`border-r ${
        isCollapsed ? "" : "px-2"
      } transition-all ease-in-out `}
    >
      <div
        className={`flex items-center ${isCollapsed ? "" : "space-x-10 p-2"}`}
      >
        <div
          className={`flex items-center space-x-2 text-lg w-full ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <Link href="/user">
            <Image className={``} src={Logo} width={150} alt="logo" />
          </Link>
        </div>
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-all ease-in-out hover:text-my_light"
        >
          {isCollapsed ? (
            <div className="w-10 h-10 ">
              <Image
                className="max-w-full max-h-full object-contain"
                src={Logo2}
                alt="logo"
              />
            </div>
          ) : (
            <ChevronLeftIcon className=" text-my_light w-6 h-6" />
          )}
        </div>
      </div>

      <div className={`mt-5`}>
        <div className="flex flex-col space-y-8 justify-center ">
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
          <MenuItem
            isCollapsed={isCollapsed}
            ActiveTab={Active}
            CurrentTab={"api_credentials"}
            Icon={CommandLineIcon}
            Text="API Keys"
            RedirectLink="/user/api_credentials"
          />
          <MenuItem
            isCollapsed={isCollapsed}
            ActiveTab={Active}
            CurrentTab={"api_documentation"}
            Icon={CodeBracketSquareIcon}
            Text="API Documentation"
            RedirectLink="/user/api_documentation"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
