export default async function SubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full mx-auto mb-6 animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
        <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          ページを準備しています
        </h1>
        <p style={{ color: "var(--muted-foreground)" }}>
          まもなく公開予定です。しばらくお待ちください。
        </p>
      </div>
    </div>
  );
}
