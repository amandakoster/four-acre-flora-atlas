import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ZoneRecord = {
  id: string;
  name: string;
  description: string;
};

export async function getZones(): Promise<ZoneRecord[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("zones")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data ?? [];
}
