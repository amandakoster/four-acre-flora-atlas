import NavigationCard from "@/components/ui/NavigationCard";
import { supabase } from "@/lib/supabase";
import { Species } from "@/types/species";

type Props = {
  params: Promise<{
    zoneId: string;
  }>;
};

async function ZonePage({ params }: Props) {
  const { zoneId } = await params;

  const { data: zone, error: zoneError } = await supabase
    .from("zones")
    .select("*")
    .eq("id", zoneId)
    .maybeSingle();

  if (zoneError) {
    throw zoneError;
  }

  const { data, error: speciesError } = await supabase
    .from("species")
    .select("*")
    .eq("zone_id", zoneId)
    .order("common_name");

  if (speciesError) {
    throw speciesError;
  }

  const species: Species[] = data ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-(--flora-moss)">
          Explore • Document • Preserve
        </p>

        <h1 className="mb-4 text-4xl font-medium tracking-tight text-(--flora-text)">
          {zone?.name ?? zoneId}
        </h1>

        {zone?.description && (
          <p className="max-w-2xl text-base leading-7 text-(--flora-text-muted)">
            {zone.description}
          </p>
        )}
      </section>

      {species.length === 0 ? (
        <section className="rounded-2xl border border-(--flora-border) bg-(--flora-glass) p-8 backdrop-blur-md">
          <p className="text-(--flora-text-muted)">
            No species have been documented in this zone yet.
          </p>
        </section>
      ) : (
        <section>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm uppercase tracking-widest text-(--flora-text-muted)">
              {species.length} Species
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {species.map((plant) => (
              <NavigationCard
                key={plant.id}
                name={plant.common_name}
                description={plant.scientific_name ?? ""}
                href={`/species/${plant.id}`}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ZonePage;
