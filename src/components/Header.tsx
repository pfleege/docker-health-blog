// src/components/Header.tsx

import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header>
      <Link href="/">
        <Logo /> The Pulse
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Articles</Link>
      </nav>
    </header>
  );
}
