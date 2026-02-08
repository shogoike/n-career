"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
              <a href="#services" className="text-gray-600 hover:text-blue-900 transition">サービス</a>
              <a href="#voices" className="text-gray-600 hover:text-blue-900 transition">体験談</a>
              <a href="#flow" className="text-gray-600 hover:text-blue-900 transition">ご利用の流れ</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-900 transition">よくある質問</a>
              <a
                href="https://lin.ee/z5If9Wl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-2 rounded-full font-medium"
              >
                無料相談
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== A. ファーストビュー：感情→即CTA ===== */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              体育会・アスリート専門の転職支援
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              書類作成、面接対策、条件交渉——<br />
              <span className="gradient-text">全部まるっと無料</span>でサポート。
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              競技に打ち込んできたあなたの強みを、<br className="hidden sm:block" />
              営業・エンジニアとして活かせる企業へつなぎます。
            </p>

            {/* 即CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://lin.ee/z5If9Wl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-lg bg-green-500 text-white hover:bg-green-600 transition inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
                </svg>
                LINEで無料相談する
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-300 text-gray-700 hover:border-blue-900 hover:text-blue-900 transition inline-flex items-center justify-center"
              >
                Webで相談する
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              ※ 相談は完全無料。転職を強制することは一切ありません。
            </p>
          </div>
        </div>
      </section>

      {/* ===== B. サービスの価値の束（アイコン12個） ===== */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              すべて<span className="text-orange-500">無料</span>でサポート
            </h2>
            <p className="text-gray-600">転職成功まで、費用は一切かかりません</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 scroll-animate">
            {[
              { icon: "📝", label: "履歴書作成" },
              { icon: "📄", label: "職務経歴書" },
              { icon: "🎯", label: "求人提案" },
              { icon: "💬", label: "面接対策" },
              { icon: "💰", label: "条件交渉" },
              { icon: "📅", label: "日程調整" },
              { icon: "🏢", label: "非公開求人" },
              { icon: "👔", label: "企業研究" },
              { icon: "📱", label: "LINE相談" },
              { icon: "🤝", label: "入社後フォロー" },
              { icon: "🔒", label: "秘密厳守" },
              { icon: "⏰", label: "夜間対応OK" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== C. 不安の列挙 → 否定（ポリシー宣言） ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              こんな不安、ありませんか？
            </h2>
          </div>

          <div className="space-y-4 scroll-animate">
            {[
              {
                worry: "今の職場にバレたくない…",
                answer: "完全秘密厳守。現職への連絡は一切しません。"
              },
              {
                worry: "しつこく電話されたくない…",
                answer: "連絡はLINEのみでOK。電話なしでも進められます。"
              },
              {
                worry: "未経験でエンジニアや営業になれる？",
                answer: "体育会出身者の9割が未経験スタート。研修充実の求人を厳選しています。"
              },
              {
                worry: "転職を無理に勧められそう…",
                answer: "転職を強制することは絶対にしません。相談だけでもOKです。"
              },
              {
                worry: "途中でやめたくなったら…",
                answer: "いつでも退会OK。違約金・手数料は一切ありません。"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">{item.worry}</p>
                  <p className="text-gray-900 font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== D. 根拠の提示（数字） ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              選ばれる<span className="text-orange-400">理由</span>
            </h2>
            <p className="text-blue-200">体育会出身者に特化した支援実績</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-animate">
            <div className="text-center bg-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-1">92%</div>
              <div className="text-blue-200 text-sm">未経験からの<br />転職成功率</div>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-1">500+</div>
              <div className="text-blue-200 text-sm">転職成功者数</div>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-1">98%</div>
              <div className="text-blue-200 text-sm">利用者満足度</div>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-1">平均+80万</div>
              <div className="text-blue-200 text-sm">年収アップ額</div>
            </div>
          </div>

          <p className="text-center text-blue-300 text-xs mt-6">
            ※ 2023年1月〜2024年12月の実績に基づく
          </p>
        </div>
      </section>

      {/* ===== 中盤CTA ===== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-3xl mx-auto text-center scroll-animate">
          <p className="text-gray-700 mb-4">まずは気軽に相談してみませんか？</p>
          <a
            href="https://lin.ee/z5If9Wl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-green-500 text-white hover:bg-green-600 transition shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
            </svg>
            LINEで無料相談する（30秒で完了）
          </a>
        </div>
      </section>

      {/* ===== E. 成功事例（Before→After） ===== */}
      <section id="voices" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              体育会出身者の<span className="gradient-text">転職成功事例</span>
            </h2>
            <p className="text-gray-600">未経験から営業・エンジニアへ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate">
            {/* 事例1: 営業 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
              <div className="bg-blue-900 text-white p-4">
                <div className="text-sm opacity-80">CASE 01</div>
                <div className="font-bold">サッカー部 → IT営業</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👨</div>
                  <div>
                    <div className="font-bold text-gray-900">Kさん（25歳）</div>
                    <div className="text-sm text-gray-500">大学サッカー部出身</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Before</span>
                    <span className="text-gray-700">フリーター・年収180万</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">After</span>
                    <span className="text-gray-900 font-bold">IT企業営業・年収420万</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  「部活で培った目標達成力を評価してもらえました。未経験でも研修が充実していて安心でした。」
                </p>
              </div>
            </div>

            {/* 事例2: エンジニア */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
              <div className="bg-green-700 text-white p-4">
                <div className="text-sm opacity-80">CASE 02</div>
                <div className="font-bold">野球部 → Webエンジニア</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👨</div>
                  <div>
                    <div className="font-bold text-gray-900">Tさん（24歳）</div>
                    <div className="text-sm text-gray-500">大学野球部出身</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Before</span>
                    <span className="text-gray-700">飲食店アルバイト</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">After</span>
                    <span className="text-gray-900 font-bold">Web系エンジニア・年収380万</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  「プログラミング未経験でしたが、研修付きの企業を紹介してもらい、今はフルリモートで働いています。」
                </p>
              </div>
            </div>

            {/* 事例3: 営業 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
              <div className="bg-purple-700 text-white p-4">
                <div className="text-sm opacity-80">CASE 03</div>
                <div className="font-bold">バスケ部 → 人材営業</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👩</div>
                  <div>
                    <div className="font-bold text-gray-900">Mさん（23歳）</div>
                    <div className="text-sm text-gray-500">大学バスケ部出身</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Before</span>
                    <span className="text-gray-700">事務職・年収250万</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">After</span>
                    <span className="text-gray-900 font-bold">人材会社営業・年収450万</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  「チームワークを活かせる仕事を探していました。条件交渉もしてもらえて年収が大幅アップ！」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== F. 利用の流れ（5ステップ） ===== */}
      <section id="flow" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ご利用の流れ
            </h2>
            <p className="text-gray-600">最短2週間で内定獲得も可能</p>
          </div>

          <div className="space-y-0 scroll-animate">
            {[
              {
                step: "01",
                title: "LINE or Webで無料相談",
                desc: "30秒で登録完了。まずはあなたの状況をお聞かせください。",
                color: "bg-blue-500"
              },
              {
                step: "02",
                title: "キャリア面談",
                desc: "オンラインで60分程度。希望条件や強みを一緒に整理します。",
                color: "bg-blue-600"
              },
              {
                step: "03",
                title: "求人のご提案",
                desc: "非公開求人含め、あなたに合った企業を厳選してご紹介。",
                color: "bg-blue-700"
              },
              {
                step: "04",
                title: "選考対策・応募",
                desc: "書類添削、面接対策を徹底サポート。日程調整もお任せ。",
                color: "bg-blue-800"
              },
              {
                step: "05",
                title: "内定・入社",
                desc: "条件交渉も代行。入社後のフォローも行います。",
                color: "bg-blue-900"
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                    {item.step}
                  </div>
                  {index < 4 && <div className="w-0.5 h-16 bg-gray-300"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== G. FAQ ===== */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4 scroll-animate">
            {[
              {
                q: "本当に無料ですか？",
                a: "はい、完全無料です。求職者様から費用をいただくことは一切ありません。企業様からの紹介料で運営しています。"
              },
              {
                q: "今すぐ転職するつもりはないのですが…",
                a: "もちろん大丈夫です。「まずは相談だけ」「情報収集だけ」という方も多くいらっしゃいます。"
              },
              {
                q: "未経験でもエンジニアになれますか？",
                a: "はい。研修制度が充実した企業を厳選してご紹介しています。体育会出身者の継続力は企業から高く評価されています。"
              },
              {
                q: "現職にバレませんか？",
                a: "ご安心ください。現在の勤務先に連絡することは絶対にありません。書類選考時も企業への開示タイミングは相談して決めます。"
              },
              {
                q: "地方在住ですが利用できますか？",
                a: "はい。面談はすべてオンラインで完結します。リモートワーク可能な求人も多数ご紹介可能です。"
              },
              {
                q: "途中で退会できますか？",
                a: "いつでも退会可能です。違約金や手数料は一切かかりません。"
              },
            ].map((item, index) => (
              <details key={index} className="group bg-gray-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-gray-900 flex items-center gap-3">
                    <span className="text-blue-900 font-bold">Q.</span>
                    {item.q}
                  </span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <span className="text-orange-500 font-bold">A.</span> {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== H. 申し込み手順 ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              <span className="text-orange-500">30秒</span>で相談スタート
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg scroll-animate">
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">必要なもの</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">LINEアカウント</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">これだけ！</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">登録手順</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span className="text-gray-700">下のボタンからLINE友達追加</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span className="text-gray-700">簡単なアンケートに回答（30秒）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span className="text-gray-700">担当から面談日程のご連絡</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://lin.ee/z5If9Wl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-xl bg-green-500 text-white hover:bg-green-600 transition shadow-lg"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
                </svg>
                LINEで無料相談する
              </a>
              <p className="text-gray-500 text-sm mt-4">
                ※ 個人情報は厳重に管理します。退会はいつでも可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl">キャリア</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <Link href="/company" className="hover:text-white transition">会社概要</Link>
              <Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-white transition">利用規約</Link>
              <Link href="/contact" className="hover:text-white transition">お問い合わせ</Link>
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
