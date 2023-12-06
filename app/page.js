import Section1 from "@/components/LandingPage/Section1";
import Section2 from "@/components/LandingPage/Section2";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="m-5">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}
