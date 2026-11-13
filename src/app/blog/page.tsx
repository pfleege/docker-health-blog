// src/app/blog/page.tsx

import { getBlogArticleByTopic } from "@/lib/queries/posts";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  // Supports ?workout, ?topic=workout, ?slug=workout, ?category=workout, etc.
  const topicParam =
    (typeof params.topic === "string" && params.topic) ||
    (typeof params.slug === "string" && params.slug) ||
    (typeof params.category === "string" && params.category) ||
    Object.keys(params).find((k) =>
      ["workout", "cardio", "sleep", "nutrition"].includes(k.toLowerCase()),
    ) ||
    "";

  if (topicParam) {
    const article = await getBlogArticleByTopic(topicParam);

    if (article) {
      return (
        <article className="bg-carbon-800 border border-carbon-600 rounded-xl overflow-hidden flex flex-col p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="border-b border-carbon-600 pb-6 space-y-3">
            <span className="inline-block text-xs font-bold tracking-widest text-accent uppercase px-3 py-1 bg-carbon-700 rounded-full border border-carbon-600">
              {article.topic}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-display">
              {article.title}
            </h1>
          </div>

          <div className="space-y-8">
            {article.textContent.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.subtitle && (
                  <h2 className="text-xl sm:text-2xl font-bold text-accent font-display">
                    {section.subtitle}
                  </h2>
                )}
                {section.subtext.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-neutral-300 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-3 pl-4 border-l-2 border-accent/40 my-4">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="text-neutral-300 text-sm leading-relaxed">
                        <strong className="text-white block sm:inline mr-1">{bp.label}</strong>
                        {bp.text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="pt-6 border-t border-carbon-600">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-orange hover:bg-orange-hover text-black font-semibold text-sm rounded-md transition-colors"
            >
              &larr; Back to Main
            </Link>
          </div>
        </article>
      );
    }
  }

  return (
    <div className="p-10 text-center space-y-4 bg-carbon-800 border border-carbon-600 rounded-xl">
      <h2 className="text-2xl font-bold text-white">No Article Selected</h2>
      <p className="text-neutral-400">Please choose a category (Workout, Sleep, Nutrition) from the menu above.</p>
      <Link href="/" className="inline-block text-accent hover:underline font-semibold text-sm">
        &larr; Back to Main
      </Link>
    </div>
  );
}
