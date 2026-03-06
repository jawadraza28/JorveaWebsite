"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/download", label: "Download" },
  { href: "/support", label: "Support" },
  { href: "/earning", label: "Earning" },
  { href: "/safety", label: "Safety" },
  { href: "/legal", label: "Legal" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center" aria-label="Jorvea Home">
          <Image src="/images/headerimg.png" alt="Jorvea" width={240} height={80} className="h-[80px] w-auto" priority />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden items-center rounded-full border border-slate-800 bg-slate-900/60 px-2 py-2 text-sm text-slate-200 md:flex md:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300 ${
                pathname === item.href ? "bg-slate-800 text-cyan-300" : "text-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-slate-800 px-6 pb-4 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 pt-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="rounded-md px-2 py-1 hover:bg-slate-900 hover:text-cyan-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
