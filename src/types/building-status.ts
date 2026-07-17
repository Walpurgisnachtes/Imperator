import type { ProductionRecipe } from "./production-recipe";

export interface BuildingInfo {
  id: string;
  name: string;
  level: number;
  constructionCost: number;
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
}
