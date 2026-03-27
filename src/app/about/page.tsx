'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Wind, Users, GraduationCap, Trophy, Wrench } from 'lucide-react';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

const sectionMotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/5 bg-white/5/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

type FactPillProps = {
  label: string;
  value: string;
};

function FactPill({ label, value }: FactPillProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs md:text-sm">
      <span className="uppercase tracking-[0.25em] text-accentneongreen/80">{label}</span>
      <span className="font-medium text-primary-foreground/90 text-right">{value}</span>
    </div>
  );
}

const introParagraphs = [
  'I am a high school student at Oconee County High School, class of 2027, with a focused interest in aerospace and mechanical engineering. Rather than only studying theory, I spend most of my time designing, simulating, and building systems that actually fly: high-power research rockets, competition vehicles, and experimental airfoils.',
  'My work spans national rocketry competitions, NASA’s Student Launch Initiative, undergraduate-level research at the University of Georgia, leadership in Civil Air Patrol, and hands-on design work for my school community. Across these projects, I have learned how to move from an idea to a fully documented, tested system while balancing analytical modeling, CAD and simulation, documentation, communication, and team leadership.',
];

const quickFacts = [
  {
    label: 'School',
    value: 'Oconee County High School · Class of 2027',
  },
  {
    label: 'Focus',
    value: 'Aerospace & Mechanical Engineering',
  },
  {
    label: 'Projects',
    value: 'NASA SLI · ARC · UGA Airfoils',
  },
  {
    label: 'Leadership',
    value: 'Civil Air Patrol Cadet Commander',
  },
  {
    label: 'Activities',
    value: 'Varsity Tennis · Student Council',
  },
  {
    label: 'Service',
    value: 'STEM Outreach · School Design Work',
  },
];

const highlightRails = [
  {
    icon: Rocket,
    label: 'Rocketry',
    text: 'High-power and mid-power vehicles for NASA SLI and ARC competitions.',
  },
  {
    icon: Wind,
    label: 'Aerodynamics',
    text: 'Bio-inspired and AI-designed airfoils tested in wind tunnels and XFOIL.',
  },
  {
    icon: Users,
    label: 'Leadership',
    text: 'Cadet Commander, student leadership, outreach lessons, and mentorship.',
  },
  {
    icon: GraduationCap,
    label: 'Academics',
    text: 'Advanced coursework, research experience, and technical writing.',
  },
  {
    icon: Wrench,
    label: 'Design Build',
    text: 'Practical CAD and 3D printing projects for teams, classrooms, and school programs.',
  },
  {
    icon: Trophy,
    label: 'Athletics',
    text: 'Varsity tennis experience that has strengthened discipline and composure.',
  },
];

