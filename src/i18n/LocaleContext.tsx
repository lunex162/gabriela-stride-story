import { createContext, useContext, type ReactNode } from "react";
import { type Locale, t as translate } from "./translations";

const LocaleCtx = createContext<Locale>("sk");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleCtx.Provider value={locale}>{children}</LocaleCtx.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleCtx);
}

export function useT() {
  const locale = useLocale();
  return (key: string) => translate(locale, key);
}
