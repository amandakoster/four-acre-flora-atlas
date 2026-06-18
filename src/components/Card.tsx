type ZoneCardProps = {
  name: string;
  description: string;
};

export default function ZoneCard({ name, description }: ZoneCardProps) {
  return (
    <section className="mb-5 rounded-lg border p-5">
      <h2 className="mb-2 text-3xl font-bold">{name}</h2>
      <p>{description}</p>
    </section>
  );
}
