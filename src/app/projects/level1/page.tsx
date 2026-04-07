import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function LevelOneFleetPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="relative isolate overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/level1/level1-hero.svg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
              Research Rocket
            </span>

            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">BEAMS Rocket | Level 1 Certification Vehicle</h1>

            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              A modular high-power research rocket developed for the BEAMS mission and flown within a Level 1 certification
              framework. The vehicle supports a layered payload system for bean samples and is built around a reusable,
              mission-configurable architecture.
            </p>

            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/contact">
                  Request Full Specs
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <FigureCard
            src="/images/level1/IMG_6786.jpeg"
            caption="AIAA team with the BEAMS vehicle during project activities."
          />
        </div>
      </section>

      <Section id="overview" title="Mission Overview" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-5">
          <StatCard label="Apogee" value="2687 ft" />
          <StatCard label="Stability" value="1.95 cal / 13.7%" />
          <StatCard label="Length" value="51.378 in" />
          <StatCard label="CG" value="27.096 in" />
          <StatCard label="CP" value="34.117 in" />
        </div>

        <p>
          BEAMS stands for Botanical Experiment on Aeronautical Mechanical Stress. The mission is part of the Oconee County
          Rocketry Association modular rocket program and focuses on how high-power flight stresses affect bean sample growth
          and health using a layered payload system.
        </p>
      </Section>

      <Section id="architecture" title="Vehicle Architecture" kicker="Design">
        <p>
          BEAMS uses a modular design methodology based on structural segmentation and threaded interfaces. The base rocket was
          segmented into approximately 10-inch-long sections, allowing mission-specific components to be swapped onto a shared
          rocket architecture.
        </p>

        <p>
          The transition geometry supports larger payload volume where needed while keeping the overall configuration compatible
          with the modular stack. The rocket uses ABS printed airframe components with G12 fiberglass fins for the flight
          structure.
        </p>

        <div className="section-grid">
          <FigureCard
            src="/images/level1/BEAMS-Payload-CAD.png"
            caption="Cross-sectional CAD view of the BEAMS payload section and modular internal architecture."
          />
        </div>
      </Section>

      <Section id="analysis" title="Simulation & Flight Analysis" kicker="Analysis">
        <p>
          OpenRocket modeling was used to evaluate the BEAMS configuration for Level 1 readiness. The analysis set the baseline
          for vehicle geometry, stability margin, and expected apogee using the mission configuration.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/level1/OpenRocket-Simulation.png" caption="OpenRocket configuration view of the BEAMS rocket." />
          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard label="Apogee" value="2687 ft" />
            <StatCard label="Stability" value="1.95 cal / 13.7%" />
            <StatCard label="Length" value="51.378 in" />
            <StatCard label="CG / CP" value="27.096 in / 34.117 in" />
          </div>
        </div>
      </Section>

      <Section id="certification" title="Level 1 Certification Framework" kicker="Certification">
        <p>
          The Level 1 certification framework for BEAMS is centered on an H-class motor flight with stable, controlled ascent,
          recovery deployment at apogee through motor delay, and landing without structural failure.
        </p>

        <p>
          Preflight checks include center of gravity verification, threaded interface inspection, motor retention checks, and
          recovery packing verification to confirm readiness before launch.
        </p>
      </Section>

      <Section id="role" title="My Role" kicker="Contributions">
        <p>
          I led development of the BEAMS mission vehicle architecture and integration approach. My work focused on modular payload
          architecture development, vehicle modeling, simulation, and flight-system integration within the project framework.
        </p>
      </Section>

      <Section id="outcomes" title="Key Outcomes" kicker="Outcomes">
        <div className="space-y-4">
          <p>Established a segmented, threaded modular rocket architecture for mission-specific reconfiguration.</p>
          <p>Integrated a layered payload concept for bean sample flight-stress research in the BEAMS mission scope.</p>
          <p>Used OpenRocket-backed metrics to support design decisions and Level 1 certification readiness planning.</p>
        </div>
      </Section>
    </div>
  );
}
