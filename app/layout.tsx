import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google'; 
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
/**적용하고자 하는 font*/
const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  // subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  title: "Anguk Law Offices",
  description: "a Korean Leading Law Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
