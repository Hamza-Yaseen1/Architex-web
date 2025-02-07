import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Components/footer";
import Header from "./Components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Architex-web",
  description: "Explore the best land deals. Secure your future with prime land investments!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

        <html lang="en">
          <body         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
    
            <Header/>

{children}
<Footer/>
          </body>
        </html>
  
  );
}
