import { ComingSoonDiv } from "./ComingSoon";
import type { GameContentHTMLContext } from "../types/game-content-html-context";
import type { FC } from "react";
import { BuildingsList } from "./City/BuildingsList";
import { gameStatus } from "../data/static-data/game-data";

export const GameContent: FC<{ context: GameContentHTMLContext }> = ({
  context,
}) => {
  return (
    <div id="game-content" className="flex flex-col gap-8">
      {(() => {
        switch (context) {
          case "city/building":
            return <BuildingsList data={gameStatus.cities[0]} />;
          default:
          case "city/dialog":
            return <ComingSoonDiv />;
        }
      })()}
    </div>
  );
};
