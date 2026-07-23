import type { ProductionRecipe } from "./production-recipe";
import type { BuildingRequirement } from "./building-requirement";
import type { MessageDescriptor } from "@lingui/core";
export interface BuildingData {
  uid: string;
  name: MessageDescriptor;
  nameId: string;
  description: MessageDescriptor;
  tags: string[];
  requirements?: BuildingRequirement;
  level: number;
  constructionCost: number;
  currentConstructed: number;
  maintenanceCost: number;
  isUnderConstruction: boolean;

  hp: number;
  maxHp: number;
  recipes: ProductionRecipe[];
  activeRecipeIndex: number;
  productionStrengthCostMultiplier: number;
  productionOutputMultiplier: number;

  isPrioritized: boolean;
  isDisabled: boolean;

  prioritizedInputs: { [resourceId: string]: number };
}
