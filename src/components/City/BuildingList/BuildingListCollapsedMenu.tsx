import { i18n } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";
import type { BuildingData } from "../../../types/building-status";
import type { ProductionRecipe } from "../../../types/production-recipe";
import type { MessageDescriptor } from "@lingui/core";
import type { Dispatch, SetStateAction } from "react";
import { InputOutputRecipe } from "../IORecipe";
import { ToggleSwitch } from "../../ToggleSwitch";

interface BuildingListContentCollapsedMenuProps {
  building_uid: string;
  building_description: MessageDescriptor;
  building_recipes: ProductionRecipe[];
  building_activeRecipeIndex: number;
  building_productionStrengthCostMultiplier: number;
  building_productionOutputMultiplier: number;
  building_isPrioritized: boolean;
  building_isDisabled: boolean;
  onDataUpdate: (
    buildingUid: string,
    updates: Partial<
      Pick<BuildingData, "activeRecipeIndex" | "isPrioritized" | "isDisabled">
    >,
  ) => void;
  onActiveRecipeIndexChange?: Dispatch<SetStateAction<number>>;
  onIsPrioritizedChange?: Dispatch<SetStateAction<boolean>>;
  onIsDisabledChange?: Dispatch<SetStateAction<boolean>>;
}

export const BuildingListContentCollapsedMenu: React.FC<
  BuildingListContentCollapsedMenuProps
> = ({
  building_uid,
  building_description,
  building_recipes,
  building_activeRecipeIndex,
  building_productionStrengthCostMultiplier,
  building_productionOutputMultiplier,
  building_isPrioritized,
  building_isDisabled,
  onDataUpdate,
  onActiveRecipeIndexChange,
  onIsPrioritizedChange,
  onIsDisabledChange,
}) => {
  const { t } = useLingui();
  return (
    <div className="flex flex-col gap-4 border-t border-slate-700/50 pt-4 text-slate-200">
      <div className="flex flex-col gap-2 md:col-span-2">
        <p className="text-sm text-left leading-6 text-slate-300">
          {i18n.t(building_description)}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {t`Active Recipe`}
        </span>
        <div className="flex gap-4 justify-center items-center">
          {building_recipes.length > 1 &&
            building_recipes.map((_, recipeIndex) => (
              <button
                key={recipeIndex}
                className="w-full rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 border-gray-800 disabled:border-amber-600 hover:not-disabled:brightness-150 transition-all duration-200"
                onClick={() => {
                  onDataUpdate(building_uid, {
                    activeRecipeIndex: recipeIndex,
                  });
                  onActiveRecipeIndexChange?.(recipeIndex);
                }}
                disabled={recipeIndex === building_activeRecipeIndex}
              >
                <span>{recipeIndex + 1}</span>
              </button>
            ))}
        </div>
        <InputOutputRecipe
          recipe={building_recipes[building_activeRecipeIndex]}
          productionStrengthCostMultiplier={
            building_productionStrengthCostMultiplier
          }
          productionOutputMultiplier={building_productionOutputMultiplier}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 px-3 py-2">
          <span className="text-sm text-slate-100">{t`Prioritize Building`}</span>
          <ToggleSwitch
            checked={building_isPrioritized}
            onChange={(checked) => {
              onDataUpdate(building_uid, {
                isPrioritized: checked,
              });
              onIsPrioritizedChange?.(checked);
            }}
          />
        </label>

        <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 px-3 py-2">
          <span className="text-sm text-slate-100">{t`Disable Building`}</span>
          <ToggleSwitch
            checked={building_isDisabled}
            onChange={(checked) => {
              onDataUpdate(building_uid, {
                isDisabled: checked,
              });
              onIsDisabledChange?.(checked);
            }}
          />
        </label>
      </div>
    </div>
  );
};
