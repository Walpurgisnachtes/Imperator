// city-info-store.ts

import type { CityInfo } from "./city-info";
import { defaultCityInfo } from "./city-info";

let cityInfo: CityInfo = defaultCityInfo;

const listeners = new Set<() => void>();

export class CityInfoStore {
  static getSnapshot(): CityInfo {
    return cityInfo;
  }

  static subscribe(listener: () => void) {
    listeners.add(listener);

    return () => listeners.delete(listener);
  }

  static setCityInfo(newCityInfo: CityInfo) {
    cityInfo = newCityInfo;

    listeners.forEach((listener) => listener());
  }
}
