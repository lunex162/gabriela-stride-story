import { useEffect, useRef, useState } from "react";

type Props = {
  poster: string;
  className?: string;
};

/**
 * Hero video ako kulisa. Prevzaté z riešenia pre Vanta Barber.
 *
 * - Statická snímka leží POD videom, takže obraz je na mieste od prvej sekundy.
 * - Video sa ukáže až keď naozaj beží (onPlaying), nikdy zamrznutý prvý snímok.
 * - Keď prehliadač autoplay odmietne (iPhone v režime nízkej spotreby, Safari),
 *   pokus sa opakuje po každom dotyku, kliknutí, skrole a po `canplay`.
 * - Ak súbor zlyhá (404, kodek), video sa odstráni a zostane statická snímka.
 *   Pomalá sieť nie je dôvod vzdať sa: do prvého snímku video nevidno.
 * - Úzke displeje dostanú menší súbor (~1 MB namiesto 5 MB).
 */
export function HeroVideo({ poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [bezi, setBezi] = useState(false);
  const [vzdal, setVzdal] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setSrc(mobile ? "/video/hero-mobile.mp4" : "/video/hero.mp4");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    let settled = false;
    const events = ["pointerdown", "touchstart", "touchend", "click", "scroll", "keydown"] as const;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, retry));
      document.removeEventListener("visibilitychange", retry);
      el.removeEventListener("canplay", retry);
    };

    /*
      Video je do prvého snímku neviditeľné (opacity 0) a pod ním leží fotka,
      takže na pomalej sieti sa nič nepokazí, aj keď tečie minútu. Vzdať sa
      má zmysel len keď súbor naozaj zlyhá (404, nepodporovaný kodek).
    */
    const onError = () => {
      if (!settled) setVzdal(true);
    };
    el.addEventListener("error", onError);

    const attempt = () =>
      el.play().then(
        () => {
          settled = true;
          cleanup();
        },
        () => {
          // Zamietnuté, skúsi sa znova pri ďalšom geste.
        },
      );

    function retry() {
      if (settled) {
        cleanup();
        return;
      }
      attempt();
    }

    attempt();
    events.forEach((e) => window.addEventListener(e, retry, { passive: true }));
    document.addEventListener("visibilitychange", retry);
    el.addEventListener("canplay", retry);

    return () => {
      el.removeEventListener("error", onError);
      cleanup();
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#15100B] ${className}`}>
      <img
        src={poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      {src && !vzdal && (
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden
          tabIndex={-1}
          onPlaying={() => setBezi(true)}
          onPause={() => setBezi(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            bezi ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
