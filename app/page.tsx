import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";
import { observations } from "@/data/observations";
import { species } from "@/data/species";

const speciesMap = Object.fromEntries(species.map((s) => [s.id, s.commonName]));

export default function Home() {
  const recent = [...observations]
    .sort((a, b) => (a.observedDate < b.observedDate ? 1 : -1))
    .slice(0, 8);

  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Four-Acre Flora</h1>

      {/* HARD 50/50 SPLIT — GUARANTEED */}
      <div className="grid grid-cols-2 gap-10 w-full">
        {/* LEFT */}
        <section className="w-full min-w-0">
          <h2 className="mb-4 text-2xl font-bold">Zones</h2>

          <div className="space-y-4 w-full">
            {zones.map((zone) => (
              <Card
                key={zone.id}
                name={zone.name}
                description={zone.description}
                href={`/zones/${zone.id}`}
              />
            ))}
          </div>
        </section>

        {/* RIGHT */}
        <section className="w-full min-w-0">
          <h2 className="mb-4 text-2xl font-bold">Recent Observations</h2>

          <div className="space-y-4 w-full">
            {recent.map((o) => (
              <Card
                key={o.id}
                name={speciesMap[o.speciesId] ?? o.speciesId}
                description={`${o.zoneId} • ${o.observedDate}`}
                href={`/zones/${o.zoneId}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
