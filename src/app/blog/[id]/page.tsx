// src/app/blog/[id]

import { getPostById } from "@/lib/queries/posts";
import Image from 'next/image';

export const dynamic = "force-dynamic";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return <p className="p-10">Not found</p>;

  return (
          <article 
            key={post.id} 
            className="bg-carbon-800 border border-carbon-600 rounded-xl overflow-hidden flex flex-col hover:border-orange/50 transition-all duration-300 shadow-xl group"
          >
            <div className="relative h-100 w-full overflow-hidden">
              <Image 
                src={post.image_url} 
                alt={post.title}
                width={1280}
                height={720}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-8">
                <div className="flex items-center justify-between text-xs text-orange font-semibold tracking-wider uppercase">
                  <span>{post.author}</span>
                  <span>{new Date(post.published_at).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {post.content}
                </p>
              </div>
              <button className="self-start mt-2 px-4 py-2 bg-orange hover:bg-orange-hover text-accent font-semibold text-sm rounded-md transition-colors">
  <a href="/">Back to Main &rarr;</a>
                
              </button>
            </div>
          </article>
  );
}
