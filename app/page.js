"use client";
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
import Section4 from "@/components/LandingPage/Section4/Section4";
import Section5 from "@/components/LandingPage/Section5/Section5";
import Section6 from "@/components/LandingPage/Section6";
import Section7 from "@/components/LandingPage/Section7";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      WebFontLoader.load({
        google: {
          families: ["Lato"],
        },
      });
    }
  }, []);
  return (
    <div style={{ fontFamily: "Lato" }}>
      <Navbar />
      <div className="m-5">
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
