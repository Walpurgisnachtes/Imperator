import type { FC } from "react";
import type { ProductionRecipe } from "../../types/production-recipe";

import ProductionArrowFrame1 from "../../assets/production_arrow/production_arrow_1.svg?react";
import ProductionArrowFrame2 from "../../assets/production_arrow/production_arrow_2.svg?react";
import ProductionArrowFrame3 from "../../assets/production_arrow/production_arrow_3.svg?react";

import "./production_arrow.css";

interface IORecipeProps {
  recipe: ProductionRecipe;
  productionStrengthCostMultiplier: number;
  productionOutputMultiplier: number;
}

export const InputOutputRecipe: FC<IORecipeProps> = ({
  recipe,
  productionStrengthCostMultiplier,
  productionOutputMultiplier,
}) => {
  const recipeInputs =
    Object.keys(recipe.inputs).length === 0
      ? [
          {
            resourceId: "none",
            amount: 0,
          },
        ]
      : Object.entries(recipe.inputs).map(([resourceId, amount]) => ({
          resourceId,
          amount: amount,
        }));
  const recipeOutputs = Object.entries(recipe.outputs).map(
    ([resourceId, amount]) => ({
      resourceId,
      amount: amount * productionOutputMultiplier,
    }),
  );
  const recipeStrengthCost =
    recipe.productionStrengthCost * productionStrengthCostMultiplier;
  return (
    <div className="flex flex-row justify-around items-center w-full gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm recipe-container">
      <div className="flex flex-col items-center gap-2 p-4 w-[25%]">
        <div className="flex flex-row gap-2">
          {recipeInputs.map((input) => (
            <div
              key={`${input.resourceId}-${input.amount}`}
              className="flex flex-row items-center gap-1"
            >
              <span className="text-sm font-semibold text-slate-300">
                {input.resourceId}
              </span>
              <span
                className={`text-sm font-semibold text-slate-300 ${input.amount === 0 ? "hidden" : ""}`}
              >
                x{input.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="relative h-12 w-12 group">
          <ProductionArrowFrame1 className="production-arrow-frame frame1" />
          <ProductionArrowFrame2 className="production-arrow-frame frame2" />
          <ProductionArrowFrame3 className="production-arrow-frame frame3" />
        </div>
        <span className="text-sm font-semibold text-slate-300">
          Productivity Cost: {recipeStrengthCost}
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 w-[25%]">
        <div className="flex flex-row gap-2">
          {recipeOutputs.map((output) => (
            <div
              key={`${output.resourceId}-${output.amount}`}
              className="flex flex-row items-center gap-1"
            >
              <span className="text-sm font-semibold text-slate-300">
                {output.resourceId}
              </span>
              <span
                className={`text-sm font-semibold text-slate-300 ${output.amount === 0 ? "hidden" : ""}`}
              >
                x{output.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
