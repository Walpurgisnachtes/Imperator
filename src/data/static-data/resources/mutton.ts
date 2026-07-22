import { msg } from "@lingui/core/macro";
import type { Resource } from "../../../types/resource";

export const mutton: Resource = {
  id: "mutton",
  name: msg`Mutton`,
  description: msg`Mutton is a type of meat that comes from sheep. It is a staple food in many cultures and is often used in stews, curries, and roasts.`,
  nutritionValue: 20,
  tags: ["food", "meat"],
};
