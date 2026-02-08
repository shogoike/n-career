import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "会社概要 | Nキャリア",
  description: "Nキャリアの会社概要。体育会・アスリートの就職・転職を支援する企業です。",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#014421]">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            会社概要
          </h1>

          <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-white/10">
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium w-1/3">会社名</th>
                  <td className="px-6 py-4 text-white">株式会社Nキャリア</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">代表者</th>
                  <td className="px-6 py-4 text-white">代表取締役 [お名前]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">設立</th>
                  <td className="px-6 py-4 text-white">2024年</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">所在地</th>
                  <td className="px-6 py-4 text-white">〒000-0000<br />東京都[住所]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">事業内容</th>
                  <td className="px-6 py-4 text-white">
                    <ul className="list-disc list-inside space-y-1">
                      <li>体育会・アスリート向け就職支援事業</li>
                      <li>キャリアカウンセリング事業</li>
                      <li>人材紹介事業</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">許可番号</th>
                  <td className="px-6 py-4 text-white">有料職業紹介事業許可番号：[許可番号]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-white/5 text-left text-green-200 font-medium">お問い合わせ</th>
                  <td className="px-6 py-4 text-white">info@n-career.jp</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">ミッション</h2>
            <div className="bg-yellow-400/20 border border-yellow-400/30 text-white p-8 rounded-3xl">
              <p className="text-xl leading-relaxed">
                「すべてのアスリートに、輝くセカンドキャリアを」<br /><br />
                私たちは、競技に打ち込んできたアスリートの皆さんが、
                その経験を活かして次のステージでも活躍できるよう、
                全力でサポートします。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
