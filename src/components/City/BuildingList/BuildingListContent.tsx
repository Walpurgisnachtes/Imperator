import { useState } from "react";
import type { BuildingData } from "../../../types/building-status";
import { i18n, type MessageDescriptor } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";

import RenameBuildingIcon from "../../../assets/pencil_square.svg?react";
import TrashIcon from "../../../assets/trash.svg?react";
import CollapseMenuIcon from "../../../assets/x_mark.svg?react";
import ShowMenuIcon from "../../../assets/bars-3.svg?react";
import { BuildingListContentCollapsedMenu } from "./BuildingListCollapsedMenu";

type BuildingListContentProps = {
  building: BuildingData;
  isExpanded: boolean;
  onExpandedChange: (isExpanded: boolean) => void;
  onUpdate: (
    buildingUid: string,
    updates: Partial<
      Pick<BuildingData, "activeRecipeIndex" | "isPrioritized" | "isDisabled">
    >,
  ) => void;
  isDoubleConfirming: boolean;
  onDoubleConfirmingChange: (isDoubleConfirming: boolean) => void;
  onRemoveBuilding: (removeBuildingUid: string) => void;
};

export const BuildingListContent: React.FC<BuildingListContentProps> = ({
  building,
  isExpanded,
  onExpandedChange,
  onUpdate,
  isDoubleConfirming,
  onDoubleConfirmingChange,
  onRemoveBuilding,
}) => {
  const { t } = useLingui();
  const [buildingName, setBuildingName] = useState<MessageDescriptor>(
    building.name,
  );
  const [buildingIsPrioritized, setBuildingIsPrioritized] = useState(
    building.isPrioritized,
  );
  const [buildingIsDisabled, setBuildingIsDisabled] = useState(
    building.isDisabled,
  );
  const [buildingActiveRecipeIndex, setBuildingActiveRecipeIndex] = useState(
    building.activeRecipeIndex,
  );
  if (isDoubleConfirming) {
    return (
      <div className="flex flex-row items-center justify-between gap-4 w-4xl rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
        <button
          className="w-full rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 border-rose-800 hover:brightness-150 transition-all duration-200"
          onClick={() => {
            onRemoveBuilding(building.uid);
            onDoubleConfirmingChange(false);
          }}
        >
          {t`Confirm`}
        </button>
        <button
          className="w-full rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 border-lime-800 hover:brightness-150 transition-all duration-200"
          onClick={() => onDoubleConfirmingChange(false)}
        >
          {t`Cancel`}
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-4 w-4xl rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm"
      onContextMenu={(event) => {
        if (!isExpanded) {
          return;
        }

        event.preventDefault();
        onExpandedChange(false);
      }}
    >
      <div
        onClick={() => onExpandedChange(!isExpanded)}
        className="flex items-center justify-between gap-4 text-left"
      >
        <div className="building-name-container flex items-center gap-2">
          <span className="building-name text-lg font-semibold text-slate-100">
            {i18n.t(buildingName)}
          </span>
          <RenameBuildingIcon className="h-4 w-4 text-slate-400" />
          {buildingIsPrioritized && (
            <span className="rounded-full bg-amber-400/20 px-2 py-1 text-xs font-medium text-amber-200">
              {t`Priority`}
            </span>
          )}
          {buildingIsDisabled && (
            <span className="rounded-full bg-rose-400/20 px-2 py-1 text-xs font-medium text-rose-200">
              {t`Disabled`}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between gap-4 text-left">
          <div
            className="text-sm font-medium text-slate-300 w-[24px] h-[24px]"
            onClick={(e) => {
              e.stopPropagation();
              onDoubleConfirmingChange(true);
            }}
          >
            <TrashIcon className="h-6 w-6" />
          </div>
          <div className="text-sm font-medium text-slate-300 w-[24px] h-[24px]">
            {/* Show Menu */}
            <ShowMenuIcon
              className={`absolute h-6 w-6 transition-all duration-300 ease-in-out
              ${
                isExpanded
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            {/* Collapse Menu */}
            <CollapseMenuIcon
              className={`absolute h-6 w-6 transition-all duration-300 ease-in-out
              ${
                isExpanded
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <BuildingListContentCollapsedMenu
          building_uid={building.uid}
          building_description={building.description}
          building_recipes={building.recipes}
          building_activeRecipeIndex={buildingActiveRecipeIndex}
          building_productionStrengthCostMultiplier={
            building.productionStrengthCostMultiplier
          }
          building_productionOutputMultiplier={
            building.productionOutputMultiplier
          }
          building_isPrioritized={buildingIsPrioritized}
          building_isDisabled={buildingIsDisabled}
          onDataUpdate={onUpdate}
          onActiveRecipeIndexChange={setBuildingActiveRecipeIndex}
          onIsPrioritizedChange={setBuildingIsPrioritized}
          onIsDisabledChange={setBuildingIsDisabled}
        />
      )}
    </div>
  );
};
