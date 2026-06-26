import DetailCard from "@/components/ui/DetailCard";

type PhaseCardProps = {
  phase: string;
  title: string;
  items: string[];
};

function PhaseCard({ phase, title, items }: PhaseCardProps) {
  return (
    <DetailCard title={`${phase} · ${title}`}>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-(--flora-text-muted)">
            • {item}
          </li>
        ))}
      </ul>
    </DetailCard>
  );
}

export default PhaseCard;
