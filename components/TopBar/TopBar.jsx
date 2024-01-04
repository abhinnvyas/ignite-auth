import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
function TopBar() {
  return (
    <div className="flex justify-end  w-full items-center py-2 border-b">
      <div className="self-end">
        <UserCircleIcon className="h-12 w-12  text-my_secondary_dark hover:text-my_secondary transition-all ease-in-out hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default TopBar;
