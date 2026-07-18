export type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="border-l border-accentneongreen/70 bg-white/[0.025] px-5 py-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground/55">{label}</p>
      <p className="mt-2 text-xl font-medium tracking-[-0.025em] text-white">{value}</p>
    </div>
  );
}
