import { Inter } from "next/font/google";
import "./globals.css";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPI Gateway",
  description: "Created by Abhinn Vyas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Lato" }}
        className={` bg-my_background text-my_primary 
       ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
