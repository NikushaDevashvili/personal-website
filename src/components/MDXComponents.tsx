import { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const customMDXComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2
      className="text-3xl font-semibold mt-6 mb-3 text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-2xl font-semibold mt-5 mb-2 text-foreground"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-xl font-semibold mt-4 mb-2 text-foreground"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4 leading-7 text-foreground/90" {...props} />,
  a: (props) => (
    <Link
      href={props.href || "#"}
      className="text-blue-600 dark:text-blue-400 hover:underline"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />
  ),
  li: (props) => <li className="leading-7 text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 text-foreground/80"
      {...props}
    />
  ),
  code: (props) => {
    const isInline = !props.className;
    return isInline ? (
      <code
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
        {...props}
      />
    ) : (
      <code className="block" {...props} />
    );
  },
  pre: (props) => (
    <pre
      className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-200 dark:border-gray-800"
      {...props}
    />
  ),
  hr: (props) => (
    <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />
  ),
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg my-6 w-full"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table
        className="min-w-full border-collapse border border-gray-300 dark:border-gray-700"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border border-gray-300 dark:border-gray-700 px-4 py-2"
      {...props}
    />
  ),
};
