import type { SVGProps } from "react";
import type { CityInfo } from "./city-info";
import type { MessageDescriptor } from "@lingui/core";

export interface Information {
  id: string; // Unique identifier for the information item
  label: string | MessageDescriptor;
  description?: string | MessageDescriptor; // Optional description for the information item
  value: string | number;
  icon?: string; // Optional icon for the information item
  hidden?: boolean; // Optional flag to indicate if the information item should be hidden
}

export interface InformationColumnProps {
  title: string;
  statusImage: React.FC<SVGProps<SVGSVGElement>>; // SVG image representing the status of the information column
  information: CityInfo;
  onInformationHover?: (item: Information | null) => void;
}
