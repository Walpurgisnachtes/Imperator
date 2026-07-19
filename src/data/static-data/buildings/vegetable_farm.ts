import { registerBuilding, createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

let buildingName: MessageDescriptor = msg`Vegetable Farm`;
let buildingDescription: MessageDescriptor = msg`Provides basic food, vegetables, for the population.\nVegetables are more easily to grow but less nutritious than other food sources.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        vegetables: 15,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["agriculture"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    vegetables: 1,
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
