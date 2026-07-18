import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type SectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({ id, title, kicker, children, className, contentClassName }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-t border-white/10 py-16 sm:py-24', className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {kicker ? (
            <p className="eyebrow">{kicker}</p>
          ) : null}
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-white sm:text-5xl">{title}</h2>
        </div>
        <div className={cn('mt-10 space-y-6 text-base leading-7 text-primary-foreground/75', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
