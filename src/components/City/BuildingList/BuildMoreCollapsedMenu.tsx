import { i18n } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";
import { getBuildingByName } from "../../../types/building-registerer";

interface BuildMoreCollapsedMenuProps {
  availableBuildings: { [buildingNameId: string]: number };
  onAddBuilding: (newBuildingNameId: string) => void;
}

export const BuildMoreCollapsedMenu: React.FC<BuildMoreCollapsedMenuProps> = ({
  availableBuildings,
  onAddBuilding,
}) => {
  const { t } = useLingui();
  return (
    <div className="flex flex-col gap-4 border-t border-slate-700/50 pt-4 text-slate-200">
      {Object.entries(availableBuildings).map(
        ([buildingNameId, count], index) => {
          const building = getBuildingByName(buildingNameId);
          let buildingName = building ? i18n.t(building.name) : "Undefined";

          return (
            <div
              key={buildingNameId}
              className={`flex flex-row justify-between items-center gap-2 md:col-span-2 ${index === 0 ? "" : "border-t border-slate-700/50 pt-4"}`}
            >
              <p className="text-left leading-6 text-slate-300">
                {t`${buildingName}: ${count}`}
              </p>
              <button
                className="w-24 h-10 p-2 m-2 flex flex-col justify-center items-center shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 border-4 rounded-xl border-gray-800 disabled:border-amber-600 hover:not-disabled:brightness-150 transition-all duration-200"
                onClick={() => onAddBuilding(buildingNameId)}
              >
                {t`Construct`}
              </button>
            </div>
          );
        },
      )}
    </div>
  );
};
