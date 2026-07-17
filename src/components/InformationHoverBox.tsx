import React from "react";
import type { Information } from "../types/information";

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
  const dy = window.innerHeight * 0.12;

  let itemDescription =
    item.description &&
    item.description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div
      className="pointer-events-none fixed z-50 min-w-sm max-w-lg rounded-lg border border-slate-700/70 bg-slate-800/90 p-3 text-slate-100 shadow-lg shadow-slate-950/40 backdrop-blur-sm"
      style={{ left: position.x, top: position.y - dy }}
    >
      <p className="text-sm text-left font-bold border-b border-slate-700 pb-2">{item.label}</p>
      <p className="text-sm text-left pt-2">{itemDescription}</p>
    </div>
  );
};
