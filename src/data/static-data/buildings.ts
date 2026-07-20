import type { BuildingData } from "../../types/building-status";
import type { ProductionRecipe } from "../../types/production-recipe";
import type { BuildingRequirement } from "../../types/building-requirement";
import type { MessageDescriptor } from "@lingui/core";
import { v4 as UUIDv4 } from "uuid";

/**
 *
 * @param name Name of the building.
 * @param description Description of the building.
 * @param recipes Output recipes of the building. Only one of them could be chosen.
 * @param tags Used for filtering, searching and ability tagging.
 * @param requirements Requirements for the building to be built. If not met, the building cannot be built.
 * @param constructionCost Use production strength as cost. Production strength will be regenerated each round (each month).
 * @param maintenanceCost Use gold as cost, deducted each round (each month).
 * @param maxHp HP of the building, only matters if the building is military building.
 * @param productionStrengthCostMultiplier Multiplier for the production strength cost for each recipe. Default 1.
 * @param productionOutputMultiplier Multiplier for the production output. Multiplied by 1.2 each building level. Default 1.
 * @returns
 */
export function createDefaultBuilding(
  name: MessageDescriptor,
  nameId: string,
  description: MessageDescriptor,
  recipes: ProductionRecipe[],
  tags?: string[],
  requirements?: BuildingRequirement,
  constructionCost?: number,
  maintenanceCost?: number,
  maxHp?: number,
  productionStrengthCostMultiplier?: number,
  productionOutputMultiplier?: number,
): BuildingData {
  let hp = maxHp ?? 100;

  return {
    id: UUIDv4(),
    name,
    nameId,
    description,
    tags: tags ?? [],
    requirements: requirements ?? {},
    level: 1,
    constructionCost: constructionCost ?? 100,
    maintenanceCost: maintenanceCost ?? 10,
    isUnderConstruction: false,
    hp: hp,
    maxHp: hp,
    recipes,
    activeRecipeIndex: 0,
    productionStrengthCostMultiplier: productionStrengthCostMultiplier ?? 1,
    productionOutputMultiplier: productionOutputMultiplier ?? 1,
    isPrioritized: false,
    isDisabled: false,
    prioritizedInputs: {},
  };
}
