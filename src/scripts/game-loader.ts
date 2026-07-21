import { getCapitalCity, resetGameData, updateGameData } from "../data/current-game-data";
import type { GameData } from "../types/game-data";
import { createCityInfo } from "../types/city-info";
import { CityInfoStore } from "../types/city-info-store";

export async function loadGameData(file: string): Promise<void> {
  await JSON.parse(file, (key, value) => {
    if (key === "gameStatus") {
      const loadedGameData: GameData = value;

      resetGameData();
      updateGameData(loadedGameData);

      CityInfoStore.setCityInfo(createCityInfo(getCapitalCity()));
    }
  });
}
