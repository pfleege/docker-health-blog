// src/app/blog/[id]

import { getPostById } from "@/lib/queries/posts";

export const dynamic = "force-dynamic";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return <p className="p-10">Not found</p>;

  return (
    <article className="p-10">
      <h1 className="text-3xl font-bold text-white">{post.title}</h1>
      <pre className="mt-6 whitespace-pre-wrap text-zinc-300">{post.content}</pre>
    </article>
  );
}
