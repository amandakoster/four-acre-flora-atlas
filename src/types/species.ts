export type Species = {
  id: string;

  common_name: string;
  scientific_name: string | null;

  zone_id: string | null;

  family: string | null;
  native_status: string | null;

  habitat: string | null;
  light_exposure: string | null;
  soil_moisture: string | null;

  observed_date: string | null;

  latitude: number | null;
  longitude: number | null;

  notes: string | null;

  source: string | null;
};

export type SpeciesFormData = {
  common_name: string;
  scientific_name: string | null;

  zone_id: string | null;

  habitat: string | null;
  light_exposure: string | null;
  soil_moisture: string | null;

  notes: string | null;
};

export type SpeciesField = [label: string, value: string | number | null];
