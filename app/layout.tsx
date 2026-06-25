import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Four-Acre Flora",
  description: "A local plant observation atlas.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#0b0f0d] text-stone-100">
        <div className="relative flex min-h-screen flex-col">
          <div
            className="pointer-events-none fixed inset-0 -z-10 opacity-55"
            style={{
              backgroundImage: "url('/backgrounds/bg-botanical-dark.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 8%",
              backgroundSize: "120%",
            }}
          />

          <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-black/5 via-transparent to-black/10" />

          <Header />

          <main className="relative z-10 flex-1 pt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
