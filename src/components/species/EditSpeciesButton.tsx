"use client";

import { useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Props = {
  species: {
    id: string;
    common_name: string | null;
    scientific_name: string | null;
    habitat: string | null;
    notes: string | null;
  };
};

function EditSpeciesButton({ species }: Props) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [editing, setEditing] = useState(false);

  const [commonName, setCommonName] = useState(species.common_name ?? "");

  const [scientificName, setScientificName] = useState(
    species.scientific_name ?? "",
  );

  const [habitat, setHabitat] = useState(species.habitat ?? "");

  const [notes, setNotes] = useState(species.notes ?? "");

  const handleSave = async () => {
    const { error } = await supabase
      .from("species")
      .update({
        common_name: commonName,
        scientific_name: scientificName,
        habitat,
        notes,
      })
      .eq("id", species.id);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.reload();
  };

  if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="rounded border px-4 py-2"
      >
        Edit Species
      </button>
    );
  }

  return (
    <div className="space-y-4 rounded border p-4">
      <input
        className="w-full rounded border p-2"
        value={commonName}
        onChange={(event) => setCommonName(event.target.value)}
      />

      <input
        className="w-full rounded border p-2"
        value={scientificName}
        onChange={(event) => setScientificName(event.target.value)}
      />

      <input
        className="w-full rounded border p-2"
        value={habitat}
        onChange={(event) => setHabitat(event.target.value)}
      />

      <textarea
        className="min-h-32 w-full rounded border p-2"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <button onClick={handleSave} className="rounded border px-4 py-2">
        Save
      </button>
    </div>
  );
}

export default EditSpeciesButton;
