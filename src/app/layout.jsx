import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmtech",
  description: "Software Development",
  icons: {
    icon: [
      {
        url: "/fav.png",
        type: "image/png",
      },
    ],
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="shortcut icon" href="/fav.png" type="image/png" />
        <link rel="apple-touch-icon" href="/fav.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}