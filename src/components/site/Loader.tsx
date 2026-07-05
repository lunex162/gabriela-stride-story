import { useEffect, useState } from "react";
import { useT } from "@/i18n/LocaleContext";
import logoAsset from "@/assets/gaga-logo-transparent.png.asset.json";

export function Loader() {
  const t = useT();
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 2400);
    const t2 = setTimeout(() => setHidden(true), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1 }}
    >
      <img
        src={logoAsset.url}
        alt="GAGA"
        className="h-16 w-auto opacity-0 md:h-20"
        style={{ animation: "fade-up 1s ease-out 0.6s forwards" }}
      />
      <div
        className="mt-6 text-[10px] uppercase tracking-[0.5em] text-ink-soft opacity-0"
        style={{ animation: "fade-up 1s ease-out 1.4s forwards" }}
      >
        {t("loader.tagline")}
      </div>
      <div className="mt-8 h-px w-24 bg-[--gold] opacity-0" style={{ animation: "fade-up 1s ease-out 1.8s forwards" }} />
    </div>
  );
}
