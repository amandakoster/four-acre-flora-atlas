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
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Species</h1>

      <div className="space-y-4">
        {species.map((plant) => (
          <Card
            key={plant.id}
            name={plant.common_name}
            description={plant.scientific_name ?? ""}
            href={`/species/${plant.id}`}
          />
        ))}
      </div>
    </main>
  );
}

export default SpeciesPage;
