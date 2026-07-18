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

const base = '/images/uga-airfoil';

const stats = [
  { label: 'Research duration', value: '8 weeks · 8 hr/day' },
  { label: 'Best measured efficiency', value: 'L/D ≈ 61.5' },
  { label: 'Recognition', value: 'AIAA Region II · First Place' },
];

export default function UgaAirfoilResearchPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image={`${base}/Cashton&Saahil-Presenting.jpeg`}
        badge="University of Georgia · Pidaparti Research Lab"
        title="Comparing bio-inspired and AI-designed airfoils"
        subtitle="An eight-week research workflow connecting XFOIL analysis, Fusion 360, additive manufacturing, wind-tunnel validation, and technical communication."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="The research question required both computation and experiment" kicker="Case study">
        <ProjectBrief
          items={[
            {
              label: 'My role',
              title: 'Full-pipeline student researcher',
              detail: 'Under Dr. Ramana Pidaparti’s mentorship, I worked across geometry selection, XFOIL analysis, CAD, fabrication, test-rig use, data interpretation, and presentation.',
            },
            {
              label: 'Research question',
              title: 'Nature, AI, or conventional design?',
              detail: 'We compared peregrine- and hawk-inspired sections, a generative-AI candidate, and a conventional control under matched analysis and test conditions.',
            },
            {
              label: 'Outcome',
              title: 'Awarded research and a conference paper',
              detail: 'The science-fair study earned regional gold and advanced to state competition; our AIAA paper won Region II Conference High School Category First Place.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              The study asked whether wing sections derived from high-performance birds would outperform both an AI-proposed geometry and a conventional baseline at the low-Reynolds-number conditions available in our wind tunnel.
            </p>
            <p>
              I spent full working days in the UGA lab for approximately eight weeks. That continuity allowed the project to develop as a research loop: screen computationally, manufacture consistently, measure physically, investigate disagreement, and communicate the limits of the result.
            </p>
          </div>
          <PullQuote>Simulation narrowed the design space; physical testing determined which conclusions were defensible.</PullQuote>
        </div>
      </Section>

      <Section id="method" title="A controlled workflow kept geometry as the main variable" kicker="Method">
        <DecisionGrid
          items={[
            {
              label: '01 · Define',
              title: 'Create a comparable candidate set',
              detail: 'Peregrine and hawk sections, an AI-generated profile, and a control were normalized into consistent coordinate definitions and screened for manufacturability.',
            },
            {
              label: '02 · Analyze',
              title: 'Use XFOIL to pre-screen performance',
              detail: 'Viscous panel-method analysis estimated lift coefficient, drag coefficient, and L/D across angle of attack and representative Reynolds numbers.',
            },
            {
              label: '03 · Fabricate',
              title: 'Hold hardware variables constant',
              detail: 'Fusion 360 models used consistent chord, span, and mounting interfaces before 3D printing and surface finishing.',
            },
            {
              label: '04 · Validate',
              title: 'Repeat matched wind-tunnel tests',
              detail: 'Fixed-angle mounts, baseline runs, repeated trials, and force logging supported comparison with the computational trends.',
            },
          ]}
          columns={2}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src={`${base}/Peregrine-Falcon-Inspired-Airfoil-Drawing.png`} caption="Peregrine-inspired profile transferred into a manufacturable section." />
          <FigureCard src={`${base}/Peregrine-Falcon-Inspired-CAD-Model.png`} caption="Corresponding Fusion 360 model with controlled span and test interface." />
        </div>
      </Section>

      <Section id="analysis" title="Computational results guided what entered the tunnel" kicker="XFOIL & CAD">
        <TechnicalList
          items={[
            { label: 'Primary outputs', value: 'Lift coefficient, drag coefficient, and lift-to-drag ratio across angle of attack.' },
            { label: 'Comparison basis', value: 'Matched Reynolds-number ranges and consistent geometry conventions across all four candidates.' },
            { label: 'Fabrication control', value: 'Common mounting features and dimensions reduced hardware differences unrelated to the airfoil profile.' },
            { label: 'Interpretation limit', value: 'XFOIL provided a two-dimensional numerical baseline; the wind-tunnel models included surface finish, alignment, and finite-span effects.' },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src={`${base}/Peregrine-Falcon-XFOIL-Results-Graph.png`} caption="Peregrine-inspired XFOIL polar used during candidate screening." />
          <FigureCard src={`${base}/CP-Metrics-Results-Graph.png`} caption="Composite comparison of control, bio-inspired, and AI-designed sections." />
        </div>
      </Section>

      <Section id="results" title="The strongest designs excelled in different metrics" kicker="Findings">
        <DecisionGrid
          items={[
            {
              label: 'Efficiency',
              title: 'Peregrine-inspired · L/D ≈ 61.5',
              detail: 'The peregrine-derived geometry produced the highest lift-to-drag ratio under the tested conditions, making it the most aerodynamically efficient candidate in the study.',
            },
            {
              label: 'Absolute lift',
              title: 'Hawk-inspired · up to 6.757 N',
              detail: 'The hawk section generated the greatest measured lift, illustrating that the preferred geometry depends on whether efficiency or lift capacity dominates the mission.',
            },
            {
              label: 'Design-space value',
              title: 'AI geometry remained competitive',
              detail: 'The generated airfoil approached the bio-inspired candidates in portions of the test range, supporting AI as an exploration tool rather than a substitute for validation.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src={`${base}/Final-Formative-Testing-Results.png`} caption="Formative tunnel runs used to refine setup and calibration." />
          <FigureCard src={`${base}/Final-WindTunnel(Summative-Testing)-Results.png`} caption="Summative wind-tunnel comparison under matched final conditions." />
        </div>
        <p>
          XFOIL and tunnel results agreed in their broad trends even when their absolute values differed. Surface roughness, printed tolerances, small alignment errors, and finite-model effects provided plausible explanations and became part of the final uncertainty discussion.
        </p>
      </Section>

      <Section id="communication" title="The work had to remain understandable beyond the lab" kicker="Research communication">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-5">
            <p>
              I first translated the research into a regional science-fair presentation with a physical interchangeable-wing demonstrator, plots, methods, and a clear account of experimental limitations. That presentation earned a regional gold medal and advanced to the state competition; the original science-fair board remains available below as supporting evidence.
            </p>
            <p>
              Cashton and I later presented the paper at the AIAA Region II Student Conference, where it received <strong className="text-white">High School Category First Place</strong>. Presenting the work in both settings reinforced a central research skill: technical depth only becomes useful when the assumptions, evidence, and uncertainty can be explained clearly to different audiences.
            </p>
          </div>
          <FigureCard
            src={`${base}/Cashton&Saahil-With-Award.jpeg`}
            caption="Cashton and me with our AIAA Region II Conference High School Category First Place awards."
            fit="cover"
          />
        </div>
        <FigureCard
          src={`${base}/Demonstration-Plane-Interchangeable-Wings-Picture.png`}
          caption="Interchangeable-wing aircraft used to make the geometry comparison tangible during presentation and outreach."
          wide
        />
        <ProjectActions
          primary={{ href: 'https://doi.org/10.2514/6.2026-111476', label: 'Read the AIAA paper', external: true }}
          secondary={{ href: '/Wing-Performance-Characteristics-Science-Fair.png', label: 'Open science-fair board' }}
        />
      </Section>
    </main>
  );
}
