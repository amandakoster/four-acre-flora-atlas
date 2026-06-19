"use client";

import { useState } from "react";
import { zones } from "@/data/zones";
import {
  habitatOptions,
  lightExposureOptions,
  soilMoistureOptions,
} from "@/constants/observationOptions";

export default function AddObservationForm() {
  const [formData, setFormData] = useState({
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
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

    alert("Observation ready to save.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <div>
        <label className="mb-1 block text-sm text-gray-400">Common Name</label>
        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.commonName}
          onChange={(event) => updateField("commonName", event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Scientific Name
        </label>
        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.scientificName}
          onChange={(event) =>
            updateField("scientificName", event.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Zone</label>
        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.zoneId}
          onChange={(event) => updateField("zoneId", event.target.value)}
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
          onChange={(event) => updateField("observedDate", event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Light Exposure
        </label>
        <select
          className="w-full rounded border border-zinc-700 bg-black p-2"
          value={formData.lightExposure}
          onChange={(event) => updateField("lightExposure", event.target.value)}
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
          onChange={(event) => updateField("soilMoisture", event.target.value)}
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
          onChange={(event) => updateField("habitat", event.target.value)}
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
          onChange={(event) => updateField("latitude", event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Longitude</label>
        <input
          className="w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.longitude}
          onChange={(event) => updateField("longitude", event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">Notes</label>
        <textarea
          className="min-h-32 w-full rounded border border-zinc-700 bg-transparent p-2"
          value={formData.notes}
          onChange={(event) => updateField("notes", event.target.value)}
        />
      </div>

      <button className="rounded border border-zinc-700 px-4 py-2 hover:bg-zinc-900">
        Save Observation
      </button>
    </form>
  );
}
