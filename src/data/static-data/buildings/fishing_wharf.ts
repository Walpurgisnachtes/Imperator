import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Fishing Wharf`;
let buildingNameId: string = "fishing-wharf";
let buildingDescription: MessageDescriptor = msg`Provides fish at coast or river.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        fish: 10,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["coastal"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    fish: 1,
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
