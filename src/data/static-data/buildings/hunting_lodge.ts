import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Hunting Lodge`;
let buildingDescription: MessageDescriptor = msg`Provides furs from forests.\nFurs are used for clothing and luxury trade.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        furs: 10,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["forestry"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    furs: 1,
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
