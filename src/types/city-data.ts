import type { BuildingInfo } from "./building-status";
import { CityNameGenerator } from "../data/static-data/city-names";
import { gameStatus } from "../data/game-data";
import { v4 as UUIDv4 } from "uuid";

type AnimosityDirection = "none" | "this-city" | "friendly-city" | "enemy-city";

export interface CityData {
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

export function createNewCityData(
  resources?: { [resourceId: string]: number },
  buildings?: BuildingInfo[],
  name?: string,
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
  let getUniqueCityName = () => {
    if (name) {
      return name;
    }
    let randomName = "";
    let usedNames = gameStatus.cities.map((city) => city.name);
    let attempts = 0;
    while (attempts < 100) {
      randomName = CityNameGenerator.getRandomCityName();
      if (!usedNames.includes(randomName)) {
        break;
      }
      attempts++;
    }
    return randomName;
  };

  return {
    id: UUIDv4(),
    resources: resources ?? {},
    buildings: buildings ?? [],
    name: getUniqueCityName(),
    population: population ?? 0,
    treasury: treasury ?? 0,
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
  };
}
