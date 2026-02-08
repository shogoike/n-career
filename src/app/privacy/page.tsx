import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "プライバシーポリシー | Nキャリア",
  description: "Nキャリアのプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#014421]">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            プライバシーポリシー
          </h1>

          <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 p-8">
            <p className="text-green-200 mb-8">
              株式会社Nキャリア（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">1. 個人情報の定義</h2>
              <p className="text-green-100 leading-relaxed">
                本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">2. 個人情報の収集</h2>
              <p className="text-green-100 leading-relaxed">
                当社は、適法かつ公正な手段により、以下の目的で個人情報を収集いたします。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-green-100">
                <li>就職・転職支援サービスの提供</li>
                <li>求人情報のご案内</li>
                <li>キャリアカウンセリングの実施</li>
                <li>お問い合わせへの対応</li>
                <li>サービス向上のための分析</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">3. 個人情報の利用目的</h2>
              <p className="text-green-100 leading-relaxed">
                収集した個人情報は、以下の目的で利用いたします。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-green-100">
                <li>求人企業への推薦・紹介</li>
                <li>キャリアに関するアドバイス・情報提供</li>
                <li>当社サービスに関するご連絡</li>
                <li>統計データの作成（個人を特定できない形式）</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">4. 個人情報の第三者提供</h2>
              <p className="text-green-100 leading-relaxed">
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-green-100">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>求人企業への推薦にあたり、お客様の同意を得た場合</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">5. 個人情報の管理</h2>
              <p className="text-green-100 leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">6. 個人情報の開示・訂正・削除</h2>
              <p className="text-green-100 leading-relaxed">
                お客様は、当社が保有するご自身の個人情報について、開示、訂正、削除を請求することができます。ご希望の場合は、お問い合わせ窓口までご連絡ください。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">7. お問い合わせ窓口</h2>
              <p className="text-green-100 leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。<br /><br />
                株式会社Nキャリア<br />
                メール：info@n-career.jp
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">8. ポリシーの変更</h2>
              <p className="text-green-100 leading-relaxed">
                当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点から効力を生じます。
              </p>
            </section>

            <p className="text-green-300 text-sm mt-12">
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
