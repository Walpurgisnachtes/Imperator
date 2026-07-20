import { createDefaultBuilding } from "../buildings";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { BuildingRequirement } from "../../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { registerBuilding } from "../../../types/building-registerer";

let buildingName: MessageDescriptor = msg`Salt Works`;
let buildingDescription: MessageDescriptor = msg`Provides salt.\nSalt is mainly used for preserving food.\nIt can also be used as medicine.\nFor these reasons, salt is a very valuable resource.`;
let buildingProduction: ProductionRecipe[] = [
    {
      inputs: {},
      outputs: {
        salt: 10,
      },
      productionStrengthCost: 10,
    }
  ];
let buildingTags: string[] = ["coastal"];
let buildingRequirements: BuildingRequirement = {
  allows: {
    salt: 1,
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
