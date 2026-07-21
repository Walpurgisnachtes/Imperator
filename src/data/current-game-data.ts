import type { BuildingData } from "../types/building-status";
import type { CityData } from "../types/city-data";
import type { GameData } from "../types/game-data";
import { systemMsg } from "./static-data/system-msg";
import { i18n } from "@lingui/core";

const gameData: GameData = {
  hash: "",
  gameVersion: "",
  cities: [],
  capitalId: "",
};

// region: Game Data Management
export function resetGameData(): void {
  gameData.hash = "";
  gameData.gameVersion = "";
  gameData.cities = [];
  gameData.capitalId = "";
}

export function updateGameData(newGameData: GameData): void {
  gameData.hash = newGameData.hash;
  gameData.gameVersion = newGameData.gameVersion;
  gameData.cities = newGameData.cities;
  gameData.capitalId = newGameData.capitalId;
}

export function getGameData(): GameData {
  return gameData;
}

// region: City Management
export function updateCities(newCities: CityData[]): void {
  gameData.cities = newCities;
}

export function addCity(newCity: CityData): void {
  gameData.cities.push(newCity);
}

export function getCapitalCity(): CityData {
  let capitalCity = gameData.cities.find(
    (city) => city.uid === gameData.capitalId,
  );
  if (capitalCity) {
    return capitalCity;
  } else {
    console.error(i18n.t(systemMsg.capitalCityNotFound), gameData.cities);
    return gameData.cities[0];
  }
}

export function updateCapitalCity(cityId: string): void {
  const city = gameData.cities.find((city) => city.uid === cityId);
  if (city) {
    gameData.capitalId = cityId;
  }
}

// region: Building Management
export function updateBuildingInCity(
  cityUid: string,
  buildingUid: string,
  newBuildingData: BuildingData,
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
  newBuildingData: BuildingData,
  duplicates: number = 1,
): void {
  const cityIndex = gameData.cities.findIndex((city) => city.uid === cityUid);
  if (cityIndex !== -1) {
    for (let i = 0; i < duplicates; i++) {
      gameData.cities[cityIndex].buildings.push(newBuildingData);
    }
  } else {
    console.error(`City with UID ${cityUid} not found.`);
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
      gameData.cities[cityIndex].buildings.splice(buildingIndex, 1);
    } else {
      console.error(
        `Building with UID ${buildingUid} not found in city ${cityUid}.`,
      );
    }
  } else {
    console.error(`City with UID ${cityUid} not found.`);
  }
}
