import { msg } from "@lingui/core/macro";
import type { Resource } from "../../../types/resource";

export const wheat: Resource = {
  id: "wheat",
  name: msg`Wheat`,
  description: msg`Wheat is a cereal grain that is a staple food in many cultures. It is used to make flour for bread, pasta, and other baked goods.`,
  nutritionValue: 20,
  tags: ["food", "vegetable"],
};
