"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// キャッチコピーのバリエーション
const CATCHPHRASES = [
  {
    mobile: ["書類作成、面接対策、", "条件交渉——", "全部まるっと無料", "でサポート。"],
    desktop: ["書類作成、面接対策、条件交渉——", "全部まるっと無料", "でサポート。"],
    highlight: 2,
  },
  {
    mobile: ["未経験からでも", "年収UP を実現。", "体育会出身者の", "転職成功率92%"],
    desktop: ["未経験からでも年収UPを実現。", "体育会出身者の", "転職成功率92%"],
    highlight: 2,
  },
  {
    mobile: ["競技で培った", "あなたの強みを", "次のキャリアの", "武器に変える。"],
    desktop: ["競技で培ったあなたの強みを", "次のキャリアの", "武器に変える。"],
    highlight: 2,
  },
  {
    mobile: ["転職活動、", "ひとりで悩まない。", "体育会専門の", "プロがサポート。"],
    desktop: ["転職活動、ひとりで悩まない。", "体育会専門の", "プロがサポート。"],
    highlight: 2,
  },
  {
    mobile: ["営業・エンジニアへ", "キャリアチェンジ。", "未経験9割が", "成功しています。"],
    desktop: ["営業・エンジニアへキャリアチェンジ。", "未経験9割が", "成功しています。"],
    highlight: 2,
  },
];

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days: number = 30) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function useCatchphrase() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const cookieIndex = getCookie("catchphrase_index");
    if (cookieIndex !== null) {
      setIndex(parseInt(cookieIndex, 10));
    } else {
      const randomIndex = Math.floor(Math.random() * CATCHPHRASES.length);
      setCookie("catchphrase_index", randomIndex.toString(), 30);
      setIndex(randomIndex);
    }
  }, []);

  return index !== null ? CATCHPHRASES[index] : CATCHPHRASES[0];
}

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

