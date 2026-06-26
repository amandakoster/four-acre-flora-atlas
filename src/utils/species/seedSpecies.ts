import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Species } from "@/types/species";

type SeedSpecies = Pick<
  Species,
  | "id"
  | "common_name"
  | "scientific_name"
  | "zone_id"
  | "family"
  | "native_status"
  | "habitat"
  | "light_exposure"
  | "soil_moisture"
  | "observed_date"
  | "latitude"
  | "longitude"
  | "notes"
  | "source"
>;

export async function seedSpecies(species: SeedSpecies[] = []) {
  const supabase = await createSupabaseServerClient();

  const { data: seededSpecies, error } = await supabase
    .from("species")
    .upsert(species)
    .select();

  if (error) {
    throw error;
  }

  return seededSpecies;
}
