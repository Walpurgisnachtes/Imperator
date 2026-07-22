import type { FC, SVGProps } from "react";
import { createElement } from "react";
import { i18n, type MessageDescriptor } from "@lingui/core";
import {
  GameContentHTMLContextStore,
  type GameContentHTMLContext,
} from "../../../types/city-action-context-store";

interface CityActionButtonProps {
  imageComponent: FC<SVGProps<SVGSVGElement>>;
  actionName: GameContentHTMLContext;
  actionTitle: MessageDescriptor;
  currentSelectedAction: GameContentHTMLContext;
  onClick: () => void;
  occupiesFullWidth?: boolean;
  imageSize?: number;
}

export const CityActionButton: FC<CityActionButtonProps> = ({
  imageComponent,
  actionName,
  actionTitle,
  currentSelectedAction,
  onClick,
  occupiesFullWidth,
  imageSize = 16,
}) => {
  return (
    <button
      className={`${
        occupiesFullWidth ? "col-span-2" : ""
      } w-24 h-24 p-2 m-2 flex flex-col justify-center items-center shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 rounded-xl border-gray-800 disabled:border-amber-600 hover:not-disabled:brightness-150 transition-all duration-200`}
      onClick={() => {
        onClick();
        GameContentHTMLContextStore.setGameContentHTMLContext(actionName);
      }}
      disabled={currentSelectedAction === actionName}
    >
      {createElement(imageComponent, {
        className: `w-${imageSize} h-${imageSize}`,
      })}
      <span className="text-sm font-medium text-slate-200">
        {i18n.t(actionTitle)}
      </span>
    </button>
  );
};
