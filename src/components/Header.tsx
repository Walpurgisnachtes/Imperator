import { Trans } from "@lingui/react/macro";
import React from "react";

import LanguageIcon from "../assets/language.svg?react";
import { dynamicActivate } from "../i18n";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            <Trans comment="Game name">Imperator</Trans>
          </span>
        </div>

        <div className="flex items-center gap-8">
          {/* <nav className="flex items-center gap-8 text-sm font-medium">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              產品功能
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              關於我們
            </a>
            <a
              href="#pricing"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              價格方案
            </a>
            <a
              href="#docs"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              開發文件
            </a>
          </nav> */}

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-slate-800/50 px-4 py-2 text-sm font-semibold text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 hover:brightness-110 transition-all duration-200">
              <Trans comment="Continue">Continue</Trans>
            </button>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:brightness-110 transition-all duration-200">
              <Trans comment="Start new game">Start New Game</Trans>
            </button>
            <div id="language-switcher" className="flex items-center gap-2">
              <LanguageIcon />
              <select
                className="rounded-md bg-slate-800/50 px-2 py-1 text-sm font-medium text-slate-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 hover:brightness-110 transition-all duration-200"
                onChange={async (e) => {
                  const selectedLocale = e.target.value;
                  await dynamicActivate(selectedLocale);
                }}
              >
                <option value="en">English</option>
                <option value="zh-Hant">繁體中文</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
