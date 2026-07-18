import type { MessageDescriptor } from "@lingui/core";

export type GameRule = {
  id: string;
  name: MessageDescriptor;
  value: number|string|boolean;

  isEnabled: boolean;
  isVisible: boolean;
  isEditable: boolean;
};