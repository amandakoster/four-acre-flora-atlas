import Card from "@/components/ui/Card";
import { supabase } from "@/lib/supabase";
import { Species } from "@/types/species";

async function SpeciesPage() {
  const { data, error } = await supabase
    .from("species")
    .select("*")
    .order("common_name");

  if (error) {
    throw error;
  }

  const species: Species[] = data ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[color:var(--flora-moss)]">
          Explore • Document • Preserve
        </p>

        <h1 className="mb-4 text-4xl font-medium tracking-tight text-[color:var(--flora-text)]">
          Species
        </h1>

        <p className="max-w-2xl text-base leading-7 text-[color:var(--flora-text-muted)]">
          Browse every documented plant currently cataloged across the Four-Acre
          Flora property.
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm uppercase tracking-widest text-[color:var(--flora-text-muted)]">
            {species.length} Total
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {species.map((plant) => (
            <Card
              key={plant.id}
              name={plant.common_name}
              description={plant.scientific_name ?? ""}
              href={`/species/${plant.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SpeciesPage;
