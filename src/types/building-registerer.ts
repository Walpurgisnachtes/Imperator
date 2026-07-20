import type { BuildingInfo } from "./building-status";

let buildings: BuildingInfo[] = [];

const buildingRegisterers: Set<BuildingInfo> = new Set();

export function registerBuilding(registerer: BuildingInfo): void {
  buildingRegisterers.add(registerer);
}

export function loadBuildings(): void {
  buildings = [];
  for (const registerer of buildingRegisterers) {
    buildings.push(registerer);
  }
}

export function getBuildings(): BuildingInfo[] {
  return buildings;
}
