export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans">
      <main className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
          Hello, Next.js!
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          项目骨架已就绪。下一步：接入 Supabase 并部署到 Vercel。
        </p>
      </main>
    </div>
  );
}
