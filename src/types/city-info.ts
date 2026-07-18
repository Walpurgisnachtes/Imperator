import type { Information } from "./information";
import type { CityData } from "./city-data";
import { msg } from "@lingui/core/macro";

// Warning:
// City Info is used as "lite form" of City Data, and is not a complete representation of the city.
// It is used only for displaying information in the UI, and should not be used for game logic or calculations.
export interface CityInfo {
  upper: Information[];
  middle: Information[];
  lower: Information[];
}

export const cityInfoUpdateEventName = "city-info-updated";

export const defaultCityInfo: CityInfo = createCityInfo({
  id: "0",
  resources: {},
  buildings: [],
  name: "",
  population: 0,
  treasury: 0,
  happiness: 0,
  stability: 0,
  foodSupply: 0,
  productionStrength: 0,
  tradeStrength: 0,
  militaryStrength: 0,
  technologyStrength: 0,
  cultureStrength: 0,
  politicalStrength: 0,
  religionStrength: 0,
  crimeStrength: 0,
  animosityStrength: 0,
  animosityDirection: "none",
  warWearinessStrength: 0,
});

export function createCityInfo(city: CityData): CityInfo {
  return {
    upper: [
      {
        id: "city-id",
        label: `ID`,
        value: city.id,
        hidden: true,
      },
      {
        id: "city-name",
        label: msg`Name`,
        value: city.name,
      },
      {
        id: "city-population",
        label: msg`Population`,
        description: msg`Total population of the city.\nBasic unit of measurement for the city's size and growth.\nAffects everything from resource production to military strength.`,
        value: city.population,
      },
      {
        id: "city-treasury",
        label: msg`Treasury`,
        description: msg`Current amount of gold in the treasury.\nAffects the city's ability to maintain and expand its infrastructure.\nBuildings, units, and other expenses are paid from the treasury.`,
        value: city.treasury,
      },
      {
        id: "city-stability",
        label: msg`Stability`,
        description: msg`Current stability level of the city.\nAffects the city's overall performance and citizen satisfaction.\nLow stability can lead to unrest, riots, and decreased productivity.\nHigh stability can lead to increased growth and prosperity.`,
        value: city.stability,
      },
      {
        id: "city-foodsupply",
        label: msg`Food Supply`,
        description: msg`Current food supply level of the city.\nDetermines the city's ability to sustain its population.\nIf the food supply is insufficient, the city may experience population decline.\nOn the other hand, if the food supply is abundant, the city may experience population growth.`,
        value: city.foodSupply,
      },
      {
        id: "city-productionstrength",
        label: msg`Productivity`,
        description: msg`Current productivity of the city.\nAffects the city's ability to produce goods and services.\nConsumed by production activities, units, and other expenses.`,
        value: city.productionStrength,
      },
    ],
    middle: [
      {
        id: "city-tradestrength",
        label: msg`Trade Influence`,
        description: msg`Current trade influence of the city.\nAffects the city's ability to create fortune, generate wealth, and engage in commerce.\nHigh trade influence can lead to increased income and economic growth.`,
        value: city.tradeStrength,
      },
      {
        id: "city-militarystrength",
        label: msg`Military Strength`,
        description: msg`Current military strength of the city.\nAffects the city's ability to defend itself and project power.\nHigh military strength can deter potential aggressors and enable successful military campaigns.`,
        value: city.militaryStrength,
      },
      {
        id: "city-technologystrength",
        label: msg`Technology Strength`,
        description: msg`Current technology strength of the city.\nAffects the whole empire's ability to innovate and advance.\nHigh technology strength can lead to increased efficiency in research and productivity generation.`,
        value: city.technologyStrength,
      },
      {
        id: "city-culturestrength",
        label: msg`Culture Influence`,
        description: msg`Current culture influence of the city.\nAffects the city's ability to shape societal values and norms.\nHigh culture influence can lead to increased unity and citizen engagement.`,
        value: city.cultureStrength,
      },
      {
        id: "city-politicalstrength",
        label: msg`Political Influence`,
        description: msg`Current political influence of the city.\nAffects the city's right to speak and participate in decision-making among the whole empire.\nHigh political influence will lead to increased representation and influence in the empire's governance.`,
        value: city.politicalStrength,
      },
      {
        id: "city-religionstrength",
        label: msg`Religion Influence`,
        description: msg`Current religion influence of the city.\nAffects the city's ability to shape and spread religious practices and beliefs.\nHigh religion influence can lead to increased stability and effectiveness in spreading religion to nearby cities.`,
        value: city.religionStrength,
      },
    ],
    lower: [
      {
        id: "city-crimestrength",
        label: msg`Crime Influence`,
        description: msg`Current crime influence of the city.\nAffected by the city's stability.\nHigh crime influence can lead to increased unrest and decreased stability.`,
        value: city.crimeStrength,
        hidden: true,
      },
      {
        id: "city-animositystrength",
        label: msg`Animosity Influence`,
        description: msg`Current animosity influence of the city.\nAffects the city's ability to manage conflicts and rivalries.\nHigh animosity influence can lead to increased tension and decreased stability.`,
        value: city.animosityStrength,
        hidden: true,
      },
      {
        id: "city-animositydirection",
        label: msg`Animosity Direction`,
        description: msg`Current animosity direction of the city.\nAffects the city's efficiency in its crackdown and military actions.\nThe direction indicates which faction or city the animosity is primarily directed towards.`,
        value: city.animosityDirection,
        hidden: true,
      },
      {
        id: "city-warwearinessstrength",
        label: msg`War Weariness Influence`,
        description: msg`Current war weariness influence of the city.\nAffected by the city's military engagements and overall stability.\nHigh war weariness influence can lead to decreased military effectiveness and increased unrest.`,
        value: city.warWearinessStrength,
        hidden: true,
      },
    ],
  };
}
