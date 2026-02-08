import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
