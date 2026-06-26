"use client";

import { useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Species, SpeciesFormData } from "@/types/species";

type Props = {
  species: Species;
};

function EditSpeciesForm({ species }: Props) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [formData, setFormData] = useState<SpeciesFormData>({
    common_name: species.common_name,
    scientific_name: species.scientific_name,
    zone_id: species.zone_id,
    habitat: species.habitat,
    light_exposure: species.light_exposure,
    soil_moisture: species.soil_moisture,
    notes: species.notes,
  });

  const updateField = (field: keyof SpeciesFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("species")
      .update(formData)
      .eq("id", species.id);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.reload();
  };

  return (
    <div className="rounded border p-4">
      <h2 className="mb-6 text-2xl font-bold">Edit Species</h2>

      <div className="space-y-4">
        <input
          className="w-full rounded border p-2"
          value={formData.common_name ?? ""}
          onChange={(event) => updateField("common_name", event.target.value)}
          placeholder="Common Name"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.scientific_name ?? ""}
          onChange={(event) =>
            updateField("scientific_name", event.target.value)
          }
          placeholder="Scientific Name"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.zone_id ?? ""}
          onChange={(event) => updateField("zone_id", event.target.value)}
          placeholder="Zone"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.habitat ?? ""}
          onChange={(event) => updateField("habitat", event.target.value)}
          placeholder="Habitat"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.light_exposure ?? ""}
          onChange={(event) =>
            updateField("light_exposure", event.target.value)
          }
          placeholder="Light Exposure"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.soil_moisture ?? ""}
          onChange={(event) => updateField("soil_moisture", event.target.value)}
          placeholder="Soil Moisture"
        />

        <textarea
          className="min-h-32 w-full rounded border p-2"
          value={formData.notes ?? ""}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Notes"
        />

        <button onClick={handleSave} className="rounded border px-4 py-2">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditSpeciesForm;
