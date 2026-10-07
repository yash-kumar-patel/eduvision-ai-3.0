import type { Metadata } from "next";
import { Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-gujarati",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduVision AI 3.0 — વિદ્યાર્થી પ્રદર્શન આગાહી",
  description:
    "AI આધારિત વિદ્યાર્થી પ્રદર્શન આગાહી અને વ્યક્તિગત માર્ગદર્શન પ્રણાલી — Science Fair Project 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className={notoSansGujarati.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Gujarati:wght@400;500;600;700;800;900&family=Baloo+2:wght@600;700;800&family=Kumar+One&family=Rasa:wght@400;500;600;700&family=Shrikhand&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-gujarati antialiased bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
