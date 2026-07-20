import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Vineyard`;
let buildingDescription: MessageDescriptor = msg`Provides grapes for the population.\nIt is widely used in making wine.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        grapes: 10,
      },
      productionStrengthCost: 20,
    }
  ];
let buildingTags: string[] = ["agriculture"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    grapes: 1,
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
