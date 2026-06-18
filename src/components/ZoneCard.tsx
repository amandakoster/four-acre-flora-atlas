type Props = {
  name: string;
  status: string;
  species: string[];
};

export default function ZoneCard({ name, status, species }: Props) {
  return (
    <section className="rounded-lg border p-5 mb-5">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>

      <p className="text-green-300 mb-4">Status: {status}</p>

      <ul className="list-disc pl-6">
        {species.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
