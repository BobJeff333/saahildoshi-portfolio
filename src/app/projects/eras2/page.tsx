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
  { label: 'Program intensity', value: '4 weeks · ~65 hr/week' },
  { label: 'Measured output', value: '24 g total thrust' },
  { label: 'Responsibility', value: 'Engine design & integration' },
];

export default function Eras2ProjectPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/eras2/Plane-In-Workshop.jpeg"
        badge="Georgia Governor’s Honors Program · 2025"
        title="ERAS2 — electroaerodynamic aircraft"
        subtitle="A four-week systems-engineering sprint to design, fabricate, test, and integrate an ionic-wind propulsion system into a flight-capable airframe."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="A propulsion problem constrained by the aircraft" kicker="Case study">
        <ProjectBrief
          items={[
            {
              label: 'My role',
              title: 'Engine subteam',
              detail: 'I developed electrode concepts, defined thrust-testing procedures, documented nonconformances, and coordinated engine-to-wing interfaces with the Flight team.',
            },
            {
              label: 'Design challenge',
              title: 'Thrust, mass, and corona stability',
              detail: 'The propulsion system needed repeatable discharge, adequate airflow, safe high-voltage operation, and attachment geometry that the lightweight airframe could actually carry.',
            },
            {
              label: 'Outcome',
              title: 'A functioning 24 g engine system',
              detail: 'Four 20-inch modules produced approximately 6 g each and were integrated into the completed aircraft for launch and flight testing.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              ERAS2 was the capstone for GHP’s Mechanical & Aerospace Engineering major. Our cohort developed a remote aircraft propelled by electrohydrodynamic thrust: a high-voltage field ionizes and accelerates air without a propeller or other moving propulsion components.
            </p>
            <p>
              I worked primarily on the engine system while supporting airfoil analysis and CAD integration. The work moved continuously between electrode geometry, physical tests, mass estimates, structural interfaces, and failure documentation in Jira.
            </p>
          </div>
          <PullQuote>Maximizing isolated thrust was not enough; the engine had to become part of a viable aircraft.</PullQuote>
        </div>
      </Section>

      <Section id="development" title="Three decisions shaped the final engine" kicker="Design evolution">
        <DecisionGrid
          items={[
            {
              label: 'V1 · Discharge',
              title: 'Reject weak electrode concepts',
              detail: 'Wire cathodes and copper-plated anodes did not provide the conductivity, corona stability, or mass efficiency we needed. Serrated sheet metal produced a stronger, more visible discharge.',
            },
            {
              label: 'V2 · Modularity',
              title: 'Break the span into testable units',
              detail: 'We replaced heavy wing-length concepts with modular units aligned to structural ribs. This made electrode spacing repeatable and allowed damaged sections to be swapped quickly.',
            },
            {
              label: 'V3 · Integration',
              title: 'Stack four flight-ready modules',
              detail: 'The final system used four 20-inch units, acrylic brackets, dual sheet-metal anodes, one serrated cathode per unit, and a dedicated transformer for each module.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard
            src="/images/eras2/Engine-Thrust-Test-Rig.jpeg"
            caption="Final electrode modules in the rigid thrust-test fixture."
            fit="cover"
          />
          <FigureCard
            src="/images/eras2/FEA-Final-Engine-Design.png"
            caption="Structural analysis used to evaluate the final engine support geometry."
          />
        </div>
      </Section>

      <Section id="verification" title="Testing converted failures into interface changes" kicker="Verification">
        <TechnicalList
          items={[
            { label: 'Thrust method', value: 'A rigid enclosure transferred engine force to a scale; mass change was logged and converted to thrust for geometry comparisons.' },
            { label: 'Electrical load', value: 'Each high-voltage transformer drew approximately 0.7 A at 12 V, making power distribution and safe clearances part of the integration problem.' },
            { label: 'Flow comparison', value: 'Copper wrapping did not materially improve airflow: approximately 2.3 m/s compared with a 2.37 m/s control, so the added mass was rejected.' },
            { label: 'Corrective action', value: 'After an attachment failure, I documented the nonconformance and helped move the design toward one-piece brackets and spar-aligned hardpoints.' },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-[0.8fr,1.2fr]">
          <FigureCard
            src="/images/eras2/Anode-Fabrication.jpg"
            caption="Fabricating a lightweight electrode support with repeatable spacing."
            portrait
            fit="cover"
          />
          <FigureCard
            src="/images/eras2/Plane-In-Workshop.jpeg"
            caption="Integrated airframe in the lab, showing the spanwise engine installation and central electronics bay."
            portrait
            fit="cover"
            position="object-center"
          />
        </div>
      </Section>

      <Section id="flight" title="The finished system reached flight testing" kicker="Outcome">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-5">
            <p>
              The final engine produced approximately <strong className="text-white">24 g of total measured thrust</strong>. The rectangular WASP-derived wing simplified manufacturing while providing a broad lift-to-drag plateau, and spar-integrated hardpoints resolved the primary engine attachment risk.
            </p>
            <p>
              The resulting aircraft progressed from a workshop assembly to launcher tests and a functioning airborne system. More importantly, the project established a disciplined loop: test, document, correct, and verify at the system level.
            </p>
          </div>
          <FigureCard
            src="/images/eras2/ERAS2-Plane-Flying.jpeg"
            caption="ERAS2 airborne during the final test campaign."
            fit="cover"
          />
        </div>
        <FigureCard
          src="/images/eras2/Full-Team-Photo-With-Plane.PNG"
          caption="The ERAS2 cohort with the completed electroaerodynamic aircraft."
          wide
          fit="cover"
          position="object-center"
        />
      </Section>

      <Section id="documentation" title="Documentation and program context" kicker="Next">
        <p className="max-w-3xl">
          The project was managed with Jira design tickets, test plans, and nonconformance reports, including ERAS2-7, ERAS2-8, ERAS2-101, and ERAS2-137. The broader GHP page explains the coursework and residential program surrounding this capstone.
        </p>
        <ProjectActions
          primary={{ href: '/projects/ghp-mechanical-aero', label: 'View GHP program' }}
          secondary={{ href: '/images/eras2/Anode%20Blades.pdf', label: 'Open anode drawing' }}
        />
      </Section>
    </main>
  );
}
