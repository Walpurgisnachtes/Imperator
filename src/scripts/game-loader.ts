import type { GameStatus } from "../types/game-status";

export function loadGameData(file: string): void {
  JSON.parse(file, (key, value) => {
    if (key === "gameStatus") {
      const gameStatus: GameStatus = value;
      window.dispatchEvent(
        new CustomEvent("game-status-updated", { detail: gameStatus }),
      );
    }
  });
}