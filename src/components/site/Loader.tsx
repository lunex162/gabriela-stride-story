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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        opacity: done ? 0 : 1,
        background: `
          radial-gradient(80% 70% at 10% 10%, #fce7e7 0%, transparent 60%),
          radial-gradient(70% 80% at 90% 30%, #fff9ef 0%, transparent 55%),
          radial-gradient(75% 70% at 40% 55%, #fce7e7 0%, transparent 50%),
          radial-gradient(80% 75% at 80% 85%, #fff9ef 0%, transparent 55%),
          radial-gradient(70% 70% at 20% 90%, #fce7e7 0%, transparent 50%),
          #fff9ef
        `,
      }}
    >
      <img
        src={logoAsset.url}
        alt="GAGA"
        className="h-48 w-auto opacity-0 md:h-60"
        style={{ animation: "fade-up 1s ease-out 0.6s forwards" }}
      />
      <div className="mt-8 h-px w-24 bg-[--gold] opacity-0" style={{ animation: "fade-up 1s ease-out 1.4s forwards" }} />
    </div>
  );
}
