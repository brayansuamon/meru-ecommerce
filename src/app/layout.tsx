import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  weight: ["400","600","700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Ecommerce Meru",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} h-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
