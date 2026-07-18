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
  { label: 'National placement', value: '24th' },
  { label: 'Qualifying score', value: '9 points' },
  { label: 'My role', value: 'Co-Captain' },
];

export default function ArcProjectPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png"
        badge="American Rocketry Challenge · 2024"
        title="Engineering repeatability into a precision flight mission"
        subtitle="A 605 g competition rocket optimized for an 820 ft apogee, a 43 - 46 second flight, and the safe recovery of a raw egg payload."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="Small score differences came from system-level discipline" kicker="Case study">
        <ProjectBrief
          items={[
            {
              label: 'My role',
              title: 'Co-Captain',
              detail: 'I led vehicle design, OpenRocket simulation, custom-component CAD, test planning, and field decisions through the qualifying campaign.',
            },
            {
              label: 'Mission challenge',
              title: 'Hit altitude and time simultaneously',
              detail: 'Mass, stability, drag, motor performance, parachute descent, wind, and egg protection all influenced the same composite score.',
            },
            {
              label: 'Outcome',
              title: '24th nationally',
              detail: 'A qualifying score of 9 advanced the team to the national finals and created the performance record that led into NASA Student Launch.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              ARC rewards precision rather than maximum performance. The rocket had to carry and recover an uncracked egg while approaching a fixed altitude and remaining aloft inside a narrow timing window.
            </p>
            <p>
              That scoring model made every subsystem adjustable. We treated ballast, drag, parachute behavior, and motor choice as controllable variables and recorded each flight closely enough to make the next change intentional.
            </p>
          </div>
          <PullQuote>The objective was not to build the highest-flying rocket; it was to build a vehicle we could tune predictably.</PullQuote>
        </div>
      </Section>

      <Section id="constraints" title="The rules became an engineering specification" kicker="Mission definition">
        <TechnicalList
          items={[
            { label: 'Target apogee', value: '820 ft under the 2024 ruleset.' },
            { label: 'Flight duration', value: '43 - 46 seconds from launch to landing.' },
            { label: 'Mass', value: '605 g flight-ready with egg payload, below the 650 g maximum.' },
            { label: 'Propulsion', value: 'AeroTech F32-6T motor.' },
            { label: 'Recovery', value: '24 in parachute and Kevlar shock cord in a single-deployment architecture.' },
            { label: 'Vehicle', value: '60 in long BT-80 airframe with a Jolly Logic AltimeterTwo.' },
          ]}
        />
        <FigureCard
          src="/images/arc/Assembled-Rocket-470x80.png"
          caption="The complete 60-inch competition vehicle with its recovery and egg-payload sections."
          wide
        />
      </Section>

      <Section id="design" title="Adjustability made the vehicle useful across changing conditions" kicker="Design decisions">
        <DecisionGrid
          items={[
            {
              label: 'Mass properties',
              title: 'Tune ballast without rebuilding',
              detail: 'A custom Fusion 360 nose cone used adjustable infill and ballast volume to move the center of gravity and control apogee between tests.',
            },
            {
              label: 'Aft geometry',
              title: 'Integrate motor and fin interfaces',
              detail: 'The reinforced tail cone located the AeroTech motor and Delrin fin interfaces while keeping the aft section serviceable after field damage.',
            },
            {
              label: 'Recovery',
              title: 'Treat descent time as a design variable',
              detail: 'Parachute sizing, packing, and shock-cord configuration were iterated to protect the egg while keeping total time inside the scoring window.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/arc/NoseCone-230x300.png" caption="Custom printed nose cone used to tune forward mass." portrait />
          <FigureCard src="/images/arc/Engine-Bay-With-Motor.png" caption="Motor bay, tail cone, and fin interfaces in the flight configuration." />
        </div>
      </Section>

      <Section id="testing" title="Approximately fifteen flights turned variation into data" kicker="Iteration">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-5">
            <p>
              OpenRocket established the initial stability and altitude model, but real flights exposed motor variation, wind drift, recovery packing effects, and rebuild differences. We logged configuration, ballast, weather, altitude, and time so those effects could be separated.
            </p>
            <p>
              A small launch field and repeated tree recoveries also made durability part of performance. Each repair was followed by a mass-property and alignment check before the next flight.
            </p>
          </div>
          <FigureCard
            src="/images/arc/Flight-Logs-650x180.png"
            caption="Flight log used to compare altitude, time, weather, and configuration changes."
            wide
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/arc/Rocket-Configurations-Spreadsheet-330x230.png" caption="Configuration matrix for mass, ballast, and predicted behavior." />
          <FigureCard src="/images/arc/Rocket-Configs-Spreadsheet2-330x230.png" caption="Additional test configurations and stability values." />
        </div>
      </Section>

      <Section id="result" title="The qualifying campaign established a national result" kicker="Outcome">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <p>
              The final qualifying score of <strong className="text-white">9</strong> placed the team <strong className="text-white">24th in the nation</strong>. The result validated a simulation-led, test-heavy process and advanced us to the national finals.
            </p>
            <p>
              ARC also established the team’s foundation for NASA Student Launch: documented testing, custom fabrication, disciplined field operations, and confidence working across an integrated launch vehicle.
            </p>
          </div>
          <FigureCard
            src="/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png"
            caption="The national-finalist team during Capitol Hill recognition."
            fit="cover"
          />
        </div>
      </Section>

      <Section id="airbrake" title="Current development: reducing the final altitude uncertainty" kicker="2026 airbrake system">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-5">
            <p>
              This year, I am extending the ARC work by designing and manufacturing an active airbrake system. The objective is to reduce sensitivity to motor impulse variation, flight mass, atmospheric conditions, and small assembly differences so the vehicle can approach the target altitude with a smaller and more repeatable error.
            </p>
            <p>
              The current design uses a compact servo-driven mechanism to deploy three drag panels around the airframe. Controlled deployment adds an adjustable source of aerodynamic drag during ascent, creating a way to correct a predicted overshoot instead of relying entirely on passive configuration changes made before launch.
            </p>
            <div className="border-l border-accentneongreen py-2 pl-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary-foreground/50">Current status</p>
              <p className="mt-2 text-lg font-medium text-white">Mechanical design and manufacturing in progress</p>
            </div>
          </div>
          <FigureCard
            src="/images/arc/Airbrake-Design-ARC.png"
            caption="Current airbrake CAD showing the central servo, synchronized linkage arms, and three deployable drag panels."
          />
        </div>

        <DecisionGrid
          items={[
            {
              label: 'Control objective',
              title: 'Drive altitude error toward zero',
              detail: 'The airbrake is intended to trim excess predicted apogee while preserving a stable ascent and the rest of the competition vehicle’s flight requirements.',
            },
            {
              label: 'Mechanical focus',
              title: 'Deploy three panels repeatably',
              detail: 'The mechanism must package inside the airframe, move each panel consistently, limit backlash, and tolerate aerodynamic loading without binding.',
            },
            {
              label: 'Verification focus',
              title: 'Connect deployment to measured drag',
              detail: 'Ground testing and flight data will be used to characterize deployment behavior, refine the drag model, and determine how much correction the system can reliably provide.',
            },
          ]}
        />
        <ProjectActions primary={{ href: '/projects/nasa-sli', label: 'Continue to NASA SLI' }} />
      </Section>
    </main>
  );
}
