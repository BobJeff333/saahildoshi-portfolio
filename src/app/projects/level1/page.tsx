import AnimatedHero from '@/components/animated/AnimatedHero';
import {
  DecisionGrid,
  ProjectActions,
  ProjectBrief,
  ProjectStats,
  PullQuote,
  TechnicalList,
} from '@/components/layout/CaseStudy';
import { FigureCard } from '@/components/layout/FigureCard';
import { Section } from '@/components/layout/Section';

const stats = [
  { label: 'Simulated apogee', value: '2,687 ft' },
  { label: 'Stability margin', value: '1.95 calibers' },
  { label: 'Certification', value: 'NAR Level 1 · in progress' },
];

export default function LevelOneFleetPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/level1/IMG_6786.jpeg"
        badge="Published AIAA project · NAR Level 1 in progress"
        title="BEAMS - a biological payload inside a modular launch platform"
        subtitle="A mission-specific rocket configuration studying how high-power flight stresses affect bean samples, developed within a reusable segmented-airframe research program."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="One vehicle architecture, multiple research missions" kicker="Case study">
        <ProjectBrief
          items={[
            {
              label: 'My focus',
              title: 'BEAMS mission architecture',
              detail: 'I developed the Botanical Experiment on Aeronautical Mechanical Stress concept, payload arrangement, and integration into the shared modular vehicle.',
            },
            {
              label: 'Platform challenge',
              title: 'Make reconfiguration structural',
              detail: 'Mission sections needed repeatable threaded interfaces, useful internal volume, low-cost manufacturing, and stable flight across different payload geometries.',
            },
            {
              label: 'Current outcome',
              title: 'Published method; certification pending',
              detail: 'The larger architecture and mission set were documented in an AIAA paper. My NAR Level 1 flight remains in progress.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              The OCRA modular rocket project asked whether student teams could retain a common booster and avionics approach while swapping mission-specific sections. Structural segmentation and threaded joints let the airframe adapt without restarting every experiment from a blank sheet.
            </p>
            <p>
              BEAMS applied that architecture to a layered biological payload. It required more internal volume than several other missions, making transition geometry, payload restraint, mass distribution, and simulation central to the design.
            </p>
          </div>
          <PullQuote>BEAMS is valuable because the experiment, the payload container, and the launch vehicle were designed as one configuration.</PullQuote>
        </div>
      </Section>

      <Section id="architecture" title="Threaded segmentation made the airframe reusable" kicker="Platform design">
        <DecisionGrid
          items={[
            {
              label: 'Structure',
              title: 'Segment the airframe',
              detail: 'Sections of roughly 10 inches fit common additive-manufacturing equipment and could be replaced individually after damage or design changes.',
            },
            {
              label: 'Interface',
              title: 'Standardize threaded joints',
              detail: 'Repeatable connections let mission modules share a base vehicle while maintaining alignment and transferring flight and recovery loads.',
            },
            {
              label: 'Materials',
              title: 'Match material to failure mode',
              detail: 'ABS supported economical printed airframe iteration; G12 fiberglass fins were selected for landing-load durability and continued reuse.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/level1/Fig-1.png" caption="Modeled launch vehicle and exploded structural segmentation." />
          <FigureCard src="/images/level1/Fig-2.png" caption="Threaded interface CAD and section integration." />
        </div>
      </Section>

      <Section id="beams" title="The BEAMS payload drove a distinct configuration" kicker="My contribution">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-5">
            <p>
              BEAMS uses a layered internal payload to retain bean samples before and after exposure to launch acceleration, vibration, recovery deployment, and landing loads. The experiment turned biological sample protection into an aerospace packaging problem.
            </p>
            <p>
              I worked on the mission concept, internal arrangement, and its compatibility with the shared platform. The larger payload volume required a transition between body diameters without abandoning common booster and avionics elements.
            </p>
          </div>
          <FigureCard src="/images/level1/BEAMS-Payload-CAD.png" caption="Layered BEAMS sample payload and internal packaging concept." />
        </div>
        <FigureCard src="/images/level1/Fig-4.png" caption="BEAMS transition-airframe geometry within the modular stack." wide />
      </Section>

      <Section id="analysis" title="Simulation establishes the certification baseline" kicker="Flight analysis">
        <TechnicalList
          items={[
            { label: 'Length', value: '51.378 in in the analyzed BEAMS configuration.' },
            { label: 'Center of gravity', value: '27.096 in from the reference datum.' },
            { label: 'Center of pressure', value: '34.117 in from the reference datum.' },
            { label: 'Stability', value: '1.95 calibers, reported as 13.7% of vehicle length.' },
            { label: 'Predicted apogee', value: '2,687 ft in the cited OpenRocket configuration.' },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/level1/Fig-6.png" caption="OpenRocket model and simulated flight configuration." />
          <FigureCard src="/images/level1/Fig-7.png" caption="Comparison of mission configurations supported by the platform." />
        </div>
      </Section>

      <Section id="certification" title="The flight milestone is still in progress" kicker="NAR Level 1">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <p>
              Level 1 certification provides the operational benchmark for this configuration: stable ascent on an H- or I-class motor, reliable recovery deployment, and a structurally intact vehicle after landing.
            </p>
            <p>
              Preflight work includes measured center-of-gravity verification, inspection of every threaded interface, positive motor retention, and recovery packing checks. The certification is accurately listed as <strong className="text-white">in progress</strong> until that flight is completed.
            </p>
          </div>
          <FigureCard src="/images/level1/Fig-8.png" caption="Manufactured modular components and assembled test hardware." fit="cover" />
        </div>
        <ProjectActions
          primary={{ href: 'https://doi.org/10.2514/6.2026-112524', label: 'Read the AIAA paper', external: true }}
          secondary={{ href: '/contact', label: 'Discuss the project' }}
        />
      </Section>
    </main>
  );
}
