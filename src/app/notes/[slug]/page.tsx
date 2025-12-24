import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { customMDXComponents } from "@/components/MDXComponents";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/notes"
          className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors"
        >
          ← Back to Notes
        </Link>

        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            {post.frontMatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-6">
            <time dateTime={post.frontMatter.date}>
              {formatDate(post.frontMatter.date)}
            </time>
            {post.frontMatter.author && (
              <span>By {post.frontMatter.author}</span>
            )}
          </div>

          {post.frontMatter.description && (
            <p className="text-xl text-foreground/70 mb-6">
              {post.frontMatter.description}
            </p>
          )}

          {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.frontMatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={customMDXComponents} />
        </div>
      </article>
    </div>
  );
}
