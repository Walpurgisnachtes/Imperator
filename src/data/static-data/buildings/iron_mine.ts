import { registerBuilding, createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

let buildingName: MessageDescriptor = msg`Iron Mine`;
let buildingDescription: MessageDescriptor = msg`Provides iron, which is necessary for building, tools, and military equipment.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        iron: 2,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["mine"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    iron: 1,
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
