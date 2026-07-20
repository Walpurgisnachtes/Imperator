import { getCapitalCity, setCapitalCity } from "../data/capital-city";
import {
  resetGameStatus,
  gameStatus as gameData,
} from "../data/static-data/game-data";
import { getBuildingByName, cloneBuilding } from "../types/building-registerer";
import { createCityInfo } from "../types/city-info";
import { CityInfoStore } from "../types/city-info-store";
import { getCityByName } from "../types/city-registerer";

// Use async prepare for future large loading

export async function createNewGame(): Promise<void> {
  resetGameStatus();

  initFirstCity();

  CityInfoStore.setCityInfo(createCityInfo(getCapitalCity()));
}

function initFirstCity() {
  // Set the first city
  const newCity = getCityByName("city-italia");
  if (!newCity) {
    throw new Error("Default city data not found");
  }
  gameData.cities.push(newCity);
  setCapitalCity(newCity.uid);

  // Give 2 starting wheat farms (ignore resource and primary sector building limit)
  const wheatFarmBuilding = getBuildingByName("building-wheat-farm");
  newCity.buildings.push(
    ...Array.from({ length: 2 }, () => cloneBuilding(wheatFarmBuilding!)),
  );
}
