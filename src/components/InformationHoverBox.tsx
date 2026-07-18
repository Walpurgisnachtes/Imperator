import type { FC } from "react";
import { Fragment } from "react";
import type { Information } from "../types/information";
import { CityNameGenerator } from "../data/static-data/city-names";
import { i18n } from "@lingui/core";

interface InformationHoverBoxProps {
  item: Information;
  position: {
    x: number;
    y: number;
  };
}

export const InformationHoverBox: FC<InformationHoverBoxProps> = ({
  item,
  position,
}) => {
  const labelGetter = (item: Information) => {
    if (typeof item.label === "string") {
      return item.label;
    }
    return i18n.t(item.label);
  };

  const descriptionGetter = (item: Information) => {
    if (item.description === undefined) {
      return "";
    }
    if (typeof item.description === "string") {
      return item.description;
    }
    return i18n.t(item.description);
  };

  let itemDescription =
    item.description &&
    descriptionGetter(item)
      .split("\n")
      .map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ));

  const translateY = position.y < window.innerHeight / 2 ? "-100%" : "-150%";
  let label = labelGetter(item);
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
        <span>{label}</span>
        <span>{value}</span>
      </p>
      <p className="text-sm text-left pt-2">{itemDescription}</p>
    </div>
  );
};
