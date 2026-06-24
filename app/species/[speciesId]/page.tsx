import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Species } from "@/types/species";
import SpeciesHeader from "@/components/species/SpeciesHeader";
import SpeciesDetails from "@/components/species/SpeciesDetails";
import SpeciesActions from "@/components/species/SpeciesActions";

type Props = {
  params: Promise<{
    speciesId: string;
  }>;
};

async function SpeciesDetailPage({ params }: Props) {
  const { speciesId } = await params;

  const { data, error } = await supabase
    .from("species")
    .select("*")
    .eq("id", speciesId)
    .single();

  if (error || !data) {
    notFound();
  }

  const species: Species = data;

  return (
    <main className="p-10">
      <SpeciesHeader species={species} />

      <SpeciesDetails species={species} />

      <SpeciesActions species={species} />
    </main>
  );
}

export default SpeciesDetailPage;
