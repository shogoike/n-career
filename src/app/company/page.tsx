import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "会社概要 | Nキャリア",
  description: "Nキャリアの会社概要。体育会・アスリートの就職・転職を支援する企業です。",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            会社概要
          </h1>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium w-1/3">会社名</th>
                  <td className="px-6 py-4 text-gray-900">株式会社Nキャリア</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">代表者</th>
                  <td className="px-6 py-4 text-gray-900">代表取締役 [お名前]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">設立</th>
                  <td className="px-6 py-4 text-gray-900">2024年</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">所在地</th>
                  <td className="px-6 py-4 text-gray-900">〒000-0000<br />東京都[住所]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">事業内容</th>
                  <td className="px-6 py-4 text-gray-900">
                    <ul className="list-disc list-inside space-y-1">
                      <li>体育会・アスリート向け就職支援事業</li>
                      <li>キャリアカウンセリング事業</li>
                      <li>人材紹介事業</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">許可番号</th>
                  <td className="px-6 py-4 text-gray-900">有料職業紹介事業許可番号：[許可番号]</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-gray-700 font-medium">お問い合わせ</th>
                  <td className="px-6 py-4 text-gray-900">info@n-career.jp</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ミッション</h2>
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-3xl">
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
