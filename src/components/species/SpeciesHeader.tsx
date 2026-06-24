import { Species } from "@/types/species";

type Props = {
  species: Species;
};

function SpeciesHeader({ species }: Props) {
  return (
    <header className="mb-8">
      <h1 className="mb-2 text-5xl font-bold">{species.common_name}</h1>

      {species.scientific_name && (
        <p className="text-xl italic text-gray-400">
          {species.scientific_name}
        </p>
      )}
    </header>
  );
}

export default SpeciesHeader;
