import { supabase } from "@/lib/supabase";
import { species } from "@/data/species";

export async function seedSpecies() {
  const payload = species.map((item) => ({
    id: item.id,
    common_name: item.commonName,
    scientific_name: item.scientificName ?? null,
    source: item.source,
  }));

  const { data: seededSpecies, error } = await supabase
    .from("species")
    .upsert(payload)
    .select();

  if (error) {
    throw error;
  }

  return seededSpecies;
}
