'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

type AnimatedHeroProps = {
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  className?: string;
};

export function AnimatedHero({ image, badge, title, subtitle, actions, className }: AnimatedHeroProps) {
  return (
    <section className={cn('relative isolate min-h-[34rem] overflow-hidden border-b border-white/10', className)}>
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,20,22,0.98)_0%,rgba(16,20,22,0.9)_45%,rgba(16,20,22,0.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20" />
      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end gap-8 px-6 py-16 sm:py-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {badge ? (
            <span className="eyebrow inline-flex border-l border-accentneongreen pl-3">
              {badge}
            </span>
          ) : null}
          <h1 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/70">{subtitle}</p>
        </motion.div>
        {actions ? (
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          >
            {actions}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

export default AnimatedHero;
