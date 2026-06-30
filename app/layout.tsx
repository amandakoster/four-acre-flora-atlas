import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import "@/styles/globals.css";
import "@/styles/theme.css";
import "@/styles/layout.css";

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

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

async function RootLayout({ children }: RootLayoutProps) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const initialEmail = user?.email ?? null;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#0b0f0d] text-stone-100">
        <div className="fixed inset-0 -z-20 bg-[#0b0f0d]" />

        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-55"
          style={{
            backgroundImage: "url('/backgrounds/bg-botanical-color.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />

        <div className="pointer-events-none fixed inset-0 -z-10 bg-black/10" />

        <div className="relative flex min-h-screen flex-col">
          <Header initialEmail={initialEmail} />

          <main className="layout-page relative z-10 flex-1 pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
