import React, { useState } from "react";
import type { CityData } from "../../types/city-data";
import type { BuildingData } from "../../types/building-status";
import { updateBuildingInCity } from "../../data/current-game-data";
import { getGameRuleValueById } from "../../data/static-data/game-rules";
import { BuildingListContent } from "./BuildingListContent";
import { getBuildingInCity } from "../../data/current-game-data";

// TODO: Remove the magic number 10000
export const BuildingList: React.FC<{ data: CityData }> = ({ data }) => {
  const [expandedBuildingUid, setExpandedBuildingUid] = useState<string | null>(
    null,
  );
  const buildingCapacity =
    data.buildingLimit +
    Math.floor(data.population / 10000) *
      (getGameRuleValueById<number>("buildingCapacityIncrement") || 0);

  const canBuildMore = data.buildings.length < buildingCapacity;

  const updateBuilding = (
    buildingUid: string,
    updates: Partial<
      Pick<
        BuildingData,
        "name" | "activeRecipeIndex" | "isPrioritized" | "isDisabled"
      >
    >,
  ) => {
    updateBuildingInCity(data.uid, buildingUid, updates);
    console.log(
      "Updated building:",
      getBuildingInCity(data.uid, buildingUid),
      "with updates:",
      updates,
    );
  };

  return (
    <div
      id="buildings-list"
      className="flex flex-col items-center gap-4 w-5xl h-[70vh] overflow-y-scroll rounded-xl border border-slate-700/50 bg-slate-800/40 p-8 backdrop-blur-sm"
    >
      {data.buildings.map((building) => (
        <BuildingListContent
          key={building.uid}
          building={building}
          isExpanded={expandedBuildingUid === building.uid}
          onExpandedChange={(nextIsExpanded) => {
            setExpandedBuildingUid(nextIsExpanded ? building.uid : null);
          }}
          onUpdate={updateBuilding}
        />
      ))}
      {canBuildMore && (
        <div
          className={`flex flex-col gap-4 w-4xl rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm`}
        >
          Build More SpaceHolder
        </div>
      )}
    </div>
  );
};
