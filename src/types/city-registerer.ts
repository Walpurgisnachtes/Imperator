import type { CityData } from "./city-data";

let cities: CityData[] = [];

const cityRegisterers: Set<CityData> = new Set();

export function registerCity(city: CityData): void {
  cityRegisterers.add(city);
}

export function loadCities(): void {
  cities = [];
  for (const registerer of cityRegisterers) {
    cities.push(registerer);
  }
}

export function getCities(): CityData[] {
  return cities;
}

export function getCityByUid(uid: string): CityData | undefined {
  return cities.find((city) => city.uid === uid);
}

export function getCityByName(nameId: string): CityData | undefined {
  return cities.find((city) => city.nameId === nameId);
}
