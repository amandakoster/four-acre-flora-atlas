import { observations } from "@/data/observations";
import { species } from "@/data/species";

const speciesMap = Object.fromEntries(species.map((s) => [s.id, s]));

export function getRecentObservations(limit = 8) {
  return [...observations]
    .sort((a, b) => (a.observedDate < b.observedDate ? 1 : -1))
    .slice(0, limit)
    .map((o) => {
      const sp = speciesMap[o.speciesId];

      return {
        id: o.id,
        zoneId: o.zoneId,
        observedDate: o.observedDate,
        species: {
          id: o.speciesId,
          commonName: sp?.commonName ?? o.speciesId,
          scientificName: sp?.scientificName ?? "",
        },
      };
    });
}
