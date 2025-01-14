import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";
import Cursor from "@/components/shared/Cursor";
import ProgressToast from "@/components/shared/ProgressToast";
import SmoothScrolling from "@/components/shared/SmoothScroll";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const chillax = localFont({
  src: [
    {
      path: "./fonts/Chillax-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Chillax-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Chillax-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
});

const sfSans = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sf-sans",
});

const nunita = localFont({
  src: [
    {
      path: "./fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-nunita",
});

export const metadata: Metadata = {
  title: "Nallasoft",
  description: "Nallasoft is a software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chillax.variable} ${sfSans.variable} ${nunita.variable} relative`}
      >
        <SmoothScrolling>
          <div className="relative font-sf-sans">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScrolling>
        <Cursor />
        <ProgressToast />
      </body>
    </html>
  );
}
