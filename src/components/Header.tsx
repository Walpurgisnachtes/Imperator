import { Trans } from "@lingui/react/macro";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            <Trans comment="Game name">Imperator</Trans>
          </span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
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
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200">
              登入
            </button>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:brightness-110 transition-all duration-200">
              免費註冊
            </button>
          </div>
        </div>

        {/* <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">開啟主要選單</span>
            {isOpen ? (
              // 關閉圖示 (X)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // 漢堡圖示
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div> */}
      </div>

      {/* 行動版下拉選單
      {isOpen && (
        <div className="md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-lg" id="mobile-menu">
          <div className="space-y-1 px-4 py-4 pb-6">
            <a href="#features" className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white">
              產品功能
            </a>
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white">
              關於我們
            </a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white">
              價格方案
            </a>
            <a href="#docs" className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-slate-900 hover:text-white">
              開發文件
            </a>
            <div className="mt-6 border-t border-slate-900 pt-6 flex flex-col gap-3">
              <button className="w-full rounded-md py-2.5 text-center text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-white">
                登入
              </button>
              <button className="w-full rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-md">
                免費註冊
              </button>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};
