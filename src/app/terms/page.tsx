import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "利用規約 | Nキャリア",
  description: "Nキャリアのサービス利用規約。",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            利用規約
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              本利用規約（以下「本規約」）は、株式会社Nキャリア（以下「当社」）が提供する就職・転職支援サービス（以下「本サービス」）の利用条件を定めるものです。
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第1条（適用）</h2>
              <p className="text-gray-700 leading-relaxed">
                本規約は、本サービスを利用するすべてのお客様（以下「利用者」）に適用されます。利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第2条（サービス内容）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、以下のサービスを提供します。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>キャリアカウンセリング</li>
                <li>求人情報の提供</li>
                <li>求人企業への推薦・紹介</li>
                <li>履歴書・職務経歴書の添削</li>
                <li>面接対策</li>
                <li>その他就職・転職に関する支援</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第3条（利用登録）</h2>
              <p className="text-gray-700 leading-relaxed">
                1. 本サービスの利用を希望する方は、当社所定の方法により利用登録を行うものとします。<br /><br />
                2. 当社は、以下の場合に利用登録をお断りすることがあります。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>虚偽の情報を登録した場合</li>
                <li>過去に本規約に違反したことがある場合</li>
                <li>その他、当社が不適切と判断した場合</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第4条（利用者の義務）</h2>
              <p className="text-gray-700 leading-relaxed">
                利用者は、以下の事項を遵守するものとします。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>正確かつ最新の情報を提供すること</li>
                <li>当社および求人企業との連絡に誠実に対応すること</li>
                <li>面接や選考に真摯に臨むこと</li>
                <li>内定を承諾した場合は、正当な理由なく辞退しないこと</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第5条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed">
                利用者は、以下の行為を行ってはなりません。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>虚偽の情報を登録・提供する行為</li>
                <li>当社または第三者の権利を侵害する行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>求人企業の機密情報を漏洩する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第6条（サービスの変更・終了）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、事前の通知なく本サービスの内容を変更し、または提供を終了することができます。これにより利用者に生じた損害について、当社は責任を負いません。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第7条（免責事項）</h2>
              <p className="text-gray-700 leading-relaxed">
                1. 当社は、本サービスを通じた就職・転職の成功を保証するものではありません。<br /><br />
                2. 利用者と求人企業との間で生じたトラブルについて、当社は責任を負いません。<br /><br />
                3. 本サービスの利用により利用者に生じた損害について、当社の故意または重過失による場合を除き、当社は責任を負いません。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第8条（規約の変更）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、必要に応じて本規約を変更することができます。変更後の規約は、当ウェブサイトに掲載した時点から効力を生じます。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">第9条（準拠法・管轄裁判所）</h2>
              <p className="text-gray-700 leading-relaxed">
                本規約は日本法に準拠し、本規約に関する紛争は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <p className="text-gray-500 text-sm mt-12">
              制定日：2024年1月1日<br />
              最終改定日：2024年1月1日
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
