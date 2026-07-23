import React, { useState } from "react";
import type { CityData } from "../../../types/city-data";
import type { BuildingData } from "../../../types/building-status";
import {
  addBuildingToCity,
  removeBuildingFromCity,
  updateBuildingInCity,
} from "../../../data/current-game-data";
import { getGameRuleValueById } from "../../../data/static-data/game-rules";
import { BuildingListContent } from "./BuildingListContent";
import { BuildMoreMenu } from "./BuildMoreMenu";
import { BuildingUnderConstructionListContent } from "./BuildingUnderConstructionList";

// TODO: Remove the magic number 10000
export const BuildingList: React.FC<{ data: CityData }> = ({ data }) => {
  const [expandedBuildingUid, setExpandedBuildingUid] = useState<string | null>(
    null,
  );
  const [doubleConfirmingBuildingUid, setDoubleConfirmingBuildingUid] =
    useState<string | null>(null);
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
    console.log("Updated building with updates:", updates);
  };

  const addBuilding = (buildingNameId: string) => {
    const newBuildingUids = addBuildingToCity(data.uid, buildingNameId);
    console.log("Add building:", newBuildingUids);
  };

  const removeBuilding = (buildingUid: string) => {
    removeBuildingFromCity(data.uid, buildingUid);
    console.log("Remove building:", buildingUid);
  };

  const activeBuildings = data.buildings.filter(
    (building) => !building.isUnderConstruction && building.hp !== 0,
  );
  const constructingBuildings = data.buildings.filter(
    (building) => building.isUnderConstruction,
  );

  return (
    <div
      className="flex flex-col items-center gap-4 w-5xl overflow-y-scroll"
      id="buildings-list"
    >
      {activeBuildings.map((building) => (
        <BuildingListContent
          key={building.uid}
          building={building}
          isExpanded={expandedBuildingUid === building.uid}
          onExpandedChange={(nextIsExpanded) => {
            setExpandedBuildingUid(nextIsExpanded ? building.uid : null);
          }}
          isDoubleConfirming={doubleConfirmingBuildingUid === building.uid}
          onDoubleConfirmingChange={(nextIsDoubleConfirming) => {
            setDoubleConfirmingBuildingUid(
              nextIsDoubleConfirming ? building.uid : null,
            );
          }}
          onUpdate={updateBuilding}
          onRemoveBuilding={removeBuilding}
        />
      ))}
      {constructingBuildings.map((building) => (
        <BuildingUnderConstructionListContent
          key={building.uid}
          building={building}
          onRemoveBuilding={removeBuilding}
          isDoubleConfirming={doubleConfirmingBuildingUid === building.uid}
          onDoubleConfirmingChange={(nextIsDoubleConfirming) => {
            setDoubleConfirmingBuildingUid(
              nextIsDoubleConfirming ? building.uid : null,
            );
          }}
        />
      ))}
      {canBuildMore && (
        <BuildMoreMenu
          cityUid={`${data.uid}`}
          isExpanded={expandedBuildingUid === "build-more"}
          onExpandedChange={(nextIsExpanded) => {
            setExpandedBuildingUid(nextIsExpanded ? "build-more" : null);
          }}
          onAddBuilding={addBuilding}
        />
      )}
    </div>
  );
};
