import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Species } from "@/types/species";
import SpeciesHeader from "@/components/species/SpeciesHeader";
import SpeciesDetails from "@/components/species/SpeciesDetails";
// import SpeciesActions from "@/components/species/SpeciesActions";

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
    <main className="mx-auto w-full max-w-7xl flex-1 px-8 pt-6 pb-12">
      <section className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-[color:var(--flora-moss)]">
          Explore • Document • Preserve
        </p>

        <SpeciesHeader species={species} />
      </section>

      <div className="space-y-8">
        <SpeciesDetails species={species} />

        {/* <SpeciesActions species={species} /> */}
      </div>
    </main>
  );
}

export default SpeciesDetailPage;
