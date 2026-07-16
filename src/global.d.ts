declare module "*/messages.js" {
  import { Messages } from "@lingui/core";
  export const messages: Messages;
}

declare module "*/messages.mjs" {
  import { Messages } from "@lingui/core";
  export const messages: Messages;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
  export default ReactComponent;
}