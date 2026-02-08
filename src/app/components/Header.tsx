"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#014421] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-gray-900">キャリア</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-[#014421] transition">特徴</Link>
            <Link href="/#services" className="text-gray-600 hover:text-[#014421] transition">サービス</Link>
            <Link href="/#results" className="text-gray-600 hover:text-[#014421] transition">実績</Link>
            <Link href="/#contact" className="btn-primary text-white px-6 py-2 rounded-full font-medium">
              無料相談
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
