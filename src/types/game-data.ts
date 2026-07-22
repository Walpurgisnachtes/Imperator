import type { CityData } from "./city-data";

export interface GameData {
  hash: string;
  gameVersion: string;
  cities: CityData[];
  capitalId: string;
}
