export type GameContentHTMLContext =
  | "city/building" // Default state
  | "city/dialog";

let gameContentHTMLContext: GameContentHTMLContext = "city/building";

const listeners = new Set<() => void>();

export class GameContentHTMLContextStore {
  static getSnapshot(): GameContentHTMLContext {
    return gameContentHTMLContext;
  }

  static subscribe(listener: () => void) {
    listeners.add(listener);

    return () => listeners.delete(listener);
  }

  static setGameContentHTMLContext(newContext: GameContentHTMLContext) {
    gameContentHTMLContext = newContext;

    listeners.forEach((listener) => listener());
  }
}
