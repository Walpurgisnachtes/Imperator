import { useState } from "react";
import type { BuildingData } from "../../../types/building-status";
import { i18n, type MessageDescriptor } from "@lingui/core";

import TrashIcon from "../../../assets/trash.svg?react";
import { useLingui } from "@lingui/react/macro";

type BuildingUnderConstructionListContentProps = {
  building: BuildingData;
  isDoubleConfirming: boolean;
  onDoubleConfirmingChange: (isDoubleConfirming: boolean) => void;
  onRemoveBuilding: (removeBuildingUid: string) => void;
};

export const BuildingUnderConstructionListContent: React.FC<
  BuildingUnderConstructionListContentProps
> = ({
  building,
  onRemoveBuilding,
  isDoubleConfirming,
  onDoubleConfirmingChange,
}) => {
  const { t } = useLingui();
  const [buildingNameMessage] = useState<MessageDescriptor>(building.name);

  const buildingName = i18n.t(buildingNameMessage);

  if (isDoubleConfirming) {
    return (
      <div className="flex flex-row items-center justify-between gap-4 w-4xl rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
        <button
          className="w-full rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 border-rose-800 hover:brightness-150 transition-all duration-200"
          onClick={() => {
            onRemoveBuilding(building.uid);
            onDoubleConfirmingChange(false);
          }}
        >
          {t`Confirm`}
        </button>
        <button
          className="w-full rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 border-lime-800 hover:brightness-150 transition-all duration-200"
          onClick={() => onDoubleConfirmingChange(false)}
        >
          {t`Cancel`}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-4xl rounded-xl border border-slate-700/50 bg-amber-800/40 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 text-left">
        <div className="building-name-container flex flex-row items-center gap-2">
          <span className="building-name text-lg font-semibold text-slate-100">
            {t`Constructing ${i18n.t(buildingName)}...`}
          </span>
          <span className="building-name text-lg font-semibold text-slate-100">
            {t`[${building.currentConstructed}/${building.constructionCost}]`}
          </span>
        </div>
        <div
          className="text-sm font-medium text-slate-300 w-[24px] h-[24px]"
          onClick={(e) => {
            e.stopPropagation();
            onDoubleConfirmingChange(true);
          }}
        >
          <TrashIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
