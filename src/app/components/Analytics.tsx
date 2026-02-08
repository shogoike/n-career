"use client";

import Script from "next/script";
import { useEffect } from "react";

// GA4 測定ID
const GA_MEASUREMENT_ID = "G-FZ89JHB86E";
// Clarity プロジェクトID
const CLARITY_PROJECT_ID = "ve4lhmtplf";

// gtag型定義
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
    clarity: (command: string, ...args: unknown[]) => void;
  }
}

// スクロール深度トラッキング
function useScrollDepthTracking() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;

      thresholds.forEach((threshold) => {
        if (scrolled >= threshold && !reached.has(threshold)) {
          reached.add(threshold);

          // GA4にイベント送信
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              percent_scrolled: threshold,
              page_path: window.location.pathname,
            });
          }

          // Clarityにもカスタムタグ送信
          if (typeof window.clarity === "function") {
            window.clarity("set", "scroll_depth", `${threshold}%`);
          }

          console.log(`Scroll depth: ${threshold}%`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

// CTAクリックトラッキング用のヘルパー関数
export function trackCTAClick(ctaType: string = "line_cta") {
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      cta_type: ctaType,
      page_path: window.location.pathname,
    });
  }
  if (typeof window.clarity === "function") {
    window.clarity("set", "cta_click", ctaType);
  }
}

export default function Analytics() {
  useScrollDepthTracking();

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>
    </>
  );
}
