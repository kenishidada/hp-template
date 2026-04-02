import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "サンプルホームページ",
  description: "ホームページテンプレート",
};

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "サービス" },
  { href: "/contact", label: "お問い合わせ" },
];

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-[family-name:var(--font-noto-sans-jp)] antialiased`}
        style={{ color: "var(--foreground)", backgroundColor: "var(--background)" }}
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        <header className="sticky top-0 z-50 backdrop-blur" style={{ backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
              サイト名
            </Link>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer style={{ backgroundColor: "var(--muted)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>
            <p>&copy; 2026 サイト名. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
