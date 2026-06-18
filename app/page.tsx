import ZoneCard from "../src/components/ZoneCard";

const zones = [
  {
    name: "Forest",
    status: "Surveying",
    species: ["Sugar Maple", "Red Maple", "White Oak"],
  },
  {
    name: "Pollinator Meadow",
    status: "In Progress",
    species: ["Coreopsis", "Milkweed"],
  },
  {
    name: "Pollinator Garden",
    status: "In Progress",
    species: ["Poppies"],
  },
  {
    name: "Fruit Trees",
    status: "Surveying",
    species: [
      "Peach",
      "Asian Pear",
      "Santa Rosa Plum",
      "Shiro Plum",
      "Liberty Pear",
      "Hosui Asian Pear",
      "Reliance Peach",
    ],
  },
  {
    name: "Vegetable Gardens",
    status: "In Progress",
    species: [
      "Armenian Cucumber",
      "Muncher Cucumber",
      "Brandywine Tomato",
      "Stone Ridge Tomato",
      "Unknown Tomato #1",
      "Unknown Tomato #2",
    ],
  },
];

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">
        Four-Acre Flora Atlas
      </h1>

      {zones.map((zone) => (
        <ZoneCard
          key={zone.name}
          name={zone.name}
          status={zone.status}
          species={zone.species}
        />
      ))}
    </main>
  );
}
