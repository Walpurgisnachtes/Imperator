import { Trans } from "@lingui/react/macro";
import React from "react";

export const GameContent: React.FC = () => {
  return (
    <div id="game-content" className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-white">
        <Trans comment="Game Content">Game Content</Trans>
      </h1>
    </div>
  );
};