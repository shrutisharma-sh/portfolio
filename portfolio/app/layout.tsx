import type { Metadata } from "next";
import { JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import "./collage-elements.css";
import Navbar from "@/components/Navbar";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Shruti Sharma | Backend & Cloud",
  description: "Portfolio of Shruti Sharma, backend and cloud enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${hand.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}