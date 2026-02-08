import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nキャリア | 体育会・アスリートの就職・転職支援",
  description: "体育会系・アスリートのセカンドキャリア・デュアルキャリアを支援。未経験から年収UPを実現。リモートワークで競技継続も可能。",
  keywords: "体育会 就職, アスリート 転職, セカンドキャリア, デュアルキャリア, 未経験 年収UP",
  openGraph: {
    title: "Nキャリア | 体育会・アスリートの就職・転職支援",
    description: "あなたの競技経験を、次のキャリアの武器に。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
