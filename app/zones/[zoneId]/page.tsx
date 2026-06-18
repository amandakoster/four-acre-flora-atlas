import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";
import { zoneData } from "@/data/zoneData";

type Props = {
  params: Promise<{
    zoneId: string;
  }>;
};

const formatSpeciesName = (speciesId: string) => {
  return speciesId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default async function ZonePage({ params }: Props) {
  const { zoneId } = await params;

  const zone = zones.find((z) => z.id === zoneId);

  const observations = zoneData[zoneId as keyof typeof zoneData] ?? [];

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">{zone?.name}</h1>

      <p className="mb-6 text-gray-400">{zone?.description}</p>

      <div className="space-y-4">
        {observations.map((o) => (
          <Card
            key={`${o.speciesId}-${o.observedDate}`}
            name={formatSpeciesName(o.speciesId)}
            description={o.notes}
          >
            <p className="text-sm text-gray-400">Observed: {o.observedDate}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
