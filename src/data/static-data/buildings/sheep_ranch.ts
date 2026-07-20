import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Sheep Ranch`;
let buildingDescription: MessageDescriptor = msg`Provides wools or mutton.\nWool is necessary for making clothes.`;
let buildingProduction: ProductionRecipe[] = [
  {
    inputs: {
      ".nutritionValue*:is(#food):not(#inedible):not(#meat)": 50,
    },
    outputs: {
      wool: 5,
    },
    productionStrengthCost: 15,
  },
  {
    inputs: {
      ".nutritionValue*:is(#food):not(#inedible):not(#meat)": 50,
    },
    outputs: {
      mutton: 2,
    },
    productionStrengthCost: 15,
  },
];
let buildingTags: string[] = ["agriculture"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    sheep: 1,
  },
};
let buildingCost: number = 0;
let buildingMaintenance: number = 0;
let buildingMaxHp: number = 100;
let buildingProductionStrengthCostMultiplier: number = 1;
let buildingProductionOutputMultiplier: number = 1;

registerBuilding(
  createDefaultBuilding(
    buildingName,
    buildingDescription,
    buildingProduction,
    buildingTags,
    buildingRequirements,
    buildingCost,
    buildingMaintenance,
    buildingMaxHp,
    buildingProductionStrengthCostMultiplier,
    buildingProductionOutputMultiplier,
  ),
);
