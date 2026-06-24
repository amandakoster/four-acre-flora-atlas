import Card from "@/components/ui/Card";
import { zones } from "@/data/zones";

async function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Four-Acre Flora</h1>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Zones</h2>

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
      </section>
    </main>
  );
}

export default Home;
