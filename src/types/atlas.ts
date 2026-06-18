export type ZoneId =
  | "forest"
  | "pollinator-meadow"
  | "pollinator-garden"
  | "vegetable-garden"
  | "fruit-trees"
  | "general-property";

export type Zone = {
  id: ZoneId;
  name: string;
  description: string;
};

export type Observation = {
  id: string;
  speciesId: string;
  zoneId: ZoneId;
  observedDate: string;
  notes: string;
};
