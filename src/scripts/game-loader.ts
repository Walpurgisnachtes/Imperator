import {
  gameStatus as gameData,
  resetGameStatus,
} from "../data/static-data/game-data";
import type { GameStatus } from "../types/game-status";
import { createCityInfo } from "../types/city-info";
import { getCapitalCity, setCapitalCity } from "../data/capital-city";
import { CityInfoStore } from "../types/city-info-store";
import { getCityByName } from "../types/city-registerer";

// Use async prepare for future large loading
export async function createNewGame(): Promise<void> {
  resetGameStatus();

  const newCity = getCityByName("city-name-italia");
  if (!newCity) {
    throw new Error("Default city data not found");
  }
  gameData.cities.push(newCity);
  setCapitalCity(newCity.uid);

  CityInfoStore.setCityInfo(createCityInfo(getCapitalCity()));
}

export async function loadGameData(file: string): Promise<void> {
  await JSON.parse(file, (key, value) => {
    if (key === "gameStatus") {
      const loadedGameData: GameStatus = value;

      gameData.hash = loadedGameData.hash;
      gameData.gameVersion = loadedGameData.gameVersion;
      gameData.cities = loadedGameData.cities;
      gameData.capitalId = loadedGameData.capitalId;

      CityInfoStore.setCityInfo(createCityInfo(getCapitalCity()));
    }
  });
}
