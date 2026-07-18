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
  { label: 'Format', value: '4-week residential program' },
  { label: 'Workload', value: '~65 hours/week' },
  { label: 'Major', value: 'Mechanical & Aerospace Engineering' },
];

export default function GhpmAeroPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/ghp/Full-GHP-Engineering(Including-Other-Concentrations).jpeg"
        badge="Georgia Governor’s Honors Program · 2025"
        title="An intensive introduction to university-level engineering"
        subtitle="Four residential weeks connecting calculus-based analysis, computation, laboratory work, and a flight-hardware capstone."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="The program widened the lens around my project work" kicker="Program overview">
        <ProjectBrief
          items={[
            {
              label: 'Academic scope',
              title: 'Theory connected to applications',
              detail: 'Coursework moved from multivariable calculus and thermodynamics into signal processing, numerical methods, and engineering interpretation.',
            },
            {
              label: 'Applied scope',
              title: 'Long-form laboratory work',
              detail: 'Daily project blocks required sustained CAD, fabrication, testing, documentation, and technical discussion across several interdependent teams.',
            },
            {
              label: 'Capstone',
              title: 'ERAS2 ionic aircraft',
              detail: 'I joined the Engine subteam and helped develop the 24 g electroaerodynamic propulsion system documented in the linked case study.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              GHP brought together students from across Georgia for a residential academic program structured more like an accelerated university studio than a conventional high-school class. The Mechanical & Aerospace Engineering major combined short technical courses with intensive, team-based project execution.
            </p>
            <p>
              The format mattered as much as the subject matter: approximately 65 hours per week of lectures, labs, reviews, and project work made careful planning and sustained concentration necessary.
            </p>
          </div>
          <PullQuote>The value of GHP was learning to move fluently between equations, code, hardware, and team decisions.</PullQuote>
        </div>
      </Section>

      <Section id="curriculum" title="Coursework built a common analytical toolkit" kicker="Technical foundation">
        <TechnicalList
          items={[
            { label: 'Calculus-based physics', value: 'Derivatives and integrals were used to model motion, energy, loading, and other engineering systems rather than treated as isolated mathematical exercises.' },
            { label: 'Thermodynamics', value: 'Cantera supported computational exploration of state variables, reacting flows, combustion, and energy balances.' },
            { label: 'Signal processing', value: 'Python and NumPy were used to move audio from the time domain into frequency spectra with Fast Fourier Transforms.' },
            { label: 'Multivariable methods', value: 'Triple integrals and continuous distributions connected mathematical formulation to mass, density, and charge models.' },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard
            src="/images/ghp/Amplitude over Time for Moving Notes.png"
            caption="Time-domain amplitude from a moving French-horn note sequence."
          />
          <FigureCard
            src="/images/ghp/FFT of Moving Note.png"
            caption="Frequency-domain result identifying the dominant notes in the same recording."
          />
        </div>
      </Section>

      <Section id="workflow" title="The schedule rewarded disciplined engineering habits" kicker="Working method">
        <DecisionGrid
          items={[
            {
              label: 'Plan',
              title: 'Break ambiguous work into verifiable tasks',
              detail: 'We defined design tickets, owners, test conditions, and completion criteria before committing limited lab time and materials.',
            },
            {
              label: 'Execute',
              title: 'Move between digital and physical evidence',
              detail: 'Analysis and CAD narrowed the design space; fabrication and measurement determined which ideas survived contact with real constraints.',
            },
            {
              label: 'Communicate',
              title: 'Keep interfaces visible',
              detail: 'Long lab blocks still depended on concise handoffs, code and design reviews, shared documentation, and clear explanations to instructors and peers.',
            },
          ]}
        />
      </Section>

      <Section id="selection" title="Selection tested both preparation and collaboration" kicker="Program context">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p>
              Admission followed teacher nomination, school and district review, written materials, a technical portfolio, and state-level evaluation. The final stage included a group engineering challenge, a CAD exercise, and an individual interview.
            </p>
            <p>
              That process assessed more than accumulated activities. It required me to explain how I approached open-ended engineering problems, respond to unfamiliar constraints, and contribute constructively in a new team.
            </p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <p className="eyebrow">Lasting outcome</p>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/75">
              GHP confirmed that I can sustain an intensive, university-like workload while continuing to learn, build, and communicate across disciplines.
            </p>
          </div>
        </div>
        <ProjectActions primary={{ href: '/projects/eras2', label: 'View ERAS2 capstone' }} />
      </Section>
    </main>
  );
}
