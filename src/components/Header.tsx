// src/components/Header.tsx

import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-carbon-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-extrabold uppercase tracking-[0.25em] text-white">
            The Pul<span className="text-accent">se</span>
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm font-semibold">
          <Link href="/" className="rounded-full px-4 py-2 text-zinc-300 transition hover:text-accent-light">
            Home
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-zinc-300 transition hover:text-accent-light"
          >
            Articles
          </Link>
          <Link
            href="/blog?category=Sleep"
            className="hidden rounded-full px-4 py-2 text-zinc-300 transition hover:text-accent-light sm:block"
          >
            Sleep
          </Link>
          <Link
            href="/blog?category=Nutrition"
            className="hidden rounded-full px-4 py-2 text-zinc-300 transition hover:text-accent-light sm:block"
          >
            Nutrition
          </Link>
        </nav>
      </div>
    </header>
  );
}
