import { supabase } from "@/lib/supabase";

export type ZoneRecord = {
  id: string;
  name: string;
  description: string;
};

export async function getZones(): Promise<ZoneRecord[]> {
  const { data, error } = await supabase
    .from("zones")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data ?? [];
}
