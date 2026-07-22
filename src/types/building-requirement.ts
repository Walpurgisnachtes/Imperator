export type BuildingRequirement = {
  allows?: { [key: string]: number };
  prohibits?: { [key: string]: number };
};
