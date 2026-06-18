import { zones } from "@/data/zones";
import { zoneData } from "@/data/zoneData";

type Props = {
  params: Promise<{
    zoneId: string;
  }>;
};

export default async function ZonePage({ params }: Props) {
  const { zoneId } = await params;

  const zone = zones.find((z) => z.id === zoneId);

  const observations = zoneData[zoneId as keyof typeof zoneData] ?? [];

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">{zone?.name}</h1>

      <p className="text-gray-400 mb-6">{zone?.description}</p>

      <div className="space-y-4">
        {observations.map((o) => (
          <div key={o.speciesId} className="border p-4 rounded">
            <p className="font-bold">{o.speciesId}</p>
            <p className="text-sm text-gray-400">{o.observedDate}</p>
            <p>{o.notes}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
