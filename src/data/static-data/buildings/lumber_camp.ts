import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Lumber Camp`;
let buildingNameId: string = "building-lumber-camp";
let buildingDescription: MessageDescriptor = msg`Provides lumber from forests.\nLumber is extremely necessary for building construction, naval purposes, and fueling.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        lumber: 10,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["forestry"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    lumber: 1,
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
