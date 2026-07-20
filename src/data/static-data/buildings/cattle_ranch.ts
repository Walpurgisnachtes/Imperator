import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Cattle Ranch`;
let buildingNameId: string = "building-cattle-ranch";
let buildingDescription: MessageDescriptor = msg`Provides hides or beef.\nHides are necessary for making strategic materials, like leather.`;
let buildingProduction: ProductionRecipe[] = [
  {
    inputs: {
      ".nutritionValue*:is(#food):not(#inedible):not(#meat)": 50,
    },
    outputs: {
      hides: 5,
    },
    productionStrengthCost: 15,
  },
  {
    inputs: {
      ".nutritionValue*:is(#food):not(#inedible):not(#meat)": 50,
    },
    outputs: {
      beef: 2,
    },
    productionStrengthCost: 15,
  },
];
let buildingTags: string[] = ["agriculture"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    cattle: 1,
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
    buildingNameId,
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
