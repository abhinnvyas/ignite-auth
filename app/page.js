import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="m-5">
        <div className="max-w-screen-xl flex items-center mx-auto flex-col lg:flex-row pt-4 pb-20 px-4 sm:px-8 md:px-4 xl:px-0">
          <div className="flex flex-col justify-center text-left space-y-3 lg:max-w-md">
            <div className="">
              <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal font-semibold">
                Accept payments
              </h1>
              <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal font-semibold">
                Directly to your
              </h1>
              <h1 className="text-3xl lg:text-4xl leading-normal lg:leading-normal font-semibold">
                Account at
              </h1>
            </div>
            <h1 className="mt-2 lg:mt-4 text-3xl lg:text-4xl font-semibold text-blue-600 w-fit transition-all ease-in-out">
              0% Transaction Fee
            </h1>
            <p className="text-base leading-relaxed md:text:2xl text-gray-900">
              Revolutionize Your Payment Process with Dynamic QR Codes Service.
            </p>
            <p className="leading-relaxed text-gray-800 text-xs sm:text-xs text-left">
              *UPIGateway provides Dynamic QR Generating service. UPIGateway
              does not provide payment gateway service.
            </p>
            <a
              className="text-left mb-4 sm:mb-6 md:mb-8 font-bold text-black border-b-2 w-fit border-black"
              href=""
            >
              Start Accepting Payments
            </a>
          </div>
          <div className="border flex flex-1 mt-10 p-3">
            <h1>Add your Image here</h1>
            <Image
              className=""
              src=""
              width={100}
              height={100}
              objectFit="cover"
              alt="Add your Image here"
            ></Image>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-4 xl:px-0">
          <div className="flex flex-col items-center">
            <h1 className="mb-3 font-bold text-left text-base text-primary text-blue-600">
              How it works
            </h1>
            <h1 className="font-bold text-3xl lg:text-4xl text-center ">
              How does UPIGateway Dynamic QR work?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