const projects = [
  {
    title: 'NASA Student Launch Initiative - Project RANCH',
    body:
      'As Payload Team Lead and a key technical contributor on our NASA Student Launch team, I helped engineer a full-scale high-power rocket and payload system under strict NASA requirements. My work included payload architecture, design coordination, testing, and major contributions to the hundreds of pages of technical documentation our team submitted for review.',
    meta: ['Payload Team Lead', 'Full-scale rocket project', 'NASA-reviewed documentation'],
  },
  {
    title: 'American Rocketry Challenge',
    body:
      'As Co-Captain, I led the design, simulation in OpenRocket, and fabrication in Fusion 360 of our competition rocket. We engineered the vehicle to meet strict altitude and flight-time constraints, earning a top national finish and becoming the only team from Georgia to qualify for nationals that year.',
    meta: ['Co-Captain', 'National finalist', 'OpenRocket & Fusion 360'],
  },
  {
    title: 'UGA Bio-Inspired and AI-Designed Airfoil Research',
    body:
      'In a full-time research internship at the University of Georgia, I investigated the aerodynamic performance of bio-inspired and AI-generated airfoils. I used CFD, CAD, Python, and 3D printing to model and test custom profiles in a wind tunnel, and the project later became a gold-medal-winning science fair entry.',
    meta: ['UGA research internship', 'Wind tunnel testing', 'Science fair gold medal'],
  },
  {
    title: 'Civil Air Patrol - Cadet Commander',
    body:
      'As Cadet Commander of my Civil Air Patrol squadron, I lead a roughly 30-cadet corps in weekly training focused on aerospace, leadership, physical fitness, and character. My responsibilities include planning training, mentoring cadets, organizing events, and helping build a stronger and more disciplined squadron culture.',
    meta: ['Cadet Commander', '~30 cadets', 'Training & mentorship'],
  },
  {
    title: 'Student Council - Secretary',
    body:
      'Through Student Council, I contribute to school-wide planning and student leadership efforts while helping represent student ideas in a more formal setting. The role has strengthened my communication, organization, and follow-through, especially when working with both peers and faculty on initiatives that need steady execution.',
    meta: ['School leadership', 'Organization', 'Communication'],
  },
  {
    title: 'Applied Design for School Programs',
    body:
      'I also enjoy using engineering for practical school impact. One example is a modular connector system my team and I designed for elevated stage platforms used by our theatre program. It was a great example of solving a real problem with CAD, iteration, and fabrication while designing for an actual user group.',
    meta: ['Real client need', 'CAD & fabrication', 'Theatre program project'],
  },
  {
    title: 'STEM Outreach and Teaching',
    body:
      'A meaningful part of my work is teaching engineering concepts to younger students through outreach events, demonstrations, and hands-on activities. I enjoy making technical ideas more approachable and helping students see engineering as something creative, practical, and exciting.',
    meta: ['Hands-on outreach', 'Mentorship', 'STEM communication'],
  },
];

const skillGroups = [
  {
    title: 'Aerospace & simulation',
    items: [
      'OpenRocket for flight dynamics, stability, and performance trade studies',
      'XFOIL and other CFD tools for airfoil analysis and lift and drag prediction',
      'Basic exposure to thermodynamics and combustion modeling using Cantera',
      'Altimeter and flight-data analysis for high-power and competition rockets',
    ],
  },
  {
    title: 'Design, CAD, and fabrication',
    items: [
      'Fusion 360 for airframes, payload bays, fixtures, and 3D-printable components',
      '3D printing of structural and aerodynamic parts, including reinforced materials',
      'Iterative prototyping, design-for-manufacturing, and basic finite element analysis',
      'Practical build experience with composites, recovery systems, payload integration, and test setups',
    ],
  },
  {
    title: 'Programming & computation',
    items: [
      'Proficient in Python for data analysis, simulation scripts, and signal processing',
      'Proficient in JavaScript and comfortable in modern web stacks, including this portfolio',
      'Strong working knowledge of LaTeX for technical documentation and reports',
      'Experience with Git, GitHub, and modern development workflows',
    ],
  },
  {
    title: 'Leadership, communication, and teaching',
    items: [
      'Planning and leading multi-hour meetings and training for Civil Air Patrol cadets',
      'Designing and teaching STEM outreach lessons for younger students',
      'Writing large-scale technical documentation for NASA Student Launch',
      'Coordinating teams through design reviews, test campaigns, deadlines, and public-facing presentations',
    ],
  },
];

