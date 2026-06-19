import Card from "@/components/ui/Card";

type Props = {
  items: {
    id: string;
    zoneId: string;
    observedDate: string;
    species: {
      commonName: string;
    };
  }[];
};

export default function RecentObservations({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((o) => (
        <Card
          key={o.id}
          name={o.species.commonName}
          description={`${o.zoneId} • ${o.observedDate}`}
          href={`/zones/${o.zoneId}`}
        />
      ))}
    </div>
  );
}
