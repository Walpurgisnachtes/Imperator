import { Trans } from "@lingui/react/macro";
import React from "react";

export const ComingSoonDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-white mb-4">
        <Trans>Coming Soon</Trans>
      </h1>
    </div>
  );
};
