import type { FC, SVGProps } from "react";
import type { GameContentHTMLContext } from "./game-content-html-context-store";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

import BuildingsButton from "../assets/castle.svg?react";
import TradeButton from "../assets/balance.svg?react";
import PoliticsButton from "../assets/ballot.svg?react";
import MilitaryButton from "../assets/two-swords-crossing.svg?react";
import IntelligenceButton from "../assets/spy.svg?react";
import DiplomacyButton from "../assets/handshake.svg?react";
import ResearchButton from "../assets/experiment.svg?react";
import CultureButton from "../assets/theater.svg?react";
import ReligionButton from "../assets/religion.svg?react";

export interface CityAction {
  actionName: GameContentHTMLContext;
  actionTitle: MessageDescriptor;
  imageComponent: FC<SVGProps<SVGSVGElement>>;
}

export const cityActions: CityAction[] = [
  {
    actionName: "city/building",
    actionTitle: msg`Buildings`,
    imageComponent: BuildingsButton,
  },
  {
    actionName: "city/trade",
    actionTitle: msg`Trade`,
    imageComponent: TradeButton,
  },
  {
    actionName: "city/military",
    actionTitle: msg`Military`,
    imageComponent: MilitaryButton,
  },
  {
    actionName: "city/intelligence",
    actionTitle: msg`Intelligence`,
    imageComponent: IntelligenceButton,
  },
  {
    actionName: "city/politics",
    actionTitle: msg`Politics`,
    imageComponent: PoliticsButton,
  },
  {
    actionName: "city/diplomacy",
    actionTitle: msg`Diplomacy`,
    imageComponent: DiplomacyButton,
  },
  {
    actionName: "city/research",
    actionTitle: msg`Research`,
    imageComponent: ResearchButton,
  },
  {
    actionName: "city/culture",
    actionTitle: msg`Culture`,
    imageComponent: CultureButton,
  },
  {
    actionName: "city/religion",
    actionTitle: msg`Religion`,
    imageComponent: ReligionButton,
  },
];
