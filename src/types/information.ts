import type { SVGProps } from "react";

export interface Information {
  id: string; // Unique identifier for the information item
  label: string;
  description?: string; // Optional description for the information item
  value: string | number;
  icon?: string; // Optional icon for the information item
}

export interface InformationColumnProps {
  title: string;
  statusImage: React.FC<SVGProps<SVGSVGElement>>; // SVG image representing the status of the information column
  information: {
    upper: Information[];
    middle: Information[];
    lower: Information[];
  };
  onInformationHover?: (item: Information | null) => void;
}