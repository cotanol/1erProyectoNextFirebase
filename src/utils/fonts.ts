import { Anton, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});
