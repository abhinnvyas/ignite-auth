import React from "react";
import Logo from "@/public/igniteauth_logo.png";
import Image from "next/image";

function Section7() {
  return (
    <footer
      className={`text-my_light p-4 transition-all duration-500 ease-in-out transform bg-gray-100`}
    >
      <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto items-start md:flex-row md:flex-no-wrap py-5 px-4 sm:px-8 md:px-4 xl:px-0 md:grid gap-8 md:grid-cols-3">
        <div className="flex flex-col mx-auto md:mx-0 text-left col-span-1">
          <a
            className="w-100 text-xl font-semibold  tracking-widest text-primary rounded-lg  focus:outline-none focus:shadow-outline"
            href=""
          >
            <div className="flex justify-start items-center text-left space-x-2 ">
              <Image src={Logo} width={40} height={40} alt="logo" />
              <h1 className="font-bold">Ignite Auth</h1>
            </div>
          </a>
          <p
            className={`w-100 mt-5 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2 mr-8 `}
          >
            Accept payments from your customers through our easy-to-use Dynamic
            QR code service, with 0% transaction fees.
          </p>
        </div>
        <div className="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:mt-0 lg:grid gap-8 grid-cols-1 md:grid-cols-2 col-span-2">
          <div className="w-full">
            <h1 className="mb-3 text-base font-medium text-black">
              Contact Us
            </h1>
            <ul className="mb-10 space-y-1 list-none">
              <li>
                <p
                  className={`text-base text-gray-500 transition-all duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2 mr-8`}
                >
                  Feelfree to get in touch with us via send us a message
                </p>
              </li>
              <li>
                <a
                  className={`font-medium text-left text-md text-primary hover:text-primary_dark hover:underline text-my_secondary`}
                  href=""
                >
                  support@upigateway.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="mb-3 text-base font-medium text-black">
              Subscribe to our Newsletter:
            </h1>
            <ul className="mb-10 space-y-1 list-none">
              <li>
                <div className="col-span-2">
                  <form className="w-100" action="POST">
                    <div className="flex flex-col">
                      <input
                        className="py-2 px-2 rounded border border-gray-300 placeholder-gray-400 focus:ring-1 focus:ring-primary_dark focus:border-primary_dark"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        required=""
                        data-parsley-required-message="Please enter your email address"
                        data-parsley-type-message="Please enter a valid email address"
                      />
                      <button
                        className={`mt-4 px-8 py-2  border bg-my_secondary text-white font-medium rounded modal-open`}
                        type="submit"
                        data-toggle="modal"
                        data-target="prepaidPlan"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-4 rounded-b-lg bg-gray-100">
        <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto items-start md:flex-row md:flex-no-wrap py-5 px-4 sm:px-8 md:px-4 xl:px-0">
          <p className="text-xs text-start text-black sm:text-left">
            *UPIGateway provides Dynamic QR Generating service. UPIGateway does
            not offer payment gateway service, nor does it provide UPI ID and
            UPI Merchant account. Please read our policy and T&C before using
            our services.
          </p>
        </div>
      </div>
      <div className="w-full rounded-b-lg bg-gray-200">
        <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto items-start md:flex-row md:flex-no-wrap py-5 px-4 sm:px-8 md:px-4 lg:px-5">
          <p className="text-sm text-start  text-black sm:text-left">
            © UPIGateway 2020-23, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Section7;
