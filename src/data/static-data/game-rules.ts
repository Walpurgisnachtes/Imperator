import type { GameRule } from "../../types/game-rule";
import { msg } from "@lingui/core/macro";

export const gameRules: GameRule[] = [
  {
    id: "buildingCapacityPerCity",
    name: msg`Building Capacity per City`,
    value: 20,
    isEnabled: true,
    isVisible: true,
    isEditable: true,
  },
  {
    id: "buildingCapacityIncrement",
    name: msg`Building Capacity Increment with Population`,
    value: 20,
    isEnabled: true,
    isVisible: true,
    isEditable: true,
  }
];

export function getGameRuleValueById<T>(ruleId: string): T | undefined {
  const rule = gameRules.find(rule => rule.id === ruleId);
  return rule ? (rule.value as T) : undefined;
}
