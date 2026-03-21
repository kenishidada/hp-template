export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            あなたのビジネスを
            <br className="hidden md:block" />
            次のステージへ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            私たちは、お客様のビジネスの成長をサポートする最適なソリューションを提供いたします。
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            私たちについて
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "実績",
                desc: "創業以来、多くのお客様にご愛顧いただいております。",
              },
              {
                title: "品質",
                desc: "高品質なサービスを適正価格でご提供いたします。",
              },
              {
                title: "サポート",
                desc: "専任スタッフが丁寧にサポートいたします。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            ご質問やご要望がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}