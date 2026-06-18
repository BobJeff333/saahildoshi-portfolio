import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function LevelOneFleetPage() {
  return (
    <div className="space-y-12 pb-24">
      <section
        className="relative isolate overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/level1/level1-hero.svg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
              Published AIAA Project
            </span>

            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              BEAMS Rocket | Level 1 Certification Vehicle
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              This page highlights the BEAMS rocket within the larger Oconee County Rocketry Association modular
              rocket program. The overall project explored how structurally segmented, threaded launch vehicles can
              support rapid, reusable experimentation, while BEAMS served as my mission-specific configuration: a
              layered payload system designed to study how high-power flight stresses affect bean sample growth and
              health.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="https://doi.org/10.2514/6.2026-112524" target="_blank" rel="noreferrer">
                  Read Published Paper
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <FigureCard
            src="/images/level1/Fig-1.png"
            caption="Modeled launch vehicle and exploded structural segmentation view."
          />
        </div>
      </section>

      <Section id="overview" title="Project Overview" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-5">
          <StatCard label="Apogee" value="2687 ft" />
          <StatCard label="Stability" value="1.95 cal / 13.7%" />
          <StatCard label="Length" value="51.378 in" />
          <StatCard label="CG" value="27.096 in" />
          <StatCard label="CP" value="34.117 in" />
        </div>

        <p>
          The larger OCRA project asked a straightforward engineering question: how can student teams build one
          reusable rocket architecture that supports many different experiments instead of redesigning a full vehicle
          for every new mission? The published paper presents that answer through a modular launch vehicle system
          built around structural segmentation, threaded interfaces, additive manufacturing, and mission-specific
          reconfiguration.
        </p>

        <p>
          Within that broader framework, BEAMS, short for Botanical Experiment on Aeronautical Mechanical Stress,
          focused on a layered payload system designed to house bean samples and study how high-power flight stresses
          affect plant growth and health. Other missions in the paper explored gyroscopic stabilization, rover
          deployment, biological payload resilience, passive spin generation, and fin tubercle effects, showing the
          range of experiments the same modular platform could support.
        </p>
      </Section>

      <Section id="architecture" title="Modular Architecture" kicker="Design Methodology">
        <p>
          The core of the overall project is a modular rocket design built from structurally segmented airframe
          sections connected by repeatable threaded joints. Instead of treating the body as one fixed vehicle, the
          rocket can be reconfigured by swapping in mission-specific sections while keeping shared base components
          such as the airframe, booster, and avionics architecture.
        </p>

        <p>
          For BEAMS, that mattered because the mission required a larger internal payload volume. The transition
          geometry shown in the paper makes that possible by stepping between body diameters while preserving
          compatibility with the rest of the modular stack. This lets the BEAMS payload sit within the same overall
          launch system rather than requiring a completely separate rocket.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <FigureCard
            src="/images/level1/Fig-2.png"
            caption="Threaded interface CAD design and integration."
          />
          <FigureCard
            src="/images/level1/Fig-4.png"
            caption="BEAMS transition airframe panel; showing the mission-specific payload geometry."
          />
        </div>
      </Section>

      <Section id="manufacturing" title="Manufacturing & Reusability" kicker="Build Strategy">
        <p>
          The paper frames additive manufacturing as a major part of the project’s value. By segmenting the rocket
          into roughly 10-inch sections, the team could manufacture the vehicle in-house instead of depending on
          long, pre-made airframes. That reduced cost, simplified iteration, and made the system more practical for
          repeated experimentation.
        </p>

        <p>
          Across the project, ABS was used for printed airframe components because it balanced manufacturability,
          cost, and thermal and mechanical tolerance. G12 fiberglass was selected for the fins to better survive
          landing loads and preserve structural integrity after flight. Together, those choices supported the larger
          goal of a reusable student research platform rather than a one-time vehicle.
        </p>

        <div className="section-grid">
          <FigureCard
            src="/images/level1/Fig-8.png"
            caption="Manufactured and assembled rocket components."
          />
        </div>
      </Section>

      <Section id="beams" title="BEAMS Mission Focus" kicker="Mission-Specific Configuration">
        <p>
          BEAMS was my mission within the larger modular rocket effort. The mission centered on creating a layered
          internal payload system for bean samples, then integrating that payload into a reusable launch vehicle
          architecture that could still meet high-power stability and certification requirements.
        </p>

        <p>
          What makes BEAMS especially useful as a portfolio project is that it sits at the intersection of the full
          system and the mission-specific design. It is not just a payload idea and not just a rocket body. It shows
          how a focused experiment can drive geometry, packaging, simulation, and integration decisions within a
          modular aerospace platform.
        </p>
      </Section>

      <Section id="analysis" title="Simulation & Flight Analysis" kicker="Analysis">
        <p>
          The paper used OpenRocket to validate every mission configuration before launch preparation. For BEAMS,
          that meant recreating the structurally segmented design in the simulation environment, then evaluating motor
          options, geometry, and stability to confirm that the rocket met the baseline criteria for a successful and
          controlled flight.
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FigureCard
            src="/images/level1/Fig-6.png"
            caption="OpenRocket views of the BEAMS rocket."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard label="Apogee" value="2687 ft" />
            <StatCard label="Stability" value="1.95 cal / 13.7%" />
            <StatCard label="Length" value="51.378 in" />
            <StatCard label="CG / CP" value="27.096 in / 34.117 in" />
          </div>
        </div>

        <div className="mt-6">
          <FigureCard
            src="/images/level1/Fig-7.png"
            caption="Mission comparison table."
          />
        </div>
      </Section>

      <Section id="certification" title="Level 1 Certification Framework" kicker="Certification">
        <p>
          The Level 1 side of this page matters because the overall project did not treat certification as a separate
          afterthought. In the paper, Level 1 standards act as a common engineering benchmark across the modular
          fleet, requiring safe flight on an H- or I-class motor, stable ascent, reliable recovery deployment, and
          post-flight structural integrity.
        </p>

        <p>
          For BEAMS, that framework translated into an H-class certification flight approach, OpenRocket-backed
          stability verification, standardized recovery validation, and disciplined preflight procedures. Those checks
          included center of gravity verification, inspection of threaded joints, motor retention checks, and recovery
          packing verification before launch.
        </p>
      </Section>

      <Section id="role" title="My Role" kicker="Contributions">
        <p>
          Within the larger modular rocket project, my focus was the BEAMS mission. I worked on shaping the mission
          concept, the bean-sample payload architecture, and the way the BEAMS configuration fit into the shared
          modular vehicle system. That meant thinking both at the full-project level, where reusability and
          standardization mattered, and at the mission level, where payload layout, geometry, and simulation became
          specific to BEAMS.
        </p>
      </Section>

      <Section id="outcomes" title="Key Outcomes" kicker="Outcomes">
        <div className="space-y-4">
          <p>
            Positioned BEAMS as a mission-specific research rocket within a larger reusable launch platform rather
            than as a standalone one-off build.
          </p>
          <p>
            Demonstrated how structural segmentation and threaded interfaces can support rapid reconfiguration across
            multiple student aerospace experiments.
          </p>
          <p>
            Integrated a layered bean-sample payload concept into a modular rocket architecture while maintaining
            stable, simulation-backed flight characteristics.
          </p>
          <p>
            Contributed to a project that advanced from design and modeling into a published AIAA paper documenting
            the overall methodology and mission set.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="https://doi.org/10.2514/6.2026-112524" target="_blank" rel="noreferrer">
              Read Published Paper
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
