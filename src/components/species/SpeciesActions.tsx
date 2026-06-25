"use client";

import { Species } from "@/types/species";
import DeleteSpeciesButton from "./DeleteSpeciesButton";
import EditSpeciesForm from "./EditSpeciesForm";

type Props = {
  species: Species;
};

function SpeciesActions({ species }: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] p-6 backdrop-blur-md">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--flora-moss)]">
            Management
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[color:var(--flora-text)]">
            Manage This Species
          </h2>

          <p className="mt-2 max-w-xl text-[color:var(--flora-text-muted)]">
            Update the botanical information, add additional observations, or
            permanently remove this species from your atlas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <EditSpeciesForm species={species} />

          <DeleteSpeciesButton
            speciesId={species.id}
            speciesName={species.common_name}
          />
        </div>
      </div>
    </section>
  );
}

export default SpeciesActions;
