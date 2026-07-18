import { createNewCityData } from "../../types/city-data";
import type { GameStatus } from "../../types/game-status";

export const gameStatus: GameStatus = {
  hash: "",
  gameVersion: "",
  cities: [createNewCityData()],
};
