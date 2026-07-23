import { ComingSoonDiv } from "./ComingSoon";
import type { CityActionType } from "../types/city-action-context-store";
import type { FC } from "react";
import { BuildingList } from "./City/BuildingList/BuildingList";
import { useSyncExternalStore } from "react";
import { GameDataStore } from "../data/current-game-data";

export const GameContent: FC<{ context: CityActionType }> = ({ context }) => {
  const gameData = useSyncExternalStore(
    GameDataStore.subscribe,
    GameDataStore.getSnapshot,
  );

  const capitalCity = gameData.cities.find(
    (c) => c.uid === gameData.capitalId,
  )!;
  return (
    <div
      id="game-content"
      className="flex flex-col items-center gap-4 w-5xl h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-8 backdrop-blur-sm"
    >
      {(() => {
        switch (context) {
          case "city/building":
            return <BuildingList data={capitalCity} />;
          default:
          case "city/dialog":
            return <ComingSoonDiv />;
        }
      })()}
    </div>
  );
};
