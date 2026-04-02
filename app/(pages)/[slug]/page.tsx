import { notFound } from "next/navigation";

type PageData = {
  title: string;
  content: string;
};

const pages: Record<string, PageData> = {
  about: {
    title: "会社概要",
    content:
      "私たちは、お客様のビジネスの成長を支援するために設立されました。豊富な経験と専門知識を活かし、最適なソリューションをご提案いたします。",
  },
  services: {
    title: "サービス",
    content:
      "Webサイト制作、マーケティング支援、コンサルティングなど、幅広いサービスをご用意しております。お客様のニーズに合わせたプランをご提案いたします。",
  },
  contact: {
    title: "お問い合わせ",
    content:
      "お問い合わせは、メールまたはお電話にて承っております。お気軽にご連絡ください。",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function SubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{page.title}</h1>
        <p className="text-[var(--muted-foreground)] leading-relaxed">{page.content}</p>
      </div>
    </section>
  );
}
