import type { GameStatus } from "../../types/game-status";

export const gameStatus: GameStatus = {
  hash: "",
  gameVersion: "",
  cities: [],
  capitalId: "",
};

export function resetGameStatus(): void {
  gameStatus.hash = "";
  gameStatus.gameVersion = "";
  gameStatus.cities = [];
  gameStatus.capitalId = "";
}
