import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`
    relative inline-flex h-7 w-12 items-center rounded-full
    border border-slate-600
    shadow-inner
    transition-all duration-300
    ${
      checked
        ? "bg-emerald-800/90 shadow-emerald-700/30"
        : "bg-rose-800/90 shadow-rose-700/30"
    }
  `}
    >
      <span
        className={`
      absolute h-5 w-5 rounded-full
      bg-white
      shadow-lg
      transition-all duration-300 ease-out
      ${checked ? "translate-x-6" : "translate-x-1"}
    `}
      />
    </button>
  );
};
