// components/InformationColumn.tsx
import React, { useState } from "react";
import type { Information, InformationColumnProps } from "../types/information";
import { InformationHoverBox } from "./InformationHoverBox";
import { CityNameGenerator } from "../data/static-data/city-names";

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

  return (
    <div className="relative flex flex-col gap-4 w-xs rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm">
      <h3 className="text-lg font-bold text-slate-100 border-b border-slate-700 pb-2">
        {title}
      </h3>
      {statusImage && (
        <div className="flex items-center justify-center border-b border-slate-700 pb-4">
          {React.createElement(statusImage, {})}
        </div>
      )}
      <div id="information-list" className="flex flex-col gap-3 overflow-y-scroll max-h-138">
        <ul
          className={`flex flex-col gap-3 ${items.middle.length > 0 ? "border-b border-slate-700" : ""} pb-2`}
        >
          {items.upper.map((item) => {
            let value =
              item.id == "city-name"
                ? CityNameGenerator.getCityName(Number(item.value))
                : item.value;
            return (
              <li
                key={item.id}
                onMouseEnter={(event) => handleInformationEnter(item, event)}
                onMouseMove={(event) => handleInformationMove(item, event)}
                onMouseLeave={handleInformationLeave}
                className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
              >
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-semibold text-slate-200">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>

        {items.middle.length > 0 && (
          <ul
            className={`flex flex-col gap-3 ${items.lower.length > 0 ? "border-b border-slate-700" : ""} pb-2`}
          >
            {items.middle.map((item) => {
              let value =
                item.id == "city-name"
                  ? CityNameGenerator.getCityName(Number(item.value))
                  : item.value;
              return (
                <li
                  key={item.id}
                  onMouseEnter={(event) => handleInformationEnter(item, event)}
                  onMouseMove={(event) => handleInformationMove(item, event)}
                  onMouseLeave={handleInformationLeave}
                  className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
                >
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {items.lower.length > 0 && (
          <ul className="flex flex-col gap-3 pb-2">
            {items.lower.map((item) => {
              let value =
                item.id == "city-name"
                  ? CityNameGenerator.getCityName(Number(item.value))
                  : item.value;
              return (
                <li
                  key={item.id}
                  onMouseEnter={(event) => handleInformationEnter(item, event)}
                  onMouseMove={(event) => handleInformationMove(item, event)}
                  onMouseLeave={handleInformationLeave}
                  className="flex cursor-help items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/30"
                >
                  <span className="text-sm text-slate-400">{item.label}</span>
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
