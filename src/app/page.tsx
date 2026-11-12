// src/app/page.tsx

// export default async function Home() {

// return (
//     <div className="space-y-12">

// <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
//           <article 
//             key={1}
//             className="bg-carbon-800 border border-carbon-600 rounded-xl overflow-hidden flex flex-col hover:border-orange/50 transition-all duration-300 shadow-xl group"
//           >
//             <div className="relative h-48 w-full overflow-hidden">
//               <img 
//                 src="https://cdn.pixabay.com/photo/2024/03/07/07/02/ai-generated-8617809_1280.jpg"
//                 alt="Sleep Architecture"
//                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
//             </div>
            
//             <div className="p-6 flex-1 flex flex-col justify-between bg-slate-100 text-stone-800 space-y-4">
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between text-xs text-orange font-semibold tracking-wider uppercase">
//                   <span>Dr. Elena Vance</span>
//                 </div>
//                 <h2 className="text-xl font-bold text-stone-700 group-hover:text-orange transition-colors">
//                   Optimizing Sleep Architecture for Peak Cognitive Performance
//                 </h2>
//                 <p className="text-neutral-400 text-sm leading-relaxed">
//                   Discover how deep sleep cycles dictate mental clarity, recovery rates, and longevity.
//                 </p>
//               </div>
// <button className="self-start mt-2 px-4 py-2 bg-orange hover:bg-orange-hover text-black font-semibold text-sm rounded-md transition-colors">
//                 Read Article &rarr;
//               </button>
//             </div>
//           </article>
//       </div>
//     </div>
//   );
// }

import { ensureDatabase, pool } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await ensureDatabase();
  const { rows } = await pool.query<{ count: number }>("SELECT count(*)::int AS count FROM posts");
  return <p className="p-10 text-accent">Posts in database: {rows[0].count}</p>;
}

