import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ignite Auth",
  description: "Created by Abhinn Vyas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Montserrat" }}
        className={` bg-my_background text-my_primary 
       ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
