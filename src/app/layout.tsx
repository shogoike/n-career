import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

/**
 * フォント設計の理由
 *
 * 【Noto Sans JP - メインフォント】
 * - ゴシック体を採用：体育会・アスリート向けの「力強さ」「行動力」「信頼感」を表現
 * - 明朝体を使わない理由：高級感・落ち着きより、アクティブ・前向きな印象を優先
 * - Noto Sans JPを選んだ理由：
 *   1. Google Fontsで読み込み速度が速い（LCPに有利）
 *   2. 日本語の可読性が高く、長文でも読みやすい
 *   3. ウェイトが豊富（400-900）で見出し〜本文まで一貫性を保てる
 *   4. 游ゴシックより太めで力強い印象
 *
 * 【Inter - 英数字用サブフォント】
 * - 数字の視認性が高く、実績（92%、500+など）を際立たせる
 * - モダンでテック感があり、IT・営業職への転職を訴求
 * - Poppinsより落ち着きがあり、信頼感を損なわない
 *
 * 【フォントウェイト設計】
 * - 900 (Black): h1見出し → 力強さ、目標達成、勝利のイメージ
 * - 700 (Bold): h2,h3見出し、強調 → 視認性、メリハリ
 * - 500 (Medium): ボタン、ラベル → 適度な強調
 * - 400 (Regular): 本文 → 可読性優先
 */

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap", // パフォーマンス：FOUTを許容してFOITを防ぐ
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
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
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
