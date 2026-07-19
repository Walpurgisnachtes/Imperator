import { msg } from "@lingui/core/macro";
import type { Resource } from "../../../types/resource";

export const pork: Resource = {
  id: "pork",
  name: msg`Pork`,
  description: msg`Pork is a type of meat that comes from pigs. It is a staple food in many cultures and is often used in stews, curries, and roasts.`,
  nutritionValue: 35,
  tags: ["food", "meat"],
};
