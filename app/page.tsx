import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Four-Acre Flora Atlas</h1>

      {zones.map((zone) => (
        <Card
          key={zone.id}
          name={zone.name}
          description={zone.description}
          href={`/zones/${zone.id}`}
        />
      ))}
    </main>
  );
}
