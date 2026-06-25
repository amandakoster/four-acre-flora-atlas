import Link from "next/link";
import { zones } from "@/data/zones";

async function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[color:var(--flora-moss)]">
          Explore • Document • Preserve
        </p>

        <h2 className="mb-4 text-4xl font-medium tracking-tight text-[color:var(--flora-text)]">
          Choose a Zone
        </h2>

        <p className="max-w-2xl text-base leading-7 text-[color:var(--flora-text-muted)]">
          Browse each area of the property to discover the trees, shrubs,
          flowers, vegetables, and native plants that make up Four-Acre Flora.
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
            <Link
              key={zone.id}
              href={`/zones/${zone.id}`}
              className="group rounded-2xl border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] px-6 py-4 backdrop-blur-md transition duration-300 hover:border-[color:var(--flora-border-hover)] hover:bg-[color:var(--flora-glass-hover)]"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[color:var(--flora-text)] transition group-hover:text-[color:var(--flora-sage)]">
                    {zone.name}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[color:var(--flora-text-muted)]">
                    {zone.description}
                  </p>
                </div>

                <span className="shrink-0 text-2xl text-[color:var(--flora-text-muted)] transition group-hover:translate-x-1 group-hover:text-[color:var(--flora-sage)]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
