import { ReactNode } from "react";
import DetailCard from "@/components/ui/DetailCard";

type Props = {
  title: string;
  children: ReactNode;
};

function MissionCard({ title, children }: Props) {
  return (
    <DetailCard title={title}>
      <div className="space-y-3 text-(--flora-text-muted)">{children}</div>
    </DetailCard>
  );
}

export default MissionCard;
