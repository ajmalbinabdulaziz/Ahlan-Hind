import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import ToasterProvider from "@/components/ToasterProvider";



const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahlan Hind",
  description: "A tourism based web app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en" className="relative">
        <body 
        // className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}
        >
          <ToasterProvider />
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
