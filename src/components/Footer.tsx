// src/components/Footer.tsx

import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.07] bg-carbon-900/55">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
            <span className="font-extrabold uppercase tracking-[0.25em]">
              The Pul<span className="text-accent">se</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            Evidence-minded, practical writing about sleep, nutrition, movement and mental wellbeing.
            This is a showcase project with sample content.
          </p>
        </div>
        <div className="text-sm text-zinc-400">
          <p className="font-semibold uppercase tracking-wider text-zinc-200">Explore</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-accent-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent-light">
                All articles
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-5 py-5 text-center text-xs text-zinc-500">
        The content on this site is for general information only and is not medical advice. Always consult a
        qualified healthcare professional about your personal health.
      </div>
    </footer>
  );
}
