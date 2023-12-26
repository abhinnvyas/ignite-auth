import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  const ishidden = true;
  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between p-2   shadow-md bg-my_background`}
    >
      <div className="flex items-center justify-center space-x-1">
        <Link className=" pt-2 pl-2" href="/">
          <Image src={Logo} width={150} alt="logo" />
        </Link>
        {/* <h1 className="font-bold">Ignite Auth</h1> */}
      </div>

      <div className="hidden lg:block text-sm font-semibold ">
        <Link href="/">
          <h1 className={`text-my_light border-b-2 border-gray-800`}>Home</h1>
        </Link>
      </div>

      <div className="hidden lg:flex space-x-4 items-center text-sm p-2 ">
        <Link href={"/auth/login"}>
          <button
            className={`text-my_primary g-gray-300 px-4 py-1 rounded-sm  hover:bg-gray-400 transition-all ease-in-out hover:shadow-md`}
          >
            Login
          </button>
        </Link>

        <Link href={"/auth/login"}>
          <button
            className={`bg-my_secondary text-gray-200 hover:text-white px-4 py-1 rounded-sm hover:shadow-md  transition-all ease-in-out`}
          >
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
