import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/components/Chatbot/Chatbot";

export const metadata: Metadata = {
  title: "Descomplica Auto",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#FBF2E7]">
        {children}
      </body>
      <Chatbot/>
    </html>
  );
}
