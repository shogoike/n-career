"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// 数字カウントアップ用カスタムフック
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  };

  return { count, ref };
}

// LINE CTAコンポーネント
function LineCTA({ size = "normal", className = "" }: { size?: "normal" | "large"; className?: string }) {
  const isLarge = size === "large";
  return (
    <a
      href="https://lin.ee/z5If9Wl"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-line text-white rounded-full font-bold inline-flex items-center justify-center gap-2 shadow-lg ${
        isLarge ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"
      } ${className}`}
    >
      <svg className={isLarge ? "w-7 h-7" : "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
      </svg>
      LINEで無料相談する
    </a>
  );
}

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 数字カウントアップ
  const successRate = useCountUp(92, 2000);
  const successCount = useCountUp(500, 2000);
  const satisfaction = useCountUp(98, 2000);
  const salaryUp = useCountUp(80, 2000);

  useEffect(() => {
    // スクロールアニメーション
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

    // スティッキーCTA表示
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#014421]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#014421]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-white">キャリア</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-green-200 hover:text-white transition">サービス</a>
              <a href="#voices" className="text-green-200 hover:text-white transition">体験談</a>
              <a href="#flow" className="text-green-200 hover:text-white transition">ご利用の流れ</a>
              <a href="#faq" className="text-green-200 hover:text-white transition">よくある質問</a>
              <a
                href="https://lin.ee/z5If9Wl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line text-white px-5 py-2 rounded-full font-medium text-sm"
              >
                無料相談
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== A. ファーストビュー（ロイヤルグリーン背景） ===== */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/14.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        {/* 背景装飾 */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-in-up">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="animate-pulse-slow">🔥</span>
              体育会・アスリート専門
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">未経験9割</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              書類作成、面接対策、条件交渉——<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                全部まるっと無料
              </span>でサポート。
            </h1>

            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              競技に打ち込んできたあなたの強みを、<br className="hidden sm:block" />
              <span className="font-bold text-yellow-400">営業・エンジニア</span>として活かせる企業へつなぎます。
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <LineCTA size="large" />
              <a
                href="/contact"
                className="px-8 py-5 rounded-full font-bold text-lg border-2 border-white/30 text-white hover:bg-white hover:text-[#014421] transition inline-flex items-center justify-center"
              >
                Webで相談する
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                完全無料
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                転職強制なし
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                秘密厳守
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                LINEだけでOK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== B. サービスの価値の束 ===== */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/10.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
              すべて0円
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              転職成功まで<span className="text-yellow-400">完全無料</span>サポート
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 scroll-animate">
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
              <div
                key={index}
                className="service-icon text-center p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:shadow-md cursor-default transition"
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                <div className="text-xs sm:text-sm font-medium text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== C. 不安の列挙 → 否定 ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 - 壁を突き破るイメージ */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/6.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              こんな不安、<span className="text-yellow-400">全部解消</span>します
            </h2>
          </div>

          <div className="space-y-3 scroll-animate">
            {[
              { worry: "今の職場にバレたくない…", answer: "完全秘密厳守。現職への連絡は一切しません。" },
              { worry: "しつこく電話されたくない…", answer: "連絡はLINEのみでOK。電話なしでも進められます。" },
              { worry: "未経験でエンジニアや営業になれる？", answer: "体育会出身者の9割が未経験スタート。研修充実の求人を厳選。" },
              { worry: "転職を無理に勧められそう…", answer: "転職を強制することは絶対にしません。相談だけでもOK。" },
              { worry: "途中でやめたくなったら…", answer: "いつでも退会OK。違約金・手数料は一切ありません。" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 flex gap-4 hover:bg-white/20 transition">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-green-200 text-sm">😟</span>
                </div>
                <div className="flex-1">
                  <p className="text-green-300 text-sm line-through mb-1">{item.worry}</p>
                  <p className="text-white font-bold flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* ===== D. 根拠の提示（数字カウントアップ） ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] text-white relative overflow-hidden">
        {/* テクスチャ背景 - メタル */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/14.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              体育会出身者に選ばれる<span className="text-yellow-400">理由</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div ref={successRate.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-1 number-highlight">
                {successRate.count}<span className="text-2xl">%</span>
              </div>
              <div className="text-green-200 text-sm">未経験からの<br />転職成功率</div>
            </div>
            <div ref={successCount.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-1 number-highlight">
                {successCount.count}<span className="text-2xl">+</span>
              </div>
              <div className="text-green-200 text-sm">転職成功者数</div>
            </div>
            <div ref={satisfaction.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-1 number-highlight">
                {satisfaction.count}<span className="text-2xl">%</span>
              </div>
              <div className="text-green-200 text-sm">利用者満足度</div>
            </div>
            <div ref={salaryUp.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-1 number-highlight">
                +{salaryUp.count}<span className="text-2xl">万</span>
              </div>
              <div className="text-green-200 text-sm">平均年収アップ</div>
            </div>
          </div>

          <p className="text-center text-green-300 text-xs mt-6">
            ※ 2023年1月〜2024年12月の実績に基づく
          </p>
        </div>
      </section>

      {/* ===== CTA 1 ===== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#014421] border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold mb-4 text-lg">🎯 まずは気軽に相談してみませんか？</p>
          <LineCTA size="large" />
          <p className="text-green-200 text-sm mt-3">30秒で登録完了・相談だけでもOK</p>
        </div>
      </section>

      {/* ===== E. 成功事例 ===== */}
      <section id="voices" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 - 光と霜 */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/11.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
              VOICE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              体育会出身者の<span className="text-yellow-400">転職成功事例</span>
            </h2>
            <p className="text-green-200">未経験から営業・エンジニアへ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate">
            {[
              {
                case: "01",
                sport: "サッカー部",
                job: "IT営業",
                name: "Kさん（25歳）",
                detail: "大学サッカー部出身",
                before: "フリーター・年収180万",
                after: "IT企業営業・年収420万",
                emoji: "⚽",
                comment: "部活で培った目標達成力を評価してもらえました。未経験でも研修が充実していて安心でした。"
              },
              {
                case: "02",
                sport: "野球部",
                job: "Webエンジニア",
                name: "Tさん（24歳）",
                detail: "大学野球部出身",
                before: "飲食店アルバイト",
                after: "Web系エンジニア・年収380万",
                emoji: "⚾",
                comment: "プログラミング未経験でしたが、研修付きの企業を紹介してもらい、今はフルリモートで働いています。"
              },
              {
                case: "03",
                sport: "バスケ部",
                job: "人材営業",
                name: "Mさん（23歳）",
                detail: "大学バスケ部出身",
                before: "事務職・年収250万",
                after: "人材会社営業・年収450万",
                emoji: "🏀",
                comment: "チームワークを活かせる仕事を探していました。条件交渉もしてもらえて年収が大幅アップ！"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all hover:-translate-y-1">
                <div className="bg-white/10 text-white p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-green-200">CASE {item.case}</div>
                      <div className="font-bold">{item.sport} → {item.job}</div>
                    </div>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">👤</div>
                    <div>
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-sm text-green-200">{item.detail}</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 p-3 bg-white/10 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-white/20 text-green-200 px-2 py-0.5 rounded font-medium">Before</span>
                      <span className="text-green-200 text-sm">{item.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded font-medium">After</span>
                      <span className="text-white font-bold text-sm">{item.after}</span>
                    </div>
                  </div>
                  <p className="text-green-100 text-sm leading-relaxed">「{item.comment}」</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA 2 ===== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#014421] border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold mb-4 text-lg">💪 あなたも未経験からキャリアチェンジしませんか？</p>
          <LineCTA size="large" />
          <p className="text-green-200 text-sm mt-3">体育会出身者専門のアドバイザーが対応</p>
        </div>
      </section>

      {/* ===== F. 利用の流れ ===== */}
      <section id="flow" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 - 宇宙/成長 */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/5.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
              FLOW
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              ご利用の流れ
            </h2>
            <p className="text-green-200">最短<span className="text-yellow-400 font-bold">2週間</span>で内定獲得も可能</p>
          </div>

          <div className="space-y-0 scroll-animate">
            {[
              { step: "01", title: "LINE or Webで無料相談", desc: "30秒で登録完了。まずはあなたの状況をお聞かせください。", icon: "📱" },
              { step: "02", title: "キャリア面談", desc: "オンラインで60分程度。希望条件や強みを一緒に整理します。", icon: "💬" },
              { step: "03", title: "求人のご提案", desc: "非公開求人含め、あなたに合った企業を厳選してご紹介。", icon: "📋" },
              { step: "04", title: "選考対策・応募", desc: "書類添削、面接対策を徹底サポート。日程調整もお任せ。", icon: "✍️" },
              { step: "05", title: "内定・入社", desc: "条件交渉も代行。入社後のフォローも行います。", icon: "🎉" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-yellow-400 text-gray-900 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.icon}
                  </div>
                  {index < 4 && <div className="w-1 h-16 bg-gradient-to-b from-yellow-400 to-green-300 rounded-full"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-yellow-400 font-bold">STEP {item.step}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-green-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== G. FAQ ===== */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/17.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              よくある質問
            </h2>
          </div>

          <div className="space-y-3 scroll-animate">
            {[
              { q: "本当に無料ですか？", a: "はい、完全無料です。求職者様から費用をいただくことは一切ありません。企業様からの紹介料で運営しています。" },
              { q: "今すぐ転職するつもりはないのですが…", a: "もちろん大丈夫です。「まずは相談だけ」「情報収集だけ」という方も多くいらっしゃいます。" },
              { q: "未経験でもエンジニアになれますか？", a: "はい。研修制度が充実した企業を厳選してご紹介しています。体育会出身者の継続力は企業から高く評価されています。" },
              { q: "現職にバレませんか？", a: "ご安心ください。現在の勤務先に連絡することは絶対にありません。書類選考時も企業への開示タイミングは相談して決めます。" },
              { q: "地方在住ですが利用できますか？", a: "はい。面談はすべてオンラインで完結します。リモートワーク可能な求人も多数ご紹介可能です。" },
              { q: "途中で退会できますか？", a: "いつでも退会可能です。違約金や手数料は一切かかりません。" },
            ].map((item, index) => (
              <details key={index} className="group bg-white/10 backdrop-blur rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-bold text-white flex items-center gap-3 text-left">
                    <span className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">Q</span>
                    {item.q}
                  </span>
                  <svg className="w-5 h-5 text-green-200 group-open:rotate-180 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-green-100 flex gap-3">
                  <span className="w-8 h-8 bg-white/20 text-yellow-400 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
                  <span>{item.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA 3 ===== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#014421]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold mb-4 text-lg">❓ 他にも気になることがあれば、お気軽にどうぞ</p>
          <LineCTA size="large" className="bg-white text-gray-900 hover:bg-gray-100" />
        </div>
      </section>

      {/* ===== H. 申し込み手順 ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        {/* テクスチャ背景 - ホログラフィック */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/12.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="text-yellow-400">30秒</span>で相談スタート
            </h2>
            <p className="text-green-200">スマホだけで完結。面倒な手続きは一切なし。</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 sm:p-8 border border-white/20 scroll-animate">
            <div className="flex items-center gap-3 mb-6 p-4 bg-yellow-400/20 rounded-2xl">
              <span className="text-3xl">📱</span>
              <div>
                <div className="font-bold text-white">必要なもの</div>
                <div className="text-green-200">LINEアカウント<span className="text-yellow-400 font-bold">だけ！</span></div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { step: "1", text: "下のボタンからLINE友達追加", icon: "👆" },
                { step: "2", text: "簡単なアンケートに回答（30秒）", icon: "✏️" },
                { step: "3", text: "担当から面談日程のご連絡", icon: "📅" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <span className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold shadow-md">
                    {item.step}
                  </span>
                  <span className="text-white font-medium flex-1">{item.text}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <LineCTA size="large" />
              <div className="flex flex-wrap justify-center gap-4 text-xs text-green-200 mt-4">
                <span>✓ 個人情報は厳重に管理</span>
                <span>✓ 退会はいつでも可能</span>
                <span>✓ 営業電話なし</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#014421] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl">キャリア</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-green-200 text-sm">
              <Link href="/company" className="hover:text-white transition">会社概要</Link>
              <Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-white transition">利用規約</Link>
              <Link href="/contact" className="hover:text-white transition">お問い合わせ</Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-green-200 text-sm">
            <p>&copy; 2024 Nキャリア. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ===== Sticky CTA（スクロール時表示） ===== */}
      <div className={`sticky-cta ${showStickyCta ? "visible" : ""} bg-[#014421] border-t border-white/20 shadow-lg py-3 px-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white">無料でキャリア相談</div>
            <div className="text-xs text-green-200">体育会専門アドバイザーが対応</div>
          </div>
          <LineCTA className="flex-1 sm:flex-none" />
        </div>
      </div>
    </div>
  );
}
