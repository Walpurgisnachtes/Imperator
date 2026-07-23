import { useSyncExternalStore, type FC } from "react";
import { BuildingManager } from "../../../scripts/construct-building-manager";
import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import AddMenuIcon from "../../../assets/plus.svg?react";
import CollapseMenuIcon from "../../../assets/x_mark.svg?react";
import { BuildMoreCollapsedMenu } from "./BuildMoreCollapsedMenu";
import { GameDataStore } from "../../../data/current-game-data";

interface BuildMoreMenuProps {
  cityUid: string;
  isExpanded: boolean;
  onExpandedChange: (isExpanded: boolean) => void;
  onAddBuilding: (newBuildingNameId: string) => void;
}

export const BuildMoreMenu: FC<BuildMoreMenuProps> = ({
  cityUid,
  isExpanded,
  onExpandedChange,
  onAddBuilding,
}) => {
  const gameData = useSyncExternalStore(
    GameDataStore.subscribe,
    GameDataStore.getSnapshot,
  );

  const availableBuildings: { [buildingNameId: string]: number } =
    BuildingManager.getInstance().possibleBuildingsRemaining(gameData, cityUid);

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
      <button
        type="button"
        onClick={() => onExpandedChange(!isExpanded)}
        className="flex items-center justify-between gap-4 text-left"
      >
        <div className="building-name-container flex items-center gap-2">
          <span className="building-name text-lg font-semibold text-slate-100">
            {i18n.t(msg`Construct More Buildings`)}
          </span>
        </div>
        <div className="text-sm font-medium text-slate-300 w-[24px] h-[24px]">
          {/* Show Menu */}
          <AddMenuIcon
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
      </button>

      {isExpanded && (
        <BuildMoreCollapsedMenu
          availableBuildings={availableBuildings}
          onAddBuilding={onAddBuilding}
        />
      )}
    </div>
  );
};
