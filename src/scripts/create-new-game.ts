import { getCapitalCity, setCapitalCity } from "../data/capital-city";
import {
  resetGameStatus,
  gameStatus as gameData,
} from "../data/static-data/game-data";
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
  const newCity = getCityByName("city-name-italia");
  if (!newCity) {
    throw new Error("Default city data not found");
  }
  gameData.cities.push(newCity);
  setCapitalCity(newCity.uid);
}
