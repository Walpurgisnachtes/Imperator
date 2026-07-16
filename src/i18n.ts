import { i18n } from "@lingui/core";

export async function dynamicActivate(locale: string): Promise<void> {
  // 動態 import 編譯後的 messages.js
  const { messages } = await import(`./locales/${locale}/messages.js`);
  
  i18n.load(locale, messages);
  i18n.activate(locale);
}