import { useState, type FC } from "react";
import { CityActionButton } from "./CityActionButton";
import type { CityActionType } from "../../../types/city-action-context-store";
import { cityActions } from "../../../types/city-action";

export const CityActionSelector: FC = () => {
  const [selectedAction, setSelectedAction] =
    useState<CityActionType>("city/building");

  return (
    <div className="grid grid-cols-2 content-start justify-items-center gap-4 w-2xs max-h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
      {cityActions.map((action, idx) => (
        <CityActionButton
          key={action.actionType}
          imageComponent={action.imageComponent}
          actionName={action.actionType}
          actionTitle={action.actionName}
          currentSelectedAction={selectedAction}
          onClick={() => setSelectedAction(action.actionType)}
          occupiesFullWidth={
            idx === cityActions.length - 1 && cityActions.length % 2 !== 0
          }
        />
      ))}
    </div>
  );
};
