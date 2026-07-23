import { getBuildingByName, getBuildings } from "../types/building-registerer";
import type { BuildingData } from "../types/building-status";
import type { CityData } from "../types/city-data";
import type { GameData } from "../types/game-data";

export class BuildingManager {
  private static instance: BuildingManager;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): BuildingManager {
    if (!BuildingManager.instance) {
      BuildingManager.instance = new BuildingManager();
    }

    return BuildingManager.instance;
  }

  public possibleBuildingsRemaining(
    gameData: GameData,
    cityUid: string,
  ): {
    [buildingNameId: string]: number;
  } {
    const result: { [buildingNameId: string]: number } = {};

    const city = gameData.cities.find((c: any) => c.uid === cityUid);
    if (!city) return {};

    const cityAllows = city.geometryLimitations.allows ?? {};
    const cityProhibits = city.geometryLimitations.prohibits ?? {};

    // 1. 預先計算已佔用資源
    const occupiedResources = new Map<string, number>();
    this.calculateOccupiedResourceTags(city, occupiedResources);

    // 2. 評估每個建築範本
    const allBuildings = getBuildings();

    for (const building of allBuildings) {
      const allows = building.requirements?.allows ?? {};
      const prohibits = building.requirements?.prohibits ?? {};

      if (
        !this.canConstructBuilding(
          building,
          allows,
          prohibits,
          cityAllows,
          cityProhibits,
        )
      )
        continue;

      // Rule 4: 計算剩餘可建數量
      const requiredTags = Object.keys(allows);
      if (requiredTags.length === 0) {
        result[building.nameId] = Number.MAX_SAFE_INTEGER;
        continue;
      }

      let maximum = Number.MAX_SAFE_INTEGER;

      for (const tag of requiredTags) {
        const total = cityAllows[tag] || 0;
        const used = occupiedResources.get(tag) ?? 0;
        const cost = allows[tag] || 0;

        if (cost <= 0) continue;

        const remaining = Math.floor((total - used) / cost);
        maximum = Math.min(maximum, Math.max(0, remaining));
      }

      result[building.nameId] = maximum;
    }

    return result;
  }

  private canConstructBuilding(
    building: BuildingData,
    allows: { [key: string]: number },
    prohibits: { [key: string]: number },
    cityAllows: { [key: string]: number },
    cityProhibits: { [key: string]: number },
  ): boolean {
    return (
      // Rule 1: 城市幾何/地形禁止
      !this.isBuildingProhibitedByCityGeometry(building, cityProhibits) &&
      // Rule 2: 建築條件排斥
      !this.isBuildingProhibitedByCityResources(prohibits, cityAllows) &&
      // Rule 3: 城市總容量是否滿足單一建置基本門檻
      this.isCityCapacitySufficient(allows, cityAllows)
    );
  }

  private isCityCapacitySufficient(
    allows: { [key: string]: number },
    cityAllows: { [key: string]: number },
  ) {
    return Object.entries(allows).every(
      ([tag, amount]) => cityAllows[tag] >= amount,
    );
  }

  private isBuildingProhibitedByCityResources(
    prohibits: { [key: string]: number },
    cityAllows: { [key: string]: number },
  ) {
    return Object.keys(prohibits).some((tag) => tag in cityAllows);
  }

  private isBuildingProhibitedByCityGeometry(
    building: BuildingData,
    cityProhibits: { [key: string]: number },
  ) {
    return building.tags.some((tag) => tag in cityProhibits);
  }

  private calculateOccupiedResourceTags(
    city: CityData,
    occupiedResources: Map<string, number>,
  ) {
    for (const cityBuilding of city.buildings) {
      const buildingInfo = getBuildingByName(cityBuilding.nameId);
      if (!buildingInfo) continue;

      const requirements = buildingInfo.requirements?.allows ?? {};
      for (const [tag, amount] of Object.entries(requirements)) {
        const numericAmount = amount;
        occupiedResources.set(
          tag,
          (occupiedResources.get(tag) ?? 0) + numericAmount,
        );
      }
    }
  }
}
