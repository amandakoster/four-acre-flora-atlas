import Card from "../src/components/Card";

import { zones } from "../src/data/zones";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Four-Acre Flora Atlas</h1>

      {zones.map((zone) => (
        <Card
          key={zone.name}
          name={zone.name}
          status={zone.status}
          species={zone.species}
        />
      ))}
    </main>
  );
}
