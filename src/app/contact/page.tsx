"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理をここに追加
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#014421]">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            お問い合わせ
          </h1>
          <p className="text-green-200 text-center mb-10">
            キャリア相談・サービスに関するご質問など、お気軽にお問い合わせください。
          </p>

          <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  お名前 <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-white placeholder-green-300"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  メールアドレス <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-white placeholder-green-300"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-white placeholder-green-300"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="sport" className="block text-sm font-medium text-white mb-2">
                  競技歴
                </label>
                <select
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-white"
                >
                  <option value="" className="bg-[#014421]">選択してください</option>
                  <option value="soccer" className="bg-[#014421]">サッカー</option>
                  <option value="baseball" className="bg-[#014421]">野球</option>
                  <option value="basketball" className="bg-[#014421]">バスケットボール</option>
                  <option value="volleyball" className="bg-[#014421]">バレーボール</option>
                  <option value="rugby" className="bg-[#014421]">ラグビー</option>
                  <option value="track" className="bg-[#014421]">陸上競技</option>
                  <option value="swimming" className="bg-[#014421]">水泳</option>
                  <option value="tennis" className="bg-[#014421]">テニス</option>
                  <option value="judo" className="bg-[#014421]">柔道</option>
                  <option value="kendo" className="bg-[#014421]">剣道</option>
                  <option value="other" className="bg-[#014421]">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  お問い合わせ内容 <span className="text-yellow-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none text-white placeholder-green-300"
                  placeholder="ご質問やご相談内容をお書きください"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-4 rounded-full font-bold text-lg transition"
              >
                送信する
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-green-200 mb-4">LINEでもお気軽にご相談ください</p>
            <a
              href="https://lin.ee/z5If9Wl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg btn-line text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 1.999c-5.522 0-10 4.478-10 10 0 1.904.532 3.681 1.453 5.197l-1.453 5.304 5.461-1.429a9.97 9.97 0 0 0 4.539 1.088c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.182a8.09 8.09 0 0 1-4.117-1.126l-.296-.176-3.065.803.817-2.983-.194-.308a8.057 8.057 0 0 1-1.236-4.303c0-4.479 3.644-8.123 8.123-8.123 4.479 0 8.123 3.644 8.123 8.123 0 4.479-3.644 8.123-8.155 8.093z"/>
              </svg>
              LINEで相談する
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
