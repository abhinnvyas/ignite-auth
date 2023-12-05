import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPI Gateway",
  description: "Created by Abhinn Vyas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-white text-black 
       ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
