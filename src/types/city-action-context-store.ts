export type CityActionType =
  | "city/building" // Default state
  | "city/trade"
  | "city/military"
  | "city/intelligence"
  | "city/politics"
  | "city/diplomacy"
  | "city/research"
  | "city/alchemy"
  | "city/culture"
  | "city/religion"
  | "city/magic"
  | "city/pandemic"
  | "city/dialog";

let gameContentHTMLContext: CityActionType = "city/building";

const listeners = new Set<() => void>();

export class CityActionContextStore {
  static getSnapshot(): CityActionType {
    return gameContentHTMLContext;
  }

  static subscribe(listener: () => void) {
    listeners.add(listener);

    return () => listeners.delete(listener);
  }

  static setCityActionContext(newContext: CityActionType) {
    gameContentHTMLContext = newContext;

    listeners.forEach((listener) => listener());
  }
}
