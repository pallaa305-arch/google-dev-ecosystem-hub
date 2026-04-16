import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DevConsole } from "@/components/DevConsole";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Dev Ecosystem Hub | Build with Google's Best Tools",
  description: "Unified workspace to build apps, prototypes, and digital products using Google AI, Firebase, and developer tools.",
  keywords: "Google AI, Firebase, Gemini, App Builder, No-Code, Developer Tools, SaaS Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <DevConsole />
      </body>
    </html>
  );
}