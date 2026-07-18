export type GameRule = {
  id: string;
  name: string;
  value: number|string|boolean;

  isEnabled: boolean;
  isVisible: boolean;
  isEditable: boolean;
};