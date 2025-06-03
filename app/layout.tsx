import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { Analytics } from "@vercel/analytics/next"


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "LinkedHire - Find Your Dream Job",
  description: "LinkedHire helps professionals discover job opportunities from LinkedIn. Search, filter, and apply for jobs effortlessly.",
  keywords: "job search, LinkedIn jobs, career, job opportunities, apply for jobs, remote work, tech jobs, remote jobs, remotive jobs, linkedin jobs, linkedin job search, linkedin jobs search, linkedin job postings, linkedin job postings search, linkedin job postings search, linkedin job postings search",
  authors: [{ name: "Saad", url: "https://saadksioui.pro/" }],
  openGraph: {
    title: "LinkedHire - Find Your Dream Job",
    description: "Discover and apply for jobs seamlessly with LinkedHire. Powered by LinkedIn API.",
    url: "https://linkedhire.vercel.app/",
    siteName: "LinkedHire",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased h-full w-full`}>
        <Provider>
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}