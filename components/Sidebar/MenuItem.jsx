import React, { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

function MenuItem({
  isCollapsed,
  ActiveTab,
  CurrentTab,
  Icon,
  Text,
  RedirectLink,
}) {
  return (
    <Link href={RedirectLink}>
      <div
        className={`flex ${
          ActiveTab == CurrentTab
            ? `text-my_secondary bg-green-100`
            : `text-my_primary hover:bg-gray-100`
        }  px-4 items-center justify-left cursor-pointer space-x-4  p-2 rounded-lg transition-all ease-in-out`}
      >
        <Icon className={`h-6 w-6 `} />
        <h1 className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
          {Text}
        </h1>
      </div>
    </Link>
  );
}

export default MenuItem;
