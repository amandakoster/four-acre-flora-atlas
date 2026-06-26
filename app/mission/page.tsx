import MissionCard from "@/components/mission/MissionCard";
import MissionSection from "@/components/mission/MissionSection";
import PhaseCard from "@/components/mission/PhaseCard";
import { introduction, phases, principles, technologies } from "@/data/mission";

function MissionPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-8 pt-6 pb-10">
      <section className="mb-12 max-w-5xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.4em] text-(--flora-moss)">
          Mission
        </p>

        <div className="space-y-4 leading-7 text-(--flora-text-muted)">
          {introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <MissionSection title="Core Principles">
        <div className="grid gap-4 lg:grid-cols-3">
          {principles.map((principle) => (
            <MissionCard key={principle.title} title={principle.title}>
              <p>{principle.description}</p>
            </MissionCard>
          ))}
        </div>
      </MissionSection>

      <MissionSection title="Development Roadmap">
        <div className="grid gap-4 lg:grid-cols-3">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              items={phase.items}
            />
          ))}
        </div>
      </MissionSection>

      <MissionSection title="Built With">
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-(--flora-border) bg-(--flora-glass) px-3 py-1 text-sm text-(--flora-text-muted)"
            >
              {technology}
            </span>
          ))}
        </div>
      </MissionSection>
    </main>
  );
}

export default MissionPage;
