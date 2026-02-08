"use client";

import Link from "next/link";
import { trackCTAClick } from "./Analytics";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#014421]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-white">キャリア</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-green-200 hover:text-white transition">サービス</Link>
            <Link href="/#voices" className="text-green-200 hover:text-white transition">体験談</Link>
            <Link href="/#flow" className="text-green-200 hover:text-white transition">ご利用の流れ</Link>
            <a
              href="https://lin.ee/z5If9Wl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("line_cta_header")}
              className="btn-line text-white px-5 py-2 rounded-full font-medium text-sm"
            >
              無料相談
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
