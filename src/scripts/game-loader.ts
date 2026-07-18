import { createNewCityData } from "../types/city-data";
import { gameStatus as gameData } from "../data/static-data/game-data";
import type { GameStatus } from "../types/game-status";

// Use async prepare for future large loading
export async function createNewGame(): Promise<void> {
  gameData.cities.push(createNewCityData([]));
}

export async function loadGameData(file: string): Promise<void> {
  await JSON.parse(file, (key, value) => {
    if (key === "gameStatus") {
      const loadedGameData: GameStatus = value;
      window.dispatchEvent(
        new CustomEvent("game-status-updated", { detail: loadedGameData }),
      );

      gameData.hash = loadedGameData.hash;
      gameData.gameVersion = loadedGameData.gameVersion;
      gameData.cities = loadedGameData.cities;
      gameData.capitalId = loadedGameData.capitalId;
    }
  });
}
