// components/InformationColumn.tsx
import React, { useState } from "react";
import type { Information, InformationColumnProps } from "../types/information";
import { InformationHoverBox } from "./InformationHoverBox";
import { CityNameGenerator } from "../data/static-data/city-names";
import { i18n } from "@lingui/core";

interface HoveredInformation {
  item: Information;
  position: {
    x: number;
    y: number;
  };
}

export const InformationColumn: React.FC<InformationColumnProps> = ({
  title,
  statusImage,
  information: items,
  onInformationHover,
}) => {
  const [hoveredInformation, setHoveredInformation] =
    useState<HoveredInformation | null>(null);

  const handleInformationEnter = (
    item: Information,
    event: React.MouseEvent<HTMLLIElement>,
  ) => {
    if (!item.description) {
      return;
    }
    setHoveredInformation({
      item,
      position: {
        x: event.clientX,
        y: event.clientY,
      },
    });
    onInformationHover?.(item);
  };

  const handleInformationMove = (
    item: Information,
    event: React.MouseEvent<HTMLLIElement>,
  ) => {
    if (!item.description) {
      return;
    }
    setHoveredInformation({
      item,
      position: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  };

  const handleInformationLeave = () => {
    setHoveredInformation(null);
    onInformationHover?.(null);
  };

  const labelGetter = (item: Information) => {
    if (typeof item.label === "string") {
      return item.label;
    }
    return i18n.t(item.label);
  };

  const valueGetter = (item: Information) =>
    item.id == "city-name"
      ? CityNameGenerator.getCityName(Number(item.value))
      : item.value;

  const filteredItems = {
    upper: items.upper.filter((item) => !item.hidden),
    middle: items.middle.filter((item) => !item.hidden),
    lower: items.lower.filter((item) => !item.hidden),
  };

  return (
    <div className="relative flex flex-col gap-4 w-2xs max-h-[80vh] rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
      <h3 className="text-lg font-bold text-slate-100 border-b border-slate-700 pb-2">
        {title}
      </h3>
      {statusImage && (
        <div className="flex items-center justify-center border-b border-slate-700 pb-4">
          {React.createElement(statusImage, {
            className: "h-auto xl:w-1/2",
          })}
        </div>
      )}
      <div
        id="information-list"
        className="flex flex-col gap-3 overflow-y-scroll"
      >
        <ul
          className={`flex flex-col gap-3 ${filteredItems.middle.length > 0 ? "border-b border-slate-700" : ""} pb-2`}
        >
          {filteredItems.upper.map((item) => {
            let label = labelGetter(item);
            let value = valueGetter(item);
            return (
              <li
                key={item.id}
                onMouseEnter={(event) => handleInformationEnter(item, event)}
                onMouseMove={(event) => handleInformationMove(item, event)}
                onMouseLeave={handleInformationLeave}
                className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
              >
                <span className="text-sm text-slate-400">{label}</span>
                <span className="text-sm font-semibold text-slate-200">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>

        {filteredItems.middle.length > 0 && (
          <ul
            className={`flex flex-col gap-3 ${filteredItems.lower.length > 0 ? "border-b border-slate-700" : ""} pb-2`}
          >
            {filteredItems.middle.map((item) => {
              let label = labelGetter(item);
              let value = valueGetter(item);
              return (
                <li
                  key={item.id}
                  onMouseEnter={(event) => handleInformationEnter(item, event)}
                  onMouseMove={(event) => handleInformationMove(item, event)}
                  onMouseLeave={handleInformationLeave}
                  className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
                >
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {filteredItems.lower.length > 0 && (
          <ul className="flex flex-col gap-3 pb-2">
            {filteredItems.lower.map((item) => {
              let label = labelGetter(item);
              let value = valueGetter(item);
              return (
                <li
                  key={item.id}
                  onMouseEnter={(event) => handleInformationEnter(item, event)}
                  onMouseMove={(event) => handleInformationMove(item, event)}
                  onMouseLeave={handleInformationLeave}
                  className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
                >
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {hoveredInformation ? (
        <InformationHoverBox
          item={hoveredInformation.item}
          position={hoveredInformation.position}
        />
      ) : null}
    </div>
  );
};
