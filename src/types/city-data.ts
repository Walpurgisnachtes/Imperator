import type { BuildingData } from "./building-status";
import { v4 as UUIDv4 } from "uuid";
import type { GeometryLimitations } from "./geometry-limitations";

type AnimosityDirection = "none" | "this-city" | "friendly-city" | "enemy-city";

export interface CityData {
  // System info
  uid: string;
  resources: { [resourceId: string]: number };
  buildings: BuildingData[];

  // Visible info
  // Primum info
  nameId: string;

  population: number; // Illimitatus
  treasury: number; // Illimitatus
  happiness: number; // Maximus: 100, Minimus: 0
  stability: number; // Maximus: 100, Minimus: 0
  foodSupply: number; // Illimitatus
  productionStrength: number; // Illimitatus

  // Secundum Info
  tradeStrength: number; // Illimitatus
  militaryStrength: number; // Illimitatus
  technologyStrength: number; // Illimitatus
  cultureStrength: number; // Illimitatus
  politicalStrength: number; // Illimitatus
  religionStrength: number; // Illimitatus

  // Tertium Info
  crimeStrength: number; // Illimitatus
  animosityStrength: number; // Maximus: 100, Minimus: 0
  animosityDirection: AnimosityDirection;
  warWearinessStrength: number; // Maximus: 100, Minimus: 0
  buildingLimit: number; // Illimitatus
  geometryLimitations: GeometryLimitations;
}

export function createNewCityData(
  resources?: { [resourceId: string]: number },
  buildings?: BuildingData[],
  nameId?: string,
  buildingLimit?: number,
  geometryLimitations?: GeometryLimitations,
  population?: number,
  treasury?: number,
  happiness?: number,
  stability?: number,
  foodSupply?: number,
  productionStrength?: number,
  tradeStrength?: number,
  militaryStrength?: number,
  technologyStrength?: number,
  cultureStrength?: number,
  politicalStrength?: number,
  religionStrength?: number,
  crimeStrength?: number,
  animosityStrength?: number,
  animosityDirection?: AnimosityDirection,
  warWearinessStrength?: number,
): CityData {
  return {
    uid: UUIDv4(),
    resources: resources ?? {},
    buildings: buildings ?? [],
    nameId: nameId ?? "",
    population: population ?? 100,
    treasury: treasury ?? 100,
    happiness: happiness ?? 100,
    stability: stability ?? 100,
    foodSupply: foodSupply ?? 0,
    productionStrength: productionStrength ?? 0,
    tradeStrength: tradeStrength ?? 0,
    militaryStrength: militaryStrength ?? 0,
    technologyStrength: technologyStrength ?? 0,
    cultureStrength: cultureStrength ?? 0,
    politicalStrength: politicalStrength ?? 0,
    religionStrength: religionStrength ?? 0,
    crimeStrength: crimeStrength ?? 0,
    animosityStrength: animosityStrength ?? 0,
    animosityDirection: animosityDirection ?? "none",
    warWearinessStrength: warWearinessStrength ?? 0,
    buildingLimit: buildingLimit ?? 0,
    geometryLimitations: geometryLimitations ?? { allows: {}, prohibits: {} },
  };
}
