import type { MessageDescriptor } from "@lingui/core";
import type { GeometryLimitations } from "./geometry-limitations";

export type CityBuildingLimitation = {
  name: MessageDescriptor;
  buildingLimit: number;
  geometryLimitation: GeometryLimitations;
};
