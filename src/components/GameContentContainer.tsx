import React, { useState, useEffect } from "react";
import { InformationColumn } from "./InformationColumn";
import { GameContent } from "./GameContent";
import { gameContentContextChangedEventName } from "../types/game-content-html-context";
import type { GameContentHTMLContext } from "../types/game-content-html-context";
import { getCityStatusImage } from "../data/city-status";
import { defaultCityInfo, cityInfoUpdateEventName } from "../types/city-info";
import type { CityInfo } from "../types/city-info";

import { useLingui } from "@lingui/react/macro";

export const GameContentContainer: React.FC = () => {
  const [cityOverview, setCityOverview] = useState<CityInfo>(defaultCityInfo);

  const { t } = useLingui();

  const [currentContext, setCurrentContext] =
    React.useState<GameContentHTMLContext>("city/building");

  useEffect(() => {
    const handleContextChange = (event: Event) => {
      const customEvent = event as CustomEvent<{
        context: GameContentHTMLContext;
      }>;
      if (customEvent.detail && customEvent.detail.context) {
        setCurrentContext(customEvent.detail.context);
      }
    };

    window.addEventListener(
      gameContentContextChangedEventName,
      handleContextChange,
    );

    return () => {
      window.removeEventListener(
        gameContentContextChangedEventName,
        handleContextChange,
      );
    };
  }, []);

  useEffect(() => {
    const handleCityInfoUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{
        cityInfo: CityInfo;
      }>;
      if (customEvent.detail && customEvent.detail.cityInfo) {
        setCityOverview(customEvent.detail.cityInfo);
      }
    };

    window.addEventListener(cityInfoUpdateEventName, handleCityInfoUpdate);

    return () => {
      window.removeEventListener(cityInfoUpdateEventName, handleCityInfoUpdate);
    };
  }, []);

  return (
    <div id="game-content-container" className="flex flex-row gap-8">
      <InformationColumn
        title={t`City Overview`}
        statusImage={getCityStatusImage("good", false)}
        information={cityOverview}
      />
      <GameContent context={currentContext} />
    </div>
  );
};
