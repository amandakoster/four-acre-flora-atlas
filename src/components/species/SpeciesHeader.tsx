import { Species } from "@/types/species";

type Props = {
  species: Species;
};

function SpeciesHeader({ species }: Props) {
  const metadata = [
    { label: "Zone", value: species.zone_id ?? "Unknown" },
    { label: "Observed", value: species.observed_date ?? "Unknown" },
    { label: "Native", value: species.native_status ?? "Unknown" },
  ];

  return (
    <header className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--flora-moss)]">
        Species Profile
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--flora-text)]">
        {species.common_name}
      </h1>

      {species.scientific_name && (
        <p className="mt-1 text-xl italic text-[color:var(--flora-moss)]">
          {species.scientific_name}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {metadata.map((item) => (
          <div
            key={item.label}
            className="rounded-full border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] px-3 py-1 text-sm backdrop-blur-md"
          >
            <span className="mr-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--flora-moss)]">
              {item.label}
            </span>

            <span className="text-[color:var(--flora-text)]">{item.value}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
export default SpeciesHeader;
