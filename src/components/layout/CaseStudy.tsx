import Link from 'next/link';
import type { ReactNode } from 'react';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type ProjectStat = {
  label: string;
  value: string;
};

export function ProjectStats({ items }: { items: ProjectStat[] }) {
  return (
    <section aria-label="Project summary" className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-primary-foreground/50">
              {item.label}
            </p>
            <p className="mt-2 text-xl font-medium tracking-[-0.025em] text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type BriefItem = {
  label: string;
  title: string;
  detail: ReactNode;
};

export function ProjectBrief({ items }: { items: BriefItem[] }) {
  return (
    <div className="grid border-y border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-white/10">
      {items.map((item) => (
        <article key={item.label} className="border-b border-white/10 py-7 last:border-b-0 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0">
          <p className="eyebrow">{item.label}</p>
          <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-white">{item.title}</h3>
          <div className="mt-3 text-sm leading-6 text-primary-foreground/65">{item.detail}</div>
        </article>
      ))}
    </div>
  );
}

type Decision = {
  label?: string;
  title: string;
  detail: ReactNode;
};

export function DecisionGrid({ items, columns = 3 }: { items: Decision[]; columns?: 2 | 3 }) {
  return (
    <div className={cn('grid gap-px overflow-hidden border border-white/10 bg-white/10', columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3')}>
      {items.map((item, index) => (
        <article key={item.title} className="bg-primary p-6 sm:p-7">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-accentneongreen">
            {item.label ?? `0${index + 1}`}
          </p>
          <h3 className="mt-4 text-xl font-medium tracking-[-0.025em] text-white">{item.title}</h3>
          <div className="mt-3 text-sm leading-6 text-primary-foreground/65">{item.detail}</div>
        </article>
      ))}
    </div>
  );
}

export function TechnicalList({ items }: { items: Array<{ label: string; value: ReactNode }> }) {
  return (
    <dl className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => (
        <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[12rem,1fr] sm:gap-8">
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary-foreground/50">{item.label}</dt>
          <dd className="text-sm leading-6 text-primary-foreground/75">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l border-accentneongreen py-2 pl-6 text-xl leading-8 tracking-[-0.02em] text-white sm:text-2xl sm:leading-9">
      {children}
    </blockquote>
  );
}

export function ProjectActions({
  primary,
  secondary,
}: {
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <div className="flex flex-wrap gap-3 border-t border-white/10 pt-8">
      {primary ? (
        <Button asChild size="lg" className="rounded-full">
          <a href={primary.href} target={primary.external ? '_blank' : undefined} rel={primary.external ? 'noreferrer' : undefined}>
            {primary.label} <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {secondary ? (
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <a href={secondary.href} target={secondary.external ? '_blank' : undefined} rel={secondary.external ? 'noreferrer' : undefined}>
            {secondary.label} <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ) : null}
      <Link
        href="/projects"
        className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-primary-foreground/65 hover:text-white"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> All projects
      </Link>
    </div>
  );
}
