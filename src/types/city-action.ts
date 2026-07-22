import type { FC, SVGProps } from "react";
import type { CityActionType } from "./city-action-context-store";
import type { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

import BuildingsButton from "../assets/castle.svg?react";
import TradeButton from "../assets/balance.svg?react";
import PoliticsButton from "../assets/ballot.svg?react";
import MilitaryButton from "../assets/two-swords-crossing.svg?react";
import IntelligenceButton from "../assets/spy.svg?react";
import DiplomacyButton from "../assets/handshake.svg?react";
import ResearchButton from "../assets/book_ribbon.svg?react";
import AlchemyButton from "../assets/experiment.svg?react";
import CultureButton from "../assets/theater.svg?react";
import ReligionButton from "../assets/religion.svg?react";
import MagicButton from "../assets/wand_stars.svg?react";
import PandemicButton from "../assets/skull.svg?react";

export interface CityAction {
  actionType: CityActionType;
  actionName: MessageDescriptor;
  imageComponent: FC<SVGProps<SVGSVGElement>>;
}

export const cityActions: CityAction[] = [
  {
    actionType: "city/building",
    actionName: msg`Buildings`,
    imageComponent: BuildingsButton,
  },
  {
    actionType: "city/trade",
    actionName: msg`Trade`,
    imageComponent: TradeButton,
  },
  {
    actionType: "city/military",
    actionName: msg`Military`,
    imageComponent: MilitaryButton,
  },
  {
    actionType: "city/intelligence",
    actionName: msg`Intelligence`,
    imageComponent: IntelligenceButton,
  },
  {
    actionType: "city/politics",
    actionName: msg`Politics`,
    imageComponent: PoliticsButton,
  },
  {
    actionType: "city/diplomacy",
    actionName: msg`Diplomacy`,
    imageComponent: DiplomacyButton,
  },
  {
    actionType: "city/research",
    actionName: msg`Research`,
    imageComponent: ResearchButton,
  },
  {
    actionType: "city/pandemic",
    actionName: msg`Pandemic`,
    imageComponent: PandemicButton,
  },
  {
    actionType: "city/culture",
    actionName: msg`Culture`,
    imageComponent: CultureButton,
  },
  {
    actionType: "city/religion",
    actionName: msg`Religion`,
    imageComponent: ReligionButton,
  },
  {
    actionType: "city/magic",
    actionName: msg`Magic`,
    imageComponent: MagicButton,
  },
  {
    actionType: "city/alchemy",
    actionName: msg`Alchemy`,
    imageComponent: AlchemyButton,
  },
];
