import type { CityData } from "../types/city-data";
import type { BuildingData } from "../types/building-status";
import type { ProductionRecipe } from "../types/production-recipe";
import { useLingui } from "@lingui/react/macro";

export interface ResourceMap {
  [resourceId: string]: number;
}

/**
 * 執行單個回合的城市生產演算法。
 * 考慮了建築狀態、優先權、以及城市內部的生產鏈（連鎖反應）。
 *
 * @param city 城市當前資訊
 * @returns 這一回合實際消耗與產出的總計，以及更新後的倉庫
 */
export function runProductionRound(city: CityData): {
  updatedInventory: ResourceMap;
  noProductionBuildingIds: string[];
  productionLog: string[];
} {
  const { t } = useLingui();
  const inventory = { ...city.resources };
  const productionLog: string[] = [];

  const activeBuildings = city.buildings.filter((building) => {
    return (
      !building.isDisabled &&
      !building.isUnderConstruction &&
      building.hp > 0 &&
      building.recipes.length > 0
    );
  });

  const prioritizedBuildings = activeBuildings.filter((b) => b.isPrioritized);
  const normalBuildings = activeBuildings.filter((b) => !b.isPrioritized);

  const processProductionGroup = (buildingsGroup: BuildingData[]) => {
    let remainingBuildings = [...buildingsGroup];
    let productionOccurred = true;
    var nextRoundBuildings: BuildingData[] = [];

    while (productionOccurred && remainingBuildings.length > 0) {
      productionOccurred = false;
      nextRoundBuildings = [];

      for (const building of remainingBuildings) {
        let recipeExecuted = false;
        let recipe = building.recipes[building.activeRecipeIndex ?? 0];

        if (
          canAffordRecipe(
            city.productionStrength,
            inventory,
            recipe,
            building.productionStrengthCostMultiplier,
          )
        ) {
          // 扣除輸入
          const consumedProductionStrength = consumeInputs(
            inventory,
            recipe,
            building.productionStrengthCostMultiplier,
          );
          city.productionStrength -= consumedProductionStrength;
          // 加上輸出
          produceOutputs(
            inventory,
            recipe,
            building.productionOutputMultiplier,
          );

          productionLog.push(
            t`Building [${building.name} (ID: ${building.id})] produced resources using recipe [${building.activeRecipeIndex}]`,
          );
          recipeExecuted = true;
          productionOccurred = true;
          break;
        }

        if (!recipeExecuted) {
          nextRoundBuildings.push(building);
        }
      }

      // 更新剩餘未生產的建築名單
      remainingBuildings = nextRoundBuildings;
    }
    return remainingBuildings;
  };

  const remainingBuildings = processProductionGroup(prioritizedBuildings);
  const noProductionBuildings = processProductionGroup(normalBuildings.concat(remainingBuildings));

  return {
    updatedInventory: inventory,
    noProductionBuildingIds: noProductionBuildings.map(b => b.id),
    productionLog,
  };
}

/**
 * 檢查當前倉庫資源是否足夠執行該配方（考慮產量/消耗加成）
 */
function canAffordRecipe(
  cityProductionStrength: number,
  inventory: ResourceMap,
  recipe: ProductionRecipe,
  costMultiplier: number,
): boolean {
  if (cityProductionStrength < Math.floor(recipe.productionStrengthCost * costMultiplier)) {
    return false;
  }
  for (const [resourceId, amount] of Object.entries(recipe.inputs)) {
    const required = amount;
    const available = inventory[resourceId] || 0;
    if (available < required) {
      return false;
    }
  }
  return true;
}

/**
 * 扣除配方消耗的資源
 */
function consumeInputs(
  inventory: ResourceMap,
  recipe: ProductionRecipe,
  costMultiplier: number,
): number {
  for (const [resourceId, amount] of Object.entries(recipe.inputs)) {
    const required = amount;
    inventory[resourceId] = (inventory[resourceId] || 0) - required;
  }
  return Math.floor(recipe.productionStrengthCost * costMultiplier);
}

/**
 * 增加配方產出的資源
 */
function produceOutputs(
  inventory: ResourceMap,
  recipe: ProductionRecipe,
  outputMultiplier: number,
): void {
  for (const [resourceId, amount] of Object.entries(recipe.outputs)) {
    const produced = Math.floor(amount * outputMultiplier);
    inventory[resourceId] = (inventory[resourceId] || 0) + produced;
  }
}
