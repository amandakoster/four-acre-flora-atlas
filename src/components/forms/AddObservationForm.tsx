"use client";

import { useState } from "react";
import { zones } from "@/data/zones";
import { supabase } from "@/lib/supabase";
import {
  habitatOptions,
  lightExposureOptions,
  soilMoistureOptions,
} from "@/constants/observationOptions";

const emptyFormData = {
  commonName: "",
  scientificName: "",
  zoneId: "",
  observedDate: "",
  lightExposure: "",
  soilMoisture: "",
  habitat: "",
  latitude: "",
  longitude: "",
  notes: "",
};

function AddObservationForm() {
  const [formData, setFormData] = useState(emptyFormData);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const createSpeciesId = (commonName: string) => {
    return commonName.trim().toLowerCase().replaceAll(" ", "-");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.commonName.trim()) {
      alert("Common Name is required.");
      return;
    }

    if (!formData.zoneId) {
      alert("Zone is required.");
      return;
    }

    if (!formData.observedDate) {
      alert("Observed Date is required.");
      return;
    }

    const speciesId = createSpeciesId(formData.commonName);

    const { error: speciesError } = await supabase.from("species").upsert({
      id: speciesId,
      common_name: formData.commonName,
      scientific_name: formData.scientificName || null,
      zone_id: formData.zoneId,
      observed_date: formData.observedDate,
      light_exposure: formData.lightExposure || null,
      soil_moisture: formData.soilMoisture || null,
      habitat: formData.habitat || null,
      latitude: formData.latitude ? Number(formData.latitude) : null,
      longitude: formData.longitude ? Number(formData.longitude) : null,
      notes: formData.notes || null,
      source: "manual",
    });

    if (speciesError) {
      console.error(speciesError);
      alert(speciesError.message);
      return;
    }

    alert("Species saved.");

    setFormData(emptyFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5 font-semibold">
      <div>
        <label className="mb-1 block text-sm text-gray-100">Common Name</label>

        <input
          className="w-full rounded border border-zinc-500 bg-transparent p-2"
          value={formData.commonName}
          onChange={(e) => updateField("commonName", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Scientific Name
        </label>

        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.scientificName}
          onChange={(e) => updateField("scientificName", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Zone</label>

        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.zoneId}
          onChange={(e) => updateField("zoneId", e.target.value)}
        >
          <option value="">Select zone</option>

          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Observed Date
        </label>

        <input
          type="date"
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.observedDate}
          onChange={(e) => updateField("observedDate", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Light Exposure
        </label>

        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.lightExposure}
          onChange={(e) => updateField("lightExposure", e.target.value)}
        >
          <option value="">Select light exposure</option>

          {lightExposureOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Soil Moisture
        </label>

        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.soilMoisture}
          onChange={(e) => updateField("soilMoisture", e.target.value)}
        >
          <option value="">Select soil moisture</option>

          {soilMoistureOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Habitat</label>

        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.habitat}
          onChange={(e) => updateField("habitat", e.target.value)}
        >
          <option value="">Select habitat</option>

          {habitatOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Latitude</label>

        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.latitude}
          onChange={(e) => updateField("latitude", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Longitude</label>

        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.longitude}
          onChange={(e) => updateField("longitude", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Notes</label>

        <textarea
          className="min-h-32 w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.notes}
          onChange={(e) => updateField("notes", e.target.value)}
        />
      </div>

      <button className="rounded border border-zinc-700 px-4 py-2 hover:bg-zinc-900">
        Save Species
      </button>
    </form>
  );
}

export default AddObservationForm;
