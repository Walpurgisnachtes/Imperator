import {
  gameStatus as gameData,
} from "../data/static-data/game-data";
import type { GameStatus } from "../types/game-status";
import { createCityInfo } from "../types/city-info";
import { getCapitalCity } from "../data/capital-city";
import { CityInfoStore } from "../types/city-info-store";

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
