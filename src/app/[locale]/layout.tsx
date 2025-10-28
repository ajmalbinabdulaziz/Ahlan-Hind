import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import ToasterProvider from "@/components/ToasterProvider";
import NewsLetter from "@/sections/NewsLetter";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getMessages } from "next-intl/server";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahlan Hind",
  description: "A tourism based web app",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  const messages = await getMessages()

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (

    <ClerkProvider>
      <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="relative">
        <body 
        // className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}
        >
          <NextIntlClientProvider messages={messages}>
            <ToasterProvider />
            <Header />
              {/* <LocaleSwitcher /> */}
              {children}
              <div className="md:container mb-16 absolute bottom-[350px] md:bottom-56 inset-s-10 inset-e-10">
                  <NewsLetter />
                </div>

            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
