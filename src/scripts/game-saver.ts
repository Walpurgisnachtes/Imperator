import type { GameStatus } from "../types/game-status";

export async function saveGameData(gameStatus: GameStatus): Promise<void> {
  gameStatus.hash = await (async () => {
    const json = JSON.stringify(gameStatus);
    const encoder = new TextEncoder();
    const data = encoder.encode(json);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  })();

  const dataStr = JSON.stringify({ gameStatus });
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "savefile.sav";
  a.click();
  URL.revokeObjectURL(url);
}
