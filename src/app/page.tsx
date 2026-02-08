"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-gray-900">キャリア</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-900 transition">特徴</a>
              <a href="#services" className="text-gray-600 hover:text-blue-900 transition">サービス</a>
              <a href="#results" className="text-gray-600 hover:text-blue-900 transition">実績</a>
              <a href="#contact" className="btn-primary text-white px-6 py-2 rounded-full font-medium">
                無料相談
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              体育会・アスリート専門
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              競技で培った
              <span className="gradient-text">忍耐力</span>を、<br />
              キャリアの<span className="gradient-text">武器</span>に。
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Nキャリアは、体育会系・アスリートの<br className="hidden sm:block" />
              セカンドキャリア・デュアルキャリアを全力でサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                無料キャリア相談を予約
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-300 text-gray-700 hover:border-blue-900 hover:text-blue-900 transition inline-flex items-center justify-center"
              >
                詳しく見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              体育会出身者の<span className="gradient-text">強み</span>
            </h2>
            <p className="text-gray-600 text-lg">あなたが競技で培った経験は、ビジネスでも輝きます</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="bento-card lg:col-span-2 p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">忍耐力・継続力</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    毎日の練習、厳しいトレーニング、試合でのプレッシャー。
                    あなたが乗り越えてきた経験は、ビジネスの世界でも最大の武器になります。
                    企業が最も求める「やり抜く力」を、あなたは既に持っています。
                  </p>
                </div>
              </div>
            </div>

            {/* Regular Card */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">未経験OK求人に強い</h3>
              <p className="text-gray-600">
                ポテンシャル採用を重視する企業との独自ネットワーク。未経験でもあなたの可能性を評価します。
              </p>
            </div>

            {/* Regular Card */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">営業・人材・ITへ</h3>
              <p className="text-gray-600">
                体育会出身者が活躍しやすい業界へ。コミュニケーション力と根性が評価される職種をご紹介。
              </p>
            </div>

            {/* Wide Card */}
            <div className="bento-card lg:col-span-2 p-8 rounded-3xl border border-gray-200 scroll-animate bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">リモートワークで競技継続</h3>
                  <p className="text-blue-100 text-lg">
                    現役を続けながらキャリアも構築。フルリモート・フレックス勤務の求人で、
                    競技とビジネスの両立を実現します。
                  </p>
                </div>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nキャリアの<span className="gradient-text">サポート</span>
            </h2>
            <p className="text-gray-600 text-lg">あなたに合わせたキャリアプランをご提案します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">セカンドキャリア支援</h3>
              <p className="text-gray-600 mb-4">
                引退後のキャリアチェンジを全力でサポート。あなたの競技経験を活かせる職種・企業をマッチングします。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  キャリアカウンセリング
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  履歴書・職務経歴書添削
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  面接対策
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">デュアルキャリア支援</h3>
              <p className="text-gray-600 mb-4">
                競技を続けながらキャリアを構築。リモートワーク・フレックス勤務で両立を実現します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  リモートワーク求人多数
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  スケジュール調整サポート
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  企業との交渉代行
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">未経験から年収UP</h3>
              <p className="text-gray-600 mb-4">
                未経験でもポテンシャルを評価する企業をご紹介。入社後のキャリアアップも見据えたマッチングを行います。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  平均年収UP率 120%
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  研修制度充実企業多数
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  キャリアパス設計
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bento-card p-8 rounded-3xl border border-gray-200 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">体育会専門アドバイザー</h3>
              <p className="text-gray-600 mb-4">
                元アスリートのキャリアアドバイザーが担当。あなたの気持ちを理解した上でサポートします。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  元プロ選手在籍
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  LINEでいつでも相談
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  入社後フォロー
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nキャリアの<span className="text-orange-400">実績</span>
            </h2>
            <p className="text-blue-200 text-lg">多くの体育会出身者のキャリアをサポートしてきました</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">500+</div>
              <div className="text-blue-200">転職成功者数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">98%</div>
              <div className="text-blue-200">満足度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">120%</div>
              <div className="text-blue-200">平均年収UP率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">200+</div>
              <div className="text-blue-200">提携企業数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              体育会出身者が<span className="gradient-text">活躍</span>する業界
            </h2>
            <p className="text-gray-600 text-lg">あなたの強みを最大限に活かせるフィールドへ</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate">
            <div className="text-center p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">営業職</h3>
              <p className="text-gray-600 text-sm">コミュニケーション力と粘り強さが活きる</p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">人材業界</h3>
              <p className="text-gray-600 text-sm">人との繋がりを大切にできる方に最適</p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IT業界</h3>
              <p className="text-gray-600 text-sm">成長意欲とチームワークが評価される</p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">コンサル</h3>
              <p className="text-gray-600 text-sm">論理的思考と目標達成力が活きる</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bento-card p-8 sm:p-12 rounded-3xl border border-gray-200 text-center scroll-animate">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              完全無料
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              まずは無料相談から
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              あなたの競技経験やキャリアの悩みをお聞かせください。<br />
              元アスリートのキャリアアドバイザーが丁寧にヒアリングいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                無料相談を予約する
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full font-bold text-lg bg-green-500 text-white hover:bg-green-600 transition inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
                </svg>
                LINEで相談
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              * 相談は完全無料です。転職を強制することは一切ありません。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl">キャリア</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition">会社概要</a>
              <a href="#" className="hover:text-white transition">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition">利用規約</a>
              <a href="#" className="hover:text-white transition">お問い合わせ</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Nキャリア. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
