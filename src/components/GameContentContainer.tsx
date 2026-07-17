import React from "react";
import { InformationColumn } from "./InformationColumn";
import { GameContent } from "./GameContent";
import type { Information } from "../types/information";
import { getCityStatusImage } from "../data/city-status";

import { useLingui } from "@lingui/react/macro";

export const GameContentContainer: React.FC = () => {
  const { t } = useLingui();

  const cityOverview: {
    upper: Information[];
    middle: Information[];
    lower: Information[];
  } = {
    upper: [
      {
        id: "city-name",
        label: t`Name`,
        value: 40,
      },
      {
        id: "city-population",
        label: t`Population`,
        description: t`Total population of the city.\nBasic unit of measurement for the city's size and growth.\nAffects everything from resource production to military strength.`,
        value: 12000000,
      },
      {
        id: "city-treasury",
        label: t`Treasury`,
        description: t`Current amount of gold in the treasury.\nAffects the city's ability to maintain and expand its infrastructure.\nBuildings, units, and other expenses are paid from the treasury.`,
        value: 840,
      },
      {
        id: "city-stability",
        label: t`Stability`,
        description: t`Current stability level of the city.\nAffects the city's overall performance and citizen satisfaction.\nLow stability can lead to unrest, riots, and decreased productivity.\nHigh stability can lead to increased growth and prosperity.`,
        value: 100,
      },
      {
        id: "city-foodsupply",
        label: t`Food Supply`,
        description: t`Current food supply level of the city.\nDetermines the city's ability to sustain its population.\nIf the food supply is insufficient, the city may experience population decline.\nOn the other hand, if the food supply is abundant, the city may experience population growth.`,
        value: 5000,
      },
      {
        id: "city-productionstrength",
        label: t`Productivity`,
        description: t`Current productivity of the city.\nAffects the city's ability to produce goods and services.\nConsumed by production activities, units, and other expenses.`,
        value: 300,
      },
    ],
    middle: [
      {
        id: "city-tradestrength",
        label: t`Trade Influence`,
        description: t`Current trade influence of the city.\nAffects the city's ability to create fortune, generate wealth, and engage in commerce.\nHigh trade influence can lead to increased income and economic growth.`,
        value: 10,
      },
      {
        id: "city-militarystrength",
        label: t`Military Strength`,
        description: t`Current military strength of the city.\nAffects the city's ability to defend itself and project power.\nHigh military strength can deter potential aggressors and enable successful military campaigns.`,
        value: 50,
      },
      {
        id: "city-technologystrength",
        label: t`Technology Strength`,
        description: t`Current technology strength of the city.\nAffects the whole empire's ability to innovate and advance.\nHigh technology strength can lead to increased efficiency in research and productivity generation.`,
        value: 30,
      },
      {
        id: "city-culturestrength",
        label: t`Culture Influence`,
        description: t`Current culture influence of the city.\nAffects the city's ability to shape societal values and norms.\nHigh culture influence can lead to increased unity and citizen engagement.`,
        value: 20,
      },
      {
        id: "city-politicalstrength",
        label: t`Political Influence`,
        description: t`Current political influence of the city.\nAffects the city's right to speak and participate in decision-making among the whole empire.\nHigh political influence will lead to increased representation and influence in the empire's governance.`,
        value: 15,
      },
      {
        id: "city-religionstrength",
        label: t`Religion Influence`,
        description: t`Current religion influence of the city.\nAffects the city's ability to shape and spread religious practices and beliefs.\nHigh religion influence can lead to increased stability and effectiveness in spreading religion to nearby cities.`,
        value: 25,
      },
    ],
    lower: [],
  };

  return (
    <div id="game-content-container" className="flex flex-row gap-8">
      <InformationColumn
        title={t`City Overview`}
        statusImage={getCityStatusImage("good", false)}
        information={cityOverview}
      />
      <GameContent />
    </div>
  );
};
