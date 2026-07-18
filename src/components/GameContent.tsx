import { ComingSoonDiv } from "./ComingSoon";
import type { GameContentHTMLContext } from "../types/game-content-html-context-store";
import type { FC } from "react";
import { BuildingsList } from "./City/BuildingsList";
import { getCapitalCity } from "../data/capital-city";

export const GameContent: FC<{ context: GameContentHTMLContext }> = ({
  context,
}) => {
  return (
    <div id="game-content" className="flex flex-col gap-8">
      {(() => {
        switch (context) {
          case "city/building":
            return <BuildingsList data={getCapitalCity()} />;
          default:
          case "city/dialog":
            return <ComingSoonDiv />;
        }
      })()}
    </div>
  );
};
