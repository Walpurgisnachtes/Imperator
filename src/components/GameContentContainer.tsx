import type { FC } from "react";
import { InformationColumn } from "./InformationColumn";
import { GameContent } from "./GameContent";
import { GameContentHTMLContextStore } from "../types/city-action-context-store";
import { getCityStatusImage } from "../data/city-status";
import { useSyncExternalStore } from "react";
import { CityInfoStore } from "../types/city-info-store";

import { useLingui } from "@lingui/react/macro";
import { CityActionSelector } from "./City/CityActions/CityActionSelector";

export const GameContentContainer: FC = () => {
  const { t } = useLingui();

  const cityOverview = useSyncExternalStore(
    CityInfoStore.subscribe,
    CityInfoStore.getSnapshot,
  );

  const currentContext = useSyncExternalStore(
    GameContentHTMLContextStore.subscribe,
    GameContentHTMLContextStore.getSnapshot,
  );

  return (
    <div id="game-content-container" className="flex flex-row gap-8">
      <InformationColumn
        title={t`City Overview`}
        statusImage={getCityStatusImage("good", false)}
        information={cityOverview}
      />
      <GameContent context={currentContext} />
      <CityActionSelector />
    </div>
  );
};
