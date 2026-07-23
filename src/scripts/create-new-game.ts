import {
  addBuildingToCity,
  updateCapitalCity,
} from "../data/current-game-data";
import { resetGameData, addCity } from "../data/current-game-data";
import type { CityData } from "../types/city-data";
import { createCityInfo } from "../types/city-info";
import { CityInfoStore } from "../types/city-info-store";
import { getCityByName } from "../types/city-registerer";

// Use async prepare for future large loading

export async function createNewGame(): Promise<void> {
  resetGameData();

  const newCity = initFirstCity();

  CityInfoStore.setCityInfo(createCityInfo(newCity));
}

function initFirstCity(): CityData {
  // Set the first city
  const newCity = getCityByName("city-italia");
  if (!newCity) {
    throw new Error("Default city data not found");
  }
  addCity(newCity);
  updateCapitalCity(newCity.uid);

  // Give 2 starting wheat farms (ignore resource and primary sector building limit)
  addBuildingToCity(newCity.uid, "building-wheat-farm", 2, true);

  return newCity;
}
