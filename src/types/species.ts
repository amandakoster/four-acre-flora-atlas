// src/types/species.ts

export type Species = {
  id: string;

  commonName: string;
  scientificName?: string;

  family?: string;
  nativeStatus?: string;

  source?: string;
};
