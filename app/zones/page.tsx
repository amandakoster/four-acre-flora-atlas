import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";

async function ZonesPage() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Zones</h1>

      <div className="space-y-4">
        {zones.map((zone) => (
          <Card
            key={zone.id}
            name={zone.name}
            description={zone.description}
            href={`/zones/${zone.id}`}
          />
        ))}
      </div>
    </main>
  );
}

export default ZonesPage;