// ===== 【テストB】CTA: オレンジボタン + 緊急感 =====
function LineCTA({ size = "normal", className = "" }: { size?: "normal" | "large"; className?: string }) {
  const isLarge = size === "large";
  return (
    <a
      href="https://lin.ee/z5If9Wl"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold inline-flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all hover:shadow-xl hover:scale-105 ${
        isLarge ? "px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl" : "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
      } ${className}`}
    >
      <svg className={isLarge ? "w-6 h-6 sm:w-7 sm:h-7" : "w-5 h-5 sm:w-6 sm:h-6"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
      </svg>
      <span className="whitespace-nowrap">今すぐ無料で相談</span>
    </a>
  );
}

export default function Main2() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const catchphrase = useCatchphrase();

  const successRate = useCountUp(92, 2000);
  const successCount = useCountUp(500, 2000);
  const satisfaction = useCountUp(98, 2000);
  const salaryUp = useCountUp(80, 2000);

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#014421]/95 backdrop-blur-md border-b border-white/10" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">N</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-white">キャリア</span>
            </div>
            <div className="md:hidden">
              <a
                href="https://lin.ee/z5If9Wl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium text-sm"
              >
                今すぐ相談
              </a>
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
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium text-sm transition"
              >
                今すぐ相談
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== FV ===== */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden min-h-[85vh] sm:min-h-0 flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-30"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#014421]/60 sm:bg-[#014421]/70"></div>
        <div className="absolute top-10 right-0 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* バッジ - 緊急感を追加 */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-orange-500/20 backdrop-blur border border-orange-400/50 text-white rounded-full text-sm font-medium mb-6">
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold animate-pulse">残り枠わずか</span>
              <span className="text-orange-200">今月の相談枠</span>
            </div>

            <h1 className="text-[21px] sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-snug">
              <span className="sm:hidden">
                {catchphrase.mobile.map((line, i) => (
                  <span key={i}>
                    {i === catchphrase.highlight ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">{line}</span>
                    ) : (
                      line
                    )}
                    {i < catchphrase.mobile.length - 1 && <br />}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">
                {catchphrase.desktop.map((line, i) => (
                  <span key={i}>
                    {i === catchphrase.highlight ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">{line}</span>
                    ) : (
                      line
                    )}
                    {i < catchphrase.desktop.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              競技に打ち込んできたあなたの強みを、<br className="hidden sm:block" />
              <span className="font-bold text-orange-400">営業・エンジニア</span>として活かせる企業へつなぎます。
            </p>

            {/* CTA - オレンジ強調 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <LineCTA size="large" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-green-200">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                完全無料
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                転職強制なし
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                秘密厳守
              </span>
            </div>
          </div>

          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img
                src="/images/hero-runner.png"
                alt="全力で走るアスリート"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#014421]/50 to-transparent rounded-3xl"></div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== サービス ===== */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/10.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-bold mb-4">
              すべて0円
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              転職成功まで<span className="text-orange-400">完全無料</span>サポート
            </h2>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 scroll-animate">
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
                className="service-icon text-center p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 cursor-default transition"
              >
                <div className="text-xl sm:text-3xl mb-0.5 sm:mb-2">{item.icon}</div>
                <div className="text-[10px] sm:text-sm font-medium text-white leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 不安解消 ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/6.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              こんな不安、<span className="text-orange-400">全部解消</span>します
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
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* ===== 数字 ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/14.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              体育会出身者に選ばれる<span className="text-orange-400">理由</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div ref={successRate.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-1 number-highlight">
                {successRate.count}<span className="text-2xl">%</span>
              </div>
              <div className="text-green-200 text-sm">未経験からの<br />転職成功率</div>
            </div>
            <div ref={successCount.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-1 number-highlight">
                {successCount.count}<span className="text-2xl">+</span>
              </div>
              <div className="text-green-200 text-sm">転職成功者数</div>
            </div>
            <div ref={satisfaction.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-1 number-highlight">
                {satisfaction.count}<span className="text-2xl">%</span>
              </div>
              <div className="text-green-200 text-sm">利用者満足度</div>
            </div>
            <div ref={salaryUp.ref} className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-1 number-highlight">
                +{salaryUp.count}<span className="text-2xl">万</span>
              </div>
              <div className="text-green-200 text-sm">平均年収アップ</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold mb-4 text-lg">今月の相談枠、残りわずか！</p>
          <LineCTA size="large" className="bg-white text-orange-600 hover:bg-gray-100" />
          <p className="text-orange-100 text-sm mt-3">30秒で登録完了・相談だけでもOK</p>
        </div>
      </section>

      {/* ===== 成功事例 ===== */}
      <section id="voices" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/11.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10 scroll-animate">
            <div className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-bold mb-4">
              VOICE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              体育会出身者の<span className="text-orange-400">転職成功事例</span>
            </h2>
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
                comment: "部活で培った目標達成力を評価してもらえました。"
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
                comment: "未経験でしたが、研修付きの企業を紹介してもらいました。"
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
                comment: "条件交渉もしてもらえて年収が大幅アップ！"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all">
                <div className="bg-orange-500/20 text-white p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-orange-200">CASE {item.case}</div>
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
                      <span className="text-xs bg-white/20 text-green-200 px-2 py-0.5 rounded">Before</span>
                      <span className="text-green-200 text-sm">{item.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded">After</span>
                      <span className="text-white font-bold text-sm">{item.after}</span>
                    </div>
                  </div>
                  <p className="text-green-100 text-sm">「{item.comment}」</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 利用の流れ（簡略版） ===== */}
      <section id="flow" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="text-orange-400">3ステップ</span>で相談開始
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center scroll-animate">
            {[
              { step: "1", title: "LINE登録", desc: "30秒で完了" },
              { step: "2", title: "アンケート", desc: "簡単な質問" },
              { step: "3", title: "面談予約", desc: "日程調整" },
            ].map((item, index) => (
              <div key={index} className="flex-1 text-center p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <div className="font-bold text-white text-lg">{item.title}</div>
                <div className="text-green-200 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <LineCTA size="large" />
          </div>
        </div>
      </section>

      {/* ===== FAQ（短縮版） ===== */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#014421]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">よくある質問</h2>
          </div>

          <div className="space-y-3 scroll-animate">
            {[
              { q: "本当に無料ですか？", a: "はい、完全無料です。企業様からの紹介料で運営しています。" },
              { q: "今すぐ転職するつもりはないのですが…", a: "相談だけでも大歓迎です。情報収集からでもOK。" },
              { q: "未経験でもエンジニアになれますか？", a: "はい。研修制度が充実した企業を厳選してご紹介します。" },
            ].map((item, index) => (
              <details key={index} className="group bg-white/10 rounded-2xl border border-white/20">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">Q</span>
                    {item.q}
                  </span>
                  <svg className="w-5 h-5 text-green-200 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-green-100 flex gap-3">
                  <span className="w-8 h-8 bg-white/20 text-orange-400 rounded-lg flex items-center justify-center text-sm font-bold">A</span>
                  <span>{item.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 最終CTA ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            今すぐ、未来を変える一歩を
          </h2>
          <p className="text-orange-100 mb-6">体育会出身者専門のアドバイザーがあなたをサポートします</p>
          <LineCTA size="large" className="bg-white text-orange-600 hover:bg-gray-100" />
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

      {/* ===== Sticky CTA ===== */}
      <div
        className={`sticky-cta ${showStickyCta ? "visible" : ""} bg-gradient-to-r from-orange-600 to-orange-500 border-t border-orange-400 shadow-lg py-3 px-4`}
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white">残り枠わずか！</div>
            <div className="text-xs text-orange-100">今すぐ無料相談</div>
          </div>
          <LineCTA className="flex-1 sm:flex-none w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
