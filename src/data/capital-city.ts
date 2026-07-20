import { gameStatus } from "./static-data/game-data";
import type { CityData } from "../types/city-data";
import { systemMsg } from "./static-data/system-msg";
import { i18n } from "@lingui/core";

export function getCapitalCity(): CityData {
  let capitalCity = gameStatus.cities.find(
    (city) => city.uid === gameStatus.capitalId,
  );
  if (capitalCity) {
    return capitalCity;
  } else {
    console.error(i18n.t(systemMsg.capitalCityNotFound), gameStatus.cities);
    return gameStatus.cities[0];
  }
}

export function setCapitalCity(cityId: string): void {
  const city = gameStatus.cities.find((city) => city.uid === cityId);
  if (city) {
    gameStatus.capitalId = cityId;
  }
}