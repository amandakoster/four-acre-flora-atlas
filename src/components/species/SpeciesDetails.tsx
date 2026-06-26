import DetailCard from "@/components/ui/DetailCard";
import DetailRow from "@/components/ui/DetailRow";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { Species } from "@/types/species";

type Props = {
  species: Species;
};

function SpeciesDetails({ species }: Props) {
  const plantInformation: [string, string | number | null][] = [
    ["Family", species.family],
    ["Native", species.native_status],
    ["Habitat", species.habitat],
    ["Light", species.light_exposure],
    ["Moisture", species.soil_moisture],
    ["Observed", species.observed_date],
    ["Zone", species.zone_id],
    ["Source", species.source],
  ];

  const locationInformation: [string, string | number | null][] = [
    ["Latitude", species.latitude],
    ["Longitude", species.longitude],
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <div className="hidden lg:block">
          <DetailCard title="Photo">
            <PhotoPlaceholder />
          </DetailCard>
        </div>

        <DetailCard title="Plant Information">
          <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
            {plantInformation.map(([label, value], index) => (
              <div key={label}>
                <DetailRow label={label} value={value} />

                {index === 3 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </DetailCard>
      </div>

      <div className="grid gap-5 md:grid-cols-[240px_1fr]">
        <DetailCard title="Location">
          {locationInformation.map(([label, value]) => (
            <DetailRow key={label} label={label} value={value} />
          ))}
        </DetailCard>

        <DetailCard title="Field Notes">
          <div className="max-h-32 overflow-y-auto">
            <p className="whitespace-pre-wrap text-sm leading-6 text-(--flora-text-muted)">
              {species.notes ??
                "No field notes have been recorded for this species."}
            </p>
          </div>
        </DetailCard>
      </div>
    </div>
  );
}

export default SpeciesDetails;
