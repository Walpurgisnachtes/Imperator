export interface ProductionRecipe {
  inputs: { [resourceId: string]: number };
  outputs: { [resourceId: string]: number };
  productionStrengthCost: number;
}
