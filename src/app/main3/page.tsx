"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackCTAClick } from "../components/Analytics";

// 職種オプション
const JOB_TYPES = [
  "職種を選択",
  "営業職",
  "ITエンジニア",
  "マーケティング",
  "人事・総務",
  "企画・経営",
  "販売・サービス",
  "その他",
];

// エリアオプション
const AREAS = [
  "エリアを選択",
  "東京都",
  "神奈川県",
  "大阪府",
  "愛知県",
  "福岡県",
  "リモートワーク可",
  "全国",
];

// クイックタグ
const QUICK_TAGS = [
  "未経験OK",
  "年収500万以上",
  "正社員",
  "リモート可",
  "体育会優遇",
];

export default function Main3Page() {
  const [jobType, setJobType] = useState("");
  const [area, setArea] = useState("");
  const [keyword, setKeyword] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSearch = () => {
    trackCTAClick("search_button_main3");
    // LINE相談へ誘導
    window.open("https://lin.ee/z5If9Wl", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#014421] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-gray-800">キャリア</span>
          </Link>
          <a
            href="https://lin.ee/z5If9Wl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("line_cta_header_main3")}
            className="bg-[#06c755] text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-[#05b34c] transition"
          >
            無料相談
          </a>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-10 right-10 opacity-20">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <path d="M0 30 Q60 0 120 30" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
            <path d="M100 20 L120 30 L100 25" fill="#0ea5e9"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
          {/* メインキャッチ */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 leading-tight mb-4">
              あなたに<span className="text-[#014421]">ピッタリの仕事</span>が
              <br />
              きっと見つかる!
            </h1>
            <p className="text-gray-600 text-lg">
              体育会・アスリート専門の求人から理想の仕事を探そう
            </p>
          </div>

          {/* 検索フォーム */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014421]/30 focus:border-[#014421]"
              >
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type === "職種を選択" ? "" : type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014421]/30 focus:border-[#014421]"
              >
                {AREAS.map((a) => (
                  <option key={a} value={a === "エリアを選択" ? "" : a}>
                    {a}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="キーワードを入力"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014421]/30 focus:border-[#014421]"
              />
              <button
                onClick={handleSearch}
                className="w-full bg-[#014421] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#016332] transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                検索
              </button>
            </div>
            {/* クイックタグ */}
            <div className="flex flex-wrap gap-2">
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedTags.includes(tag)
                      ? "bg-[#014421] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* イラスト画像 */}
          <div className="relative h-[300px] sm:h-[400px] mx-auto max-w-4xl">
            <Image
              src="/images/913f243f-4f2a-433f-aaaf-67a71a6525cb.png"
              alt="様々な職種で活躍する人々"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 特徴1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">豊富な求人情報</h3>
              <p className="text-gray-600 text-sm">体育会・アスリート歓迎の<br />厳選求人を毎日更新</p>
            </div>

            {/* 特徴2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">簡単応募</h3>
              <p className="text-gray-600 text-sm">LINEでサクッと応募<br />書類作成もサポート</p>
            </div>

            {/* 特徴3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">転職サポート</h3>
              <p className="text-gray-600 text-sm">元アスリートのアドバイザーが<br />あなたの転職をサポート</p>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-12 px-4 bg-[#014421]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            選ばれる理由
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">92%</div>
              <div className="text-green-200 text-sm">転職成功率</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">500+</div>
              <div className="text-green-200 text-sm">支援実績</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">98%</div>
              <div className="text-green-200 text-sm">満足度</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">0円</div>
              <div className="text-green-200 text-sm">完全無料</div>
            </div>
          </div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            こんな方におすすめ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "競技を続けながら働きたい",
              "未経験だけど正社員になりたい",
              "体育会の経験を活かしたい",
              "年収アップを実現したい",
              "リモートワークで働きたい",
              "自分に合う仕事がわからない",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-[#014421] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#014421] to-[#016332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずは気軽に相談してみませんか?
          </h2>
          <p className="text-green-200 mb-8">
            LINEで簡単に相談できます。もちろん無料です。
          </p>
          <a
            href="https://lin.ee/z5If9Wl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("line_cta_main3")}
            className="inline-flex items-center gap-3 bg-[#06c755] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#05b34c] transition shadow-lg hover:shadow-xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
            </svg>
            LINEで無料相談
          </a>
          <p className="text-green-300 text-sm mt-4">30秒で登録完了</p>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-white font-bold">キャリア</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/company" className="hover:text-white transition">会社概要</Link>
              <Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-white transition">利用規約</Link>
            </div>
          </div>
          <div className="text-center text-sm mt-6">
            &copy; 2024 Nキャリア All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
