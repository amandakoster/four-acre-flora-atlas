import { Species } from "@/types/species";

type Props = {
  species: Species;
};

type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-2xl border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] p-4 backdrop-blur-md">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--flora-moss)]">
        {title}
      </h2>

      {children}
    </section>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
}) {
  return (
    <div className="flex justify-between gap-4 py-1">
      <span className="text-sm text-[color:var(--flora-text-muted)]">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-[color:var(--flora-text)]">
        {value ?? "Unknown"}
      </span>
    </div>
  );
}

function SpeciesDetails({ species }: Props) {
  return (
    <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
      <Card title="Photo">
        <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-[color:var(--flora-border)]">
          <span className="text-sm text-[color:var(--flora-text-muted)]">
            Photo Coming Soon
          </span>
        </div>
      </Card>

      <div className="space-y-5">
        <Card title="Plant Information">
          <div className="grid gap-x-10 md:grid-cols-2">
            <div>
              <Row label="Family" value={species.family} />
              <Row label="Native" value={species.native_status} />
              <Row label="Habitat" value={species.habitat} />
              <Row label="Light" value={species.light_exposure} />
            </div>

            <div>
              <Row label="Moisture" value={species.soil_moisture} />
              <Row label="Observed" value={species.observed_date} />
              <Row label="Zone" value={species.zone_id} />
              <Row label="Source" value={species.source} />
            </div>
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-[280px_1fr]">
          <Card title="Location">
            <Row label="Latitude" value={species.latitude} />
            <Row label="Longitude" value={species.longitude} />
          </Card>

          <Card title="Field Notes">
            <div className="max-h-40 overflow-y-auto">
              <p className="whitespace-pre-wrap text-sm leading-7 text-[color:var(--flora-text-muted)]">
                {species.notes ??
                  "No field notes have been recorded for this species."}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SpeciesDetails;
