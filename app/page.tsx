import Link from "next/link";
import { zones } from "@/data/zones";

async function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-emerald-400">
          Explore • Document • Preserve
        </p>

        <h2 className="mb-4 text-4xl font-medium tracking-tight text-stone-100">
          Choose a Zone
        </h2>

        <p className="max-w-2xl text-base leading-7 text-stone-300">
          Browse each area of the property to discover the trees, shrubs,
          flowers, vegetables, and native plants that make up Four-Acre Flora.
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-stone-100">Zones</h3>

          <span className="text-sm uppercase tracking-widest text-stone-500">
            {zones.length} Total
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {zones.map((zone) => (
            <Link
              key={zone.id}
              href={`/zones/${zone.id}`}
              className="group rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md transition duration-300 hover:border-emerald-400/40 hover:bg-black/60"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-stone-100 transition group-hover:text-emerald-400">
                    {zone.name}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    {zone.description}
                  </p>
                </div>

                <span className="shrink-0 text-2xl text-stone-500 transition group-hover:translate-x-1 group-hover:text-emerald-400">
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
