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
  { label: 'Current position', value: 'Cadet Captain · Commander' },
  { label: 'Unit responsibility', value: '~30 cadets' },
  { label: 'Experience', value: '3+ years' },
];

export default function CivilAirPatrolPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/cap/Emcee-During-Ceremony.JPEG"
        badge="Civil Air Patrol · Athens, Georgia"
        title="Leadership practiced through operations, instruction, and service"
        subtitle="As Cadet Commander, I translate squadron objectives into weekly training, develop junior leaders, and maintain professional standards across a 30-cadet corps."
      />
      <ProjectStats items={stats} />

      <Section id="command" title="Command is a system for developing people" kicker="Leadership scope">
        <ProjectBrief
          items={[
            {
              label: 'Responsibility',
              title: 'Set direction and standards',
              detail: 'I define weekly objectives, run cadet staff meetings, delegate through the chain of command, and coordinate safety and scheduling with senior members.',
            },
            {
              label: 'Method',
              title: 'Plan, observe, and coach',
              detail: 'Training is paired with promotion boards, after-action reviews, and direct feedback so cadets know both the standard and the next step toward it.',
            },
            {
              label: 'Progression',
              title: 'Lead with operational context',
              detail: 'Previous roles in flight leadership, operations, and support taught me how instruction, logistics, accountability, and morale interact.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <p>
              I serve at the top of the cadet chain of command for a squadron based at Ben Epps Airport. The role is less about issuing instructions than building a staff that can carry intent through planning, instruction, drill, and follow-up.
            </p>
            <p>
              My leadership philosophy is deliberately structured: set clear expectations, delegate real ownership, inspect results, and use specific feedback to help cadets improve. Standards remain firm, but the objective is growth rather than compliance alone.
            </p>
          </div>
          <PullQuote>A strong cadet program should become less dependent on its commander as new leaders learn to take ownership.</PullQuote>
        </div>
      </Section>

      <Section id="operations" title="Weekly meetings operate as a repeatable training cycle" kicker="Squadron operations">
        <TechnicalList
          items={[
            { label: 'Cadence', value: 'Three hours every Tuesday, supported by a staff sync that assigns instructors, objectives, resources, and accountability.' },
            { label: 'Instruction', value: 'Aerospace, leadership, character, drill, and fitness blocks combine short explanations with practical exercises and peer-led teaching.' },
            { label: 'Assessment', value: 'Promotion boards and after-action reviews translate observations into specific next actions for individual cadets and the staff.' },
            { label: 'Mentorship', value: 'More than 50 cadets have moved through the unit during my three years, requiring instruction that adapts to different experience and confidence levels.' },
          ]}
        />
        <DecisionGrid
          items={[
            {
              label: 'Before',
              title: 'Define the learning objective',
              detail: 'Every block begins with an observable goal, a responsible instructor, required equipment, and a realistic time allocation.',
            },
            {
              label: 'During',
              title: 'Turn concepts into action',
              detail: 'Aerodynamics becomes a model-rocket activity; leadership becomes a team problem; drill makes attention, precision, and delegation visible.',
            },
            {
              label: 'After',
              title: 'Close the feedback loop',
              detail: 'Cadets identify what worked, receive specific coaching, and carry one or two improvements into the next meeting or promotion cycle.',
            },
          ]}
        />
      </Section>

      <Section id="field-leadership" title="High-tempo training tested the same system under pressure" kicker="Encampment & RCLS">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p>
              As Hotel Flight Sergeant at encampment, I led 20 cadets through six demanding days of formations, drill, physical training, inspections, and instruction. I managed accountability and timing while helping first-time cadets work through stress and homesickness.
            </p>
            <p>
              Regional Cadet Leadership School at Maxwell Air Force Base then extended that experience into advanced management, instructional technique, and leadership analysis. Together, the programs strengthened my ability to be direct without losing empathy or situational awareness.
            </p>
          </div>
          <div className="space-y-6">
            <FigureCard
              src="/images/cap/Full-RCLS-Photo.JPG"
              caption="Regional Cadet Leadership School cohort at Maxwell Air Force Base."
              fit="cover"
            />
            <FigureCard
              src="/images/cap/RCLS-Photo-ABUS-CAP-Plane.JPG"
              caption="RCLS participants at Air University with a Civil Air Patrol aircraft."
              fit="cover"
            />
          </div>
        </div>
      </Section>

      <Section id="service" title="Public events make professionalism visible" kicker="Service & initiatives">
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard
            src="/images/cap/Color-Guard-Photo.JPEG"
            caption="Leading the squadron Color Guard during a Wreaths Across America ceremony."
            fit="cover"
          />
          <FigureCard
            src="/images/cap/Wreath-Ceremony.JPEG"
            caption="Community participants and service organizations at the Winterville wreath-laying ceremony."
            fit="cover"
          />
        </div>
        <DecisionGrid
          columns={2}
          items={[
            {
              label: 'Community service',
              title: 'Wreaths Across America',
              detail: 'I led the ceremony and Color Guard, coordinated public-facing execution, and represented the squadron before veterans, families, and community partners.',
            },
            {
              label: 'Aerospace exposure',
              title: 'Learning beyond the meeting room',
              detail: 'I organized experiences including an air-traffic-control tower tour and indoor skydiving to connect instruction with real aviation operations and airflow physics.',
            },
            {
              label: 'Team resilience',
              title: 'Hike and ruck march',
              detail: 'Planning a demanding outdoor activity required readiness checks, safety planning, pacing, and deliberate attention to team cohesion.',
            },
            {
              label: 'Leader development',
              title: 'Promotion and milestone preparation',
              detail: 'I mentor cadets through role transitions and formal progression while completing the Wright Brothers, Mitchell, and Earhart milestone requirements myself.',
            },
          ]}
        />
      </Section>

      <Section id="impact" title="CAP complements the technical side of aerospace" kicker="Reflection">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <p>
              Rocketry and research taught me to analyze systems; Civil Air Patrol taught me how systems are operated by people. Schedules, interfaces, standards, and feedback matter in both settings, but leadership requires interpreting those structures through individual needs and team dynamics.
            </p>
            <p>
              That experience now shapes how I lead engineering teams: clarify the mission, create ownership, communicate under pressure, and make every review useful to the person doing the work.
            </p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <p className="eyebrow">Core capabilities</p>
            <p className="mt-4 leading-7 text-primary-foreground/70">Operational planning · Instructional design · Mentorship · Public communication · Standards and accountability</p>
          </div>
        </div>
        <ProjectActions />
      </Section>
    </main>
  );
}
