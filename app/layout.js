import { Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="bazardor"
      data-scroll-behavior="smooth"
      className="scroll-smooth"
    >
      <body
        className={`${hindSiliguri.className} min-h-screen bg-base-200 text-base-content antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}