"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  speciesId: string;
  speciesName: string;
};

function DeleteSpeciesButton({ speciesId, speciesName }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete ${speciesName}?`);

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("species")
      .delete()
      .eq("id", speciesId);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/species");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded border border-red-700 px-4 py-2 text-red-400 hover:bg-red-950"
    >
      Delete Species
    </button>
  );
}

export default DeleteSpeciesButton;
