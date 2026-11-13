// src/app/not-found.tsx

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-32 text-center">
      <h1 className="text-6xl font-medium">Oops, have found a bug...</h1>
      <Image
        src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png"
        alt="Angry bug"
        height={300}
        width={300}
        className="flex justify-self-center rounded-full m-10"
      />
      <p className="mt-4 text-lg text-ink/80">
        This page has wandered off somewhere. Let&apos;s take you back home.
      </p>
        <Link href="/" className="hover:text-accent-light">
        Home
        </Link>
    </section>
  );
}