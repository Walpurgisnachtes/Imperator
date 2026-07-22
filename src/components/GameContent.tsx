import { ComingSoonDiv } from "./ComingSoon";
import type { GameContentHTMLContext } from "../types/city-action-context-store";
import type { FC } from "react";
import { BuildingList } from "./City/BuildingList/BuildingList";
import { getCapitalCity } from "../data/current-game-data";

export const GameContent: FC<{ context: GameContentHTMLContext }> = ({
  context,
}) => {
  return (
    <div
      id="game-content"
      className="flex flex-col items-center gap-4 w-5xl h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-8 backdrop-blur-sm"
    >
      {(() => {
        switch (context) {
          case "city/building":
            return <BuildingList data={getCapitalCity()} />;
          default:
          case "city/dialog":
            return <ComingSoonDiv />;
        }
      })()}
    </div>
  );
};
