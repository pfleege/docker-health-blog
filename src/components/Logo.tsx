// src/components/Logo.tsx

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#17171a" stroke="#ff7a1a" strokeOpacity="0.5" />
      <path
        d="M6 34h14l6-16 10 30 7-18 3 4h12"
        fill="none"
        stroke="#ff7a1a"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
