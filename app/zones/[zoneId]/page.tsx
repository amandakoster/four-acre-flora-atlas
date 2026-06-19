import Card from "@/components/ui/Card";
import { observations } from "@/data/observations";
import { species } from "@/data/species";
import { zones } from "@/data/zones";

type Props = {
  params: Promise<{
    zoneId: string;
  }>;
};

export default async function ZonePage({ params }: Props) {
  const { zoneId } = await params;

  const zone = zones.find((z) => z.id === zoneId);

  const zoneObservations = observations.filter(
    (observation) => observation.zoneId === zoneId,
  );

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">{zone?.name}</h1>

      <p className="mb-6 text-gray-400">{zone?.description}</p>

      <div className="space-y-4">
        {zoneObservations.map((observation) => {
          const speciesRecord = species.find(
            (s) => s.id === observation.speciesId,
          );

          return (
            <Card
              key={observation.id}
              name={speciesRecord?.commonName ?? observation.speciesId}
              description={observation.notes}
            >
              <p className="text-sm text-gray-400">
                Observed: {observation.observedDate}
              </p>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
