import React from "react";
import type { CityData } from "../../types/city-data";
import { getGameRuleValueById } from "../../data/static-data/game-rules";

// TODO: Remove the magic number 10000
export const BuildingsList: React.FC<{ data: CityData }> = ({ data }) => {
  const buildingCapacity =
    (getGameRuleValueById<number>("buildingCapacityPerCity") || 0) +
    Math.floor(data.population / 10000) *
      (getGameRuleValueById<number>("buildingCapacityIncrement") || 0);

  const canBuildMore = data.buildings.length < buildingCapacity;

  return (
    <div
      id="buildings-list"
      className="relative flex flex-col gap-4 w-3xl max-h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm"
    >
      <ul>
        {data.buildings.map((building, idx) => (
          <li
            key={building.id}
            className={`text-lg font-bold text-slate-100 ${idx < data.buildings.length - 1 || canBuildMore ? `border-b border-slate-700 pb-2` : ``}`}
          >
            
          </li>
        ))}
        {canBuildMore && (
          <li className="text-lg font-bold text-slate-100">
            Build more spaceholder
          </li>
        )}
      </ul>
    </div>
  );
};
