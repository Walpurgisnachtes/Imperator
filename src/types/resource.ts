import type { MessageDescriptor } from "@lingui/core";

export type Resource = {
  id: string;
  name: MessageDescriptor;
  description: MessageDescriptor;
  nutritionValue: number;
  tags: string[];
};
