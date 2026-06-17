import { useEffect, useState } from "react";
import { useT } from "@/i18n/LocaleContext";

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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1 }}
    >
      <svg viewBox="0 0 1200 80" className="w-[80vw] max-w-3xl" fill="none">
        <path
          d="M0 40 L1200 40"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-draw-line"
        />
      </svg>
      <div
        className="mt-10 font-display text-2xl md:text-3xl tracking-[0.4em] text-white opacity-0"
        style={{ animation: "fade-up 1s ease-out 1.2s forwards" }}
      >
        GABRIELA GAJANOVÁ
      </div>
      <div
        className="mt-3 text-[10px] uppercase tracking-[0.5em] text-gold opacity-0"
        style={{ animation: "fade-up 1s ease-out 1.8s forwards" }}
      >
        {t("loader.tagline")}
      </div>
    </div>
  );
}
