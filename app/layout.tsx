import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";
import ResumeDownload from "@/components/ResumeDownload";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anjali Vashisth | Data Engineer",
  description:
    "Data engineering portfolio for Anjali Vashisth: pipelines, automation, metadata tools, and reliable analytics systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#080b0f] text-stone-100 antialiased`}>
        <div>
          <Sidebar />
          <main className="min-h-screen md:pl-72">
            {children}
            <ResumeDownload />
            <ChatWidget />
          </main>
        </div>
      </body>
    </html>
  );
}
