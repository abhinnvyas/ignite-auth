import Section1 from "@/components/LandingPage/Section1";
import Section2 from "@/components/LandingPage/Section2";
import Section3 from "@/components/LandingPage/Section3/Section3";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="m-5">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}
