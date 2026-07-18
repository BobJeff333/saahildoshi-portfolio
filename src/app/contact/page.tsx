import Link from 'next/link';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CONTACTS = [
  {
    label: 'Email',
    value: 'saahil.doshi@outlook.com',
    detail: 'Best for research, academic, and engineering conversations.',
    href: 'mailto:saahil.doshi@outlook.com',
    action: 'Write an email',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Saahil Doshi',
    detail: 'Professional milestones, project updates, and networking.',
    href: 'https://www.linkedin.com/in/saahil-doshi-a2564a332/',
    action: 'Open LinkedIn',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'saahildoshi',
    detail: 'Software projects, technical utilities, and portfolio source.',
    href: 'https://github.com/saahildoshi',
    action: 'Open GitHub',
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <div>
      <header className="border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">Let&apos;s discuss research, engineering, or what comes next.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">I welcome conversations with university programs, research mentors, engineering teams, and others interested in the work documented here.</p>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;
              return (
                <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined} className="group flex min-h-72 flex-col bg-primary p-7 sm:p-8">
                  <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-accentneongreen" /><ArrowUpRight className="h-4 w-4 text-primary-foreground/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accentneongreen" /></div>
                  <p className="mt-10 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-primary-foreground/45">{contact.label}</p>
                  <h2 className="mt-3 text-xl font-medium text-white">{contact.value}</h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-primary-foreground/60">{contact.detail}</p>
                  <span className="mt-8 text-sm text-accentneongreen">{contact.action}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#151a1c] py-16 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Supporting material</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl">Start with the project record or résumé.</h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/65">Technical reports and drawings remain linked within individual case studies.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild><Link href="/projects">Project index</Link></Button>
            <Button asChild variant="outline"><a href="/Saahil-Doshi-Resume.pdf" className="gap-2">Download résumé <Download className="h-4 w-4" /></a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
