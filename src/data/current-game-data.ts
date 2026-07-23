import { cloneBuilding, getBuildingByName } from "../types/building-registerer";
import type { BuildingData } from "../types/building-status";
import type { CityData } from "../types/city-data";
import type { GameData } from "../types/game-data";

let gameData: GameData = {
  hash: "",
  gameVersion: "",
  cities: [],
  capitalId: "",
};

const listeners = new Set<() => void>();

export class GameDataStore {
  static getSnapshot(): GameData {
    return gameData;
  }

  static subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  static setGameData(newGameData: GameData) {
    gameData = newGameData;
    listeners.forEach((listener) => listener());
  }
}

// region: Game Data Management
export function resetGameData(): void {
  GameDataStore.setGameData({
    hash: "",
    gameVersion: "",
    cities: [],
    capitalId: "",
  });
}

export function updateGameData(newGameData: GameData): void {
  GameDataStore.setGameData(newGameData);
}

export function getGameData(): GameData {
  return gameData;
}

export function updateCities(newCities: CityData[]): void {
  GameDataStore.setGameData({
    ...gameData,
    cities: newCities,
  });
}

export function addCity(newCity: CityData): void {
  GameDataStore.setGameData({
    ...gameData,
    cities: [...gameData.cities, newCity],
  });
}

export function updateCapitalCity(cityId: string): void {
  const city = gameData.cities.find((city) => city.uid === cityId);
  if (city) {
    GameDataStore.setGameData({
      ...gameData,
      capitalId: cityId,
    });
  }
}

export function updateBuildingInCity(
  cityUid: string,
  buildingUid: string,
  newBuildingData: Partial<
    Pick<
      BuildingData,
      | "name"
      | "level"
      | "constructionCost"
      | "maintenanceCost"
      | "isUnderConstruction"
      | "hp"
      | "maxHp"
      | "activeRecipeIndex"
      | "productionOutputMultiplier"
      | "productionStrengthCostMultiplier"
      | "isPrioritized"
      | "isDisabled"
    >
  >,
): void {
  const cityIndex = gameData.cities.findIndex((city) => city.uid === cityUid);
  if (cityIndex !== -1) {
    const buildingIndex = gameData.cities[cityIndex].buildings.findIndex(
      (building) => building.uid === buildingUid,
    );
    if (buildingIndex !== -1) {
      const shouldUpdateBuilding =
        gameData.cities[cityIndex].buildings[buildingIndex];

      gameData.cities[cityIndex].buildings[buildingIndex] = {
        ...shouldUpdateBuilding,
        ...newBuildingData,
      };
      listeners.forEach((listener) => listener());
    } else {
      console.error(
        `Building with UID ${buildingUid} not found in city ${cityUid}.`,
      );
    }
  } else {
    console.error(`City with UID ${cityUid} not found.`);
  }
}

export function addBuildingToCity(
  cityUid: string,
  newBuildingName: string,
  duplicates: number = 1,
  isConstructedImmediately: boolean = false,
): string[] {
  const cityIndex = gameData.cities.findIndex((city) => city.uid === cityUid);
  if (cityIndex !== -1) {
    const newBuildings = Array.from({ length: duplicates }, () => {
      let clonedBuilding = cloneBuilding(getBuildingByName(newBuildingName)!);
      clonedBuilding.isUnderConstruction = !isConstructedImmediately;
      return clonedBuilding;
    });
    GameDataStore.setGameData({
      ...gameData,
      cities: gameData.cities.map((city, index) =>
        index === cityIndex
          ? { ...city, buildings: [...city.buildings, ...newBuildings] }
          : city,
      ),
    });
    return newBuildings.map((building) => building.uid);
  } else {
    console.error(`City with UID ${cityUid} not found.`);
    return [];
  }
}

export function removeBuildingFromCity(
  cityUid: string,
  buildingUid: string,
): void {
  const cityIndex = gameData.cities.findIndex((city) => city.uid === cityUid);
  if (cityIndex !== -1) {
    const buildingIndex = gameData.cities[cityIndex].buildings.findIndex(
      (building) => building.uid === buildingUid,
    );
    if (buildingIndex !== -1) {
      GameDataStore.setGameData({
        ...gameData,
        cities: gameData.cities.map((city, index) =>
          index === cityIndex
            ? {
                ...city,
                buildings: city.buildings.filter(
                  (building) => building.uid !== buildingUid,
                ),
              }
            : city,
        ),
      });
    } else {
      console.error(
        `Building with UID ${buildingUid} not found in city ${cityUid}.`,
      );
    }
  } else {
    console.error(`City with UID ${cityUid} not found.`);
  }
}
