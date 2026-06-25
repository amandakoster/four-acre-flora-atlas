import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";

async function ZonesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[color:var(--flora-moss)]">
          Explore • Document • Preserve
        </p>

        <h1 className="mb-4 text-4xl font-medium tracking-tight text-[color:var(--flora-text)]">
          Zones
        </h1>

        <p className="max-w-2xl text-base leading-7 text-[color:var(--flora-text-muted)]">
          Explore the different ecological areas of the property and discover
          the plants found within each one.
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm uppercase tracking-widest text-[color:var(--flora-text-muted)]">
            {zones.length} Total
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
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
    </main>
  );
}

export default ZonesPage;
