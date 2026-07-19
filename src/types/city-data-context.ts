import type { CityData } from "./city-data";
import {createContext} from "react";

export const CityDataContext = createContext<CityData>(
  {
    id: "",
    resources: {},
    buildings: [],
    name: 0,
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
    geometryLimitations: { allows: {}, prohibits: {} },
  }
);