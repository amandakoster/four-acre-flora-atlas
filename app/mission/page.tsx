import MissionCard from "@/components/mission/MissionCard";
import MissionSection from "@/components/mission/MissionSection";
import PhaseCard from "@/components/mission/PhaseCard";
import { architecture, introduction, phases, principles } from "@/data/mission";

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

      <MissionSection title="Technology & Architecture">
        <div className="mb-5 max-w-3xl">
          <p className="leading-7 text-(--flora-text-muted)">
            Four-Acre Flora is built using a modern cloud-native architecture
            focused on simplicity, maintainability, and long-term stewardship.
            Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and Vercel
            provide a scalable foundation with automated deployments and a clean
            developer experience.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {architecture.map((technology) => (
            <MissionCard key={technology.title} title={technology.title}>
              <p>{technology.description}</p>
            </MissionCard>
          ))}
        </div>
      </MissionSection>
    </main>
  );
}

export default MissionPage;
