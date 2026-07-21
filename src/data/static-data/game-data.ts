import type { GameStatus } from "../../types/game-status";

export const gameData: GameStatus = {
  hash: "",
  gameVersion: "",
  cities: [],
  capitalId: "",
};

export function resetGameStatus(): void {
  gameData.hash = "";
  gameData.gameVersion = "";
  gameData.cities = [];
  gameData.capitalId = "";
}
