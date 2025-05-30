import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "LinkedHire - Find Your Dream Job",
  description: "LinkedHire helps professionals discover job opportunities from LinkedIn. Search, filter, and apply for jobs effortlessly.",
  keywords: "job search, LinkedIn jobs, career, job opportunities, apply for jobs, remote work, tech jobs",
  authors: [{ name: "Saad", url: "https://saadksioui.pro/" }],
  openGraph: {
    title: "LinkedHire - Find Your Dream Job",
    description: "Discover and apply for jobs seamlessly with LinkedHire. Powered by LinkedIn API.",
    url: "https://linkedhire.com",
    siteName: "LinkedHire",
    images: [
      {
        url: "https://linkedhire.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LinkedHire Job Search Platform",
      },
    ],
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
      </body>
    </html>
  );
}