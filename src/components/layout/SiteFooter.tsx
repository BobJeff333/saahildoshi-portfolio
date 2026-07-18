import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0f10]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Saahil Doshi · Class of 2027</p>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/70">
            Aerospace engineering, experimental research, and technical leadership documented from requirement to result.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/70">
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <a href="/Saahil-Doshi-Resume.pdf" className="inline-flex items-center gap-1 hover:text-accentneongreen">
            Résumé <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
