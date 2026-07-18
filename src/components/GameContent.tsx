import { ComingSoonDiv } from "./ComingSoon";
import type { GameContentHTMLContext } from "../types/game-content-html-context";
import type { FC } from "react";

export const GameContent: FC<{ context: GameContentHTMLContext }> = ({
  context,
}) => {
  return (
    <div id="game-content" className="flex flex-col gap-8">
      {(() => {
        switch (context) {
          case "city/building":
            return <div>City Building Content</div>;
          default:
          case "city/dialog":
            return <ComingSoonDiv />;
        }
      })()}
    </div>
  );
};
