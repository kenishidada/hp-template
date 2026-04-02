import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-[family-name:var(--font-noto-sans-jp)] antialiased text-[var(--foreground)] bg-[var(--background)]`}
      >
        <header className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[var(--foreground)]">
              サイト名
            </Link>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-[var(--muted)] border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-[var(--muted-foreground)]">
            <p>&copy; 2026 サイト名. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
