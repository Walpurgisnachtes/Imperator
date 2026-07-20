import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Gold Mine`;
let buildingNameId: string = "gold-mine";
let buildingDescription: MessageDescriptor = msg`Provides gold, which is used for jewelry, treasury, and diplomacy.\nGold is extremely valuable.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        gold: 2,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["mine"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    gold: 1,
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
