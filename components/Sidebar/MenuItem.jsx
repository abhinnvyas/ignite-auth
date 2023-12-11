import React, { useEffect } from "react";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

function MenuItem({ ActiveTab, CurrentTab, Icon, Text, RedirectLink }) {
  return (
    <Link href={RedirectLink}>
      <div
        className={`flex ${
          ActiveTab == CurrentTab
            ? `${textSecondary} bg-green-100`
            : `${textPrimary} hover:bg-gray-100`
        }  px-4 items-center justify-left cursor-pointer space-x-4  p-2 rounded-lg transition-all ease-in-out`}
      >
        <Icon class={`h-6 w-6 `} />
        <h1 className="text-sm">{Text}</h1>
      </div>
    </Link>
  );
}

export default MenuItem;