const beyondEngineering = [
  'Outside of engineering, I am active in varsity tennis and student leadership at school. These activities give me a different kind of challenge and help me stay balanced while still developing the same discipline, consistency, and accountability that engineering demands.',
  'On the court, I have competed in important varsity positions and learned how to stay composed under pressure, adapt quickly, and perform with focus. Through Student Council and outreach work, I have also grown as a communicator and organizer, especially in settings where leadership is less about technical skill and more about people, trust, and follow-through.',
  'I also value projects that let engineering directly serve my community. Whether that means helping with school programs, mentoring younger students, or designing something useful for a real group of people, I want my work to be both technically strong and genuinely helpful.',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* Intro / hero card */}
        <motion.section
          {...sectionMotionProps}
          className="pt-20"
        >
          <GlassCard className="p-6 md:p-8 bg-gradient-to-br from-white/5 via-black/40 to-accentneongreen/10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                  About
                </p>
                <h1 className="text-4xl font-semibold text-white sm:text-5xl">
                  About Saahil Doshi
                </h1>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentneongreen/80">
                  High school aerospace engineer-in-training building rockets, airfoils, and teams.
                </p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="space-y-4 text-sm md:text-base leading-relaxed text-primary-foreground/80"
                >
                  {introParagraphs.map((paragraph) => (
                    <motion.p key={paragraph} variants={itemVariants}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </div>

              {/* Snapshot / quick facts */}
              <div className="space-y-5">
                <div className="grid gap-3">
                  {quickFacts.map((fact) => (
                    <FactPill key={fact.label} label={fact.label} value={fact.value} />
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {highlightRails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex h-full flex-col gap-2 rounded-2xl border border-white/5 bg-black/40 p-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg border border-accentneongreen/40 bg-accentneongreen/10 p-1.5 text-accentneongreen">
                            <Icon className="h-4 w-4" />
                          </div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-accentneongreen/80">
                            {item.label}
                          </p>
                        </div>
                        <p className="text-xs text-primary-foreground/75">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Focus projects */}
        <motion.div {...sectionMotionProps}>
          <Section id="work" title="What I’m working on" kicker="Focus Projects">
            <p className="text-sm md:text-base text-primary-foreground/80">
              A few of the projects and activities that define my current trajectory:
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8 grid gap-6 lg:grid-cols-2"
            >
              {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <GlassCard className="h-full p-5 md:p-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm font-semibold text-white">{project.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.meta.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-primary-foreground/80">
                        {project.body}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </motion.div>

        {/* Skills */}
        <motion.div {...sectionMotionProps}>
          <Section id="skills" title="Skills & tools" kicker="Toolbox">
            <p className="text-sm md:text-base text-primary-foreground/80">
              Through these projects and activities, I’ve built a set of technical and leadership skills that I continue to deepen.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8 grid gap-8 md:grid-cols-2"
            >
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                >
                  <GlassCard className="h-full p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">
                      {group.title}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </motion.div>

        {/* Beyond engineering */}
        <motion.div {...sectionMotionProps}>
          <Section id="beyond" title="Beyond engineering" kicker="Balance">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
            >
              <motion.div variants={itemVariants}>
                <GlassCard className="p-6 md:p-7">
                  <div className="space-y-4 text-sm md:text-base text-primary-foreground/80">
                    {beyondEngineering.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlassCard className="p-6 md:p-7 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">
                    How this shapes me
                  </p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>
                      <span className="font-semibold text-white">Varsity Tennis:</span>{' '}
                      staying composed and consistent in high-pressure singles and doubles situations.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Student Council:</span>{' '}
                      building communication, organization, and follow-through in a school leadership setting.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Community Design Work:</span>{' '}
                      applying engineering in practical ways that directly help school programs and real users.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Transferable Skills:</span>{' '}
                      teaching, calm decision-making, teamwork, and consistency, which are the same skills needed on launch day.
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>
          </Section>
        </motion.div>

        {/* Next steps / CTA */}
        <motion.div {...sectionMotionProps}>
          <Section id="looking" title="What I’m looking for" kicker="Next Steps">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div variants={itemVariants}>
                <GlassCard className="p-6 md:p-7 space-y-6">
                  <p className="text-sm md:text-base text-primary-foreground/80">
                    I am looking for opportunities to contribute to ambitious aerospace and mechanical engineering
                    projects, whether through research, design teams, or summer programs. If you are working on
                    something where a motivated high school engineer with hands-on rocketry, CFD, CAD, and leadership
                    experience could be useful, I would be excited to connect.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="/projects">View my projects</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-accentneongreen/50 text-accentneongreen"
                    >
                      <Link href="/contact">Get in touch</Link>
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}
