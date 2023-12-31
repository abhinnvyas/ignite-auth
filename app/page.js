import Section1 from "@/components/LandingPage/Section1";
import Section2 from "@/components/LandingPage/Section2";
import Section3 from "@/components/LandingPage/Section3/Section3";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Section4 from "@/components/LandingPage/Section4/Section4";
import Section5 from "@/components/LandingPage/Section5/Section5";
import Section6 from "@/components/LandingPage/Section6";
import Section7 from "@/components/LandingPage/Section7";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-5">
        <title>
          Ignite Auth: Next-Level Authentication for Your Applications | WhatsApp OTP Verifications |
        </title>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </div>
  );
}
