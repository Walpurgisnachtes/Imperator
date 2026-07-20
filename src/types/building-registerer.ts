import type { BuildingData } from "./building-status";

let buildings: BuildingData[] = [];

const buildingRegisterers: Set<BuildingData> = new Set();

export function registerBuilding(registerer: BuildingData): void {
  buildingRegisterers.add(registerer);
}

export function loadBuildings(): void {
  buildings = [];
  for (const registerer of buildingRegisterers) {
    if (buildings.find((building) => building.nameId === registerer.nameId)) {
      console.error(`Duplicate building nameId found: ${registerer.nameId}`);
    }
    buildings.push(registerer);
  }
}

export function getBuildings(): BuildingData[] {
  return buildings;
}

export function getBuildingByUid(uid: string): BuildingData | undefined {
  return buildings.find((building) => building.uid === uid);
}

export function getBuildingByName(nameId: string): BuildingData | undefined {
  return buildings.find((building) => building.nameId === nameId);
}
