import Link from "next/link";
import { getAllPosts, type Post } from "@/lib/mdx";

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

export default async function Notes() {
  let posts: Post[] = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error("Error loading posts:", error);
    posts = [];
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">My Notes</h1>
        <p className="text-xl text-foreground/70 mb-12">
          A collection of thoughts, ideas, and learnings
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-foreground/60 mb-4">
              No posts yet. Create your first MDX post in the content/posts
              directory!
            </p>
            <p className="text-sm text-foreground/50">
              Create a .mdx file in content/posts/ with frontmatter like:
            </p>
            <pre className="mt-4 text-left bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
              {`---
title: "Your Post Title"
date: "2024-01-15"
description: "A brief description"
---`}
            </pre>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/notes/${encodeURIComponent(post.slug)}`}
                className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all bg-white dark:bg-gray-900/50"
              >
                <h2 className="text-2xl font-semibold mb-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.frontMatter.title}
                </h2>
                {post.frontMatter.description && (
                  <p className="text-foreground/70 mb-3">
                    {post.frontMatter.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <time dateTime={post.frontMatter.date}>
                    {formatDate(post.frontMatter.date)}
                  </time>
                  {post.frontMatter.tags &&
                    post.frontMatter.tags.length > 0 && (
                      <div className="flex gap-2">
                        {post.frontMatter.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
