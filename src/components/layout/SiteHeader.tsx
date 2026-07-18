'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavLink = {
  href: Route;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '/projects', label: 'Projects' },
  { href: '/projects/civil-air-patrol', label: 'Leadership' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-primary/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center border border-accentneongreen/60 font-mono text-xs text-accentneongreen">SD</span>
          <span className="text-sm font-medium tracking-[-0.01em] text-white group-hover:text-accentneongreen">Saahil Doshi</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-primary-foreground/65 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition hover:text-white',
                pathname === link.href && 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a href="/Saahil-Doshi-Resume.pdf" className="ml-1 inline-flex items-center gap-1.5 border-l border-white/15 pl-7 text-white hover:text-accentneongreen">
            Résumé <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen ? (
        <nav className="border-t border-white/10 bg-primary px-6 py-6 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3 text-base text-primary-foreground/75 hover:text-white">
                {link.label}
              </Link>
            ))}
            <a href="/Saahil-Doshi-Resume.pdf" className="mt-4 inline-flex items-center gap-2 text-accentneongreen">
              Download résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
