import { ReactNode } from "react";
import DetailCard from "@/components/ui/DetailCard";

type MissionCardProps = {
  title: string;
  children: ReactNode;
};

function MissionCard({ title, children }: MissionCardProps) {
  return (
    <DetailCard title={title}>
      <div className="space-y-2 text-sm leading-6 text-(--flora-text-muted)">
        {children}
      </div>
    </DetailCard>
  );
}

export default MissionCard;
