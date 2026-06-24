"use client";

import { Species } from "@/types/species";
import DeleteSpeciesButton from "./DeleteSpeciesButton";
import EditSpeciesForm from "./EditSpeciesForm";

type Props = {
  species: Species;
};

function SpeciesActions({ species }: Props) {
  return (
    <section className="mt-8 space-y-6">
      <EditSpeciesForm species={species} />

      <div>
        <DeleteSpeciesButton
          speciesId={species.id}
          speciesName={species.common_name}
        />
      </div>
    </section>
  );
}

export default SpeciesActions;
