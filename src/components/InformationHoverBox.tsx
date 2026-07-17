import React from "react";
import type { Information } from "../types/information";
import { CityNameGenerator } from "../data/static-data/city-names";

interface InformationHoverBoxProps {
  item: Information;
  position: {
    x: number;
    y: number;
  };
}

export const InformationHoverBox: React.FC<InformationHoverBoxProps> = ({
  item,
  position,
}) => {
  let itemDescription =
    item.description &&
    item.description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  const translateY = position.y < window.innerHeight / 2 ? "-100%" : "-150%";
  let value =
    item.id == "city-name"
      ? CityNameGenerator.getCityName(Number(item.value))
      : item.value;

  return (
    <div
      className="pointer-events-none fixed z-50 min-w-sm max-w-lg rounded-lg border border-slate-700/70 bg-slate-800/90 p-3 text-slate-100 shadow-lg shadow-slate-950/40 backdrop-blur-sm"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(calc(-3vw), ${translateY})`,
      }}
    >
      <p className="flex flex-row justify-between text-sm text-left font-bold border-b border-slate-700 pb-2">
        <span>{item.label}</span>
        <span>{value}</span>
      </p>
      <p className="text-sm text-left pt-2">{itemDescription}</p>
    </div>
  );
};
