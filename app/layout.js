import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Header/Header/Navbar";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hotel.booking",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-400 text-slate-700`}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
