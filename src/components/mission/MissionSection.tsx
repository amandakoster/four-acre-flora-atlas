import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function MissionSection({ title, children }: Props) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-semibold text-(--flora-text)">
        {title}
      </h2>

      {children}
    </section>
  );
}

export default MissionSection;
