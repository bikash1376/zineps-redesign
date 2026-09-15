import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zineps — The intelligent layer for global logistics",
  description:
    "One dashboard and API for shipping. Access competitive rates through our logistics partner network, your own carrier contracts, or both.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
