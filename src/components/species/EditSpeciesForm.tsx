"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Species, SpeciesFormData } from "@/types/species";

type Props = {
  species: Species;
};

function EditSpeciesForm({ species }: Props) {
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
          onChange={(e) => updateField("common_name", e.target.value)}
          placeholder="Common Name"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.scientific_name ?? ""}
          onChange={(e) => updateField("scientific_name", e.target.value)}
          placeholder="Scientific Name"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.zone_id ?? ""}
          onChange={(e) => updateField("zone_id", e.target.value)}
          placeholder="Zone"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.habitat ?? ""}
          onChange={(e) => updateField("habitat", e.target.value)}
          placeholder="Habitat"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.light_exposure ?? ""}
          onChange={(e) => updateField("light_exposure", e.target.value)}
          placeholder="Light Exposure"
        />

        <input
          className="w-full rounded border p-2"
          value={formData.soil_moisture ?? ""}
          onChange={(e) => updateField("soil_moisture", e.target.value)}
          placeholder="Soil Moisture"
        />

        <textarea
          className="min-h-32 w-full rounded border p-2"
          value={formData.notes ?? ""}
          onChange={(e) => updateField("notes", e.target.value)}
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
