// src/app/page.tsx

import { getPosts } from '@/lib/queries/posts';
import Image from 'next/image';

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();
return (
    <div className="space-y-12">
      <div className="border-l-4 border-orange pl-6 py-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
          Human Optimization & Health Intelligence
        </h1>
        <p className="text-neutral-400 max-w-2xl text-base">
          Cutting-edge biological insights, performance metrics, and clinical evidence translated for daily application.
        </p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-carbon-800 border border-carbon-600 rounded-xl overflow-hidden flex flex-col hover:border-orange/50 transition-all duration-300 shadow-xl group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={post.image_url} 
                alt={post.title}
                width={1280}
                height={720}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-orange font-semibold tracking-wider uppercase">
                  <span>{post.author}</span>
                  <span>{new Date(post.published_at).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <button className="self-start mt-2 px-4 py-2 hover:bg-carbon-600 text-accent font-semibold text-sm rounded-md transition-colors">
                <a href={`/blog/${post.id}`}>Read Article &rarr;</a>                
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
