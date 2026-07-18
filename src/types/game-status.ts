import type { CityData } from "./city-data";

export interface GameStatus {
  hash: string;
  gameVersion: string;
  cities: CityData[];
}
