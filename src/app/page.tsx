import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-6 text-foreground">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-foreground/70 mb-8">
          A modern blog built with Next.js and MDX
        </p>
        <Link
          href="/notes"
          className="inline-block px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          Check my notes →
        </Link>
      </div>
    </div>
  );
}
