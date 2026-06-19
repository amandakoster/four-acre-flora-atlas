import type { ZoneId } from "./zone";

export type Observation = {
  id: string;
  speciesId: string;
  zoneId: ZoneId;
  observedDate: string;
  notes: string;
};
