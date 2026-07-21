import { gameData } from "./static-data/game-data";
import type { CityData } from "../types/city-data";
import { systemMsg } from "./static-data/system-msg";
import { i18n } from "@lingui/core";

export function getCapitalCity(): CityData {
  let capitalCity = gameData.cities.find(
    (city) => city.uid === gameData.capitalId,
  );
  if (capitalCity) {
    return capitalCity;
  } else {
    console.error(i18n.t(systemMsg.capitalCityNotFound), gameData.cities);
    return gameData.cities[0];
  }
}

export function setCapitalCity(cityId: string): void {
  const city = gameData.cities.find((city) => city.uid === cityId);
  if (city) {
    gameData.capitalId = cityId;
  }
}