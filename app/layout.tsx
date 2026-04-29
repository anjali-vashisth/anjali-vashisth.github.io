import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anjali Vashisth | Portfolio",
  description: "Professional portfolio showcasing achievements, research, and creative works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-primary text-light`}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            {children}
            <ChatWidget />
          </main>
        </div>
      </body>
    </html>
  );
}
