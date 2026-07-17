import type { BuildingInfo } from "./building-status";

type AnimosityDirection = "none" | "this-city" | "friendly-city" | "enemy-city";

export interface CityInfo {
  // System info
  id: string;
  resources: { [resourceId: string]: number };
  buildings: BuildingInfo[];

  // Visible info
  // Primum info
  name: string;

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
}

