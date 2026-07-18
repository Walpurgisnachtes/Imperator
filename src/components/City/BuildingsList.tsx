import React from "react";
import type { CityData } from "../../types/city-data";
import { gameRules } from "../../data/static-data/game-rules";

export const BuildingsList: React.FC<{ data: CityData }> = ({ data }) => {
  const buildingCapacity = gameRules.buildingCapacityPerCity +
    Math.floor(data.population / 100000) * gameRules.buildingCapacityIncrement || 0;


  return (
    <div id="buildings-list" className="relative flex flex-col gap-4 w-2xs max-h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
      <ul>
        {data.buildings.map((building) => (
          <li key={building.id}>
            {building.name} - Level: {building.level}
          </li>
        ))}
      </ul>
    </div>
  );
};
