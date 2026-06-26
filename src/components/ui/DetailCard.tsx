import { ReactNode } from "react";

type DetailCardProps = {
  title: string;
  children: ReactNode;
};

function DetailCard({ title, children }: DetailCardProps) {
  return (
    <section className="rounded-2xl border border-(--flora-border) bg-(--flora-glass) p-4 backdrop-blur-md">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-(--flora-moss)">
        {title}
      </h2>

      {children}
    </section>
  );
}

export default DetailCard;
