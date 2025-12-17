import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const lusitanaFont = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lusitana",
});
