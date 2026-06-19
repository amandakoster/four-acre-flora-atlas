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
