import Link from "next/link";
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
    <main className="p-10">
      <h1 className="mb-4 text-5xl font-bold">{zone?.name ?? zoneId}</h1>

      <p className="mb-8 text-gray-400">{zone?.description ?? ""}</p>

      {species.length === 0 ? (
        <p>No species found in this zone.</p>
      ) : (
        <div className="space-y-4">
          {species.map((plant) => (
            <Link
              key={plant.id}
              href={`/species/${plant.id}`}
              className="block rounded border border-zinc-700 p-4 hover:bg-zinc-900"
            >
              <p className="font-bold">{plant.common_name}</p>

              {plant.scientific_name && (
                <p className="text-sm italic text-gray-400">
                  {plant.scientific_name}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default ZonePage;
