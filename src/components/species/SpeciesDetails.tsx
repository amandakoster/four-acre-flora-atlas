import { Species, SpeciesField } from "@/types/species";

type Props = {
  species: Species;
};

function SpeciesDetails({ species }: Props) {
  const fields: SpeciesField[] = [
    ["Zone", species.zone_id],
    ["Family", species.family],
    ["Native Status", species.native_status],
    ["Habitat", species.habitat],
    ["Light Exposure", species.light_exposure],
    ["Soil Moisture", species.soil_moisture],
    ["Observed Date", species.observed_date],
    ["Latitude", species.latitude],
    ["Longitude", species.longitude],
    ["Source", species.source],
  ];

  return (
    <div className="space-y-4">
      {fields.map(([label, value]) => (
        <p key={label}>
          <strong>{label}:</strong> {value ?? "Unknown"}
        </p>
      ))}

      <div>
        <strong>Notes:</strong>

        <p className="mt-2 whitespace-pre-wrap">
          {species.notes ?? "No notes"}
        </p>
      </div>
    </div>
  );
}

export default SpeciesDetails;
