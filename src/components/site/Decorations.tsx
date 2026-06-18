import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type CSSProperties } from "react";

/* ============================================================
 *  Athletic-futuristic decoration primitives
 *  Inspired by callora landing's GlowOrb / NeonLine / Wave family
 *  but tuned to a stadium / track vibe:
 *    - antuka (clay terracotta) primary
 *    - powder pink secondary
 *    - amber sunlight tertiary
 *    - radial blur orbs feel like floodlights at dusk
 * ============================================================ */

type Hue = "antuka" | "powder" | "amber" | "navy";

const HUE: Record<Hue, string> = {
  antuka: "194,85,58",
  powder: "246,220,212",
  amber: "232,170,120",
  navy: "13,46,99",
};

/* -------------------- GlowOrb -------------------- */
export function GlowOrb({
  color = "antuka",
  size = 480,
  className = "",
  style,
  delay = 0,
}: {
  color?: Hue;
  size?: number;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(${HUE[color]},0.55) 0%, rgba(${HUE[color]},0.18) 35%, rgba(${HUE[color]},0) 70%)`,
        filter: "blur(40px)",
        mixBlendMode: "screen",
        ...style,
      }}
      animate={
        reduce
          ? undefined
          : {
              scale: [1, 1.12, 1],
              opacity: [0.7, 1, 0.7],
            }
      }
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* -------------------- Grain / film noise overlay -------------------- */
export function GrainOverlay({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "160px 160px",
      }}
    />
  );
}

/* -------------------- Mesh grid (subtle floor lines) -------------------- */
export function MeshGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="mesh" width="6" height="6" patternUnits="userSpaceOnUse">
          <path
            d="M 6 0 L 0 0 0 6"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.1"
          />
        </pattern>
        <linearGradient id="meshFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <mask id="meshMask">
          <rect width="100" height="100" fill="url(#meshFade)" />
        </mask>
      </defs>
      <rect width="100" height="100" fill="url(#mesh)" mask="url(#meshMask)" />
    </svg>
  );
}

/* -------------------- Speed lines (motion blur streaks) -------------------- */
export function SpeedLines({
  count = 8,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const lines = Array.from({ length: count });
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {lines.map((_, i) => {
        const top = (i / count) * 100 + (Math.sin(i * 12.9) * 8 + 8);
        const width = 30 + ((i * 23) % 50);
        const duration = 6 + ((i * 7) % 6);
        const delay = (i * 0.4) % 4;
        return (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${top}%`,
              width: `${width}%`,
              background:
                "linear-gradient(90deg, rgba(194,85,58,0) 0%, rgba(194,85,58,0.55) 50%, rgba(194,85,58,0) 100%)",
              filter: "blur(0.5px)",
            }}
            initial={{ x: "-30%" }}
            animate={reduce ? undefined : { x: "130%" }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}

/* -------------------- Floor track lanes (perspective) -------------------- */
export function FloorTrack() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55vh] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%)",
        WebkitMaskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%)",
      }}
    >
      <div
        className="absolute left-1/2 top-0 h-full w-[300vw] -translate-x-1/2"
        style={{
          transform: "perspective(800px) rotateX(72deg) translateY(-10%)",
          transformOrigin: "center top",
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 78px, rgba(194,85,58,0.35) 78px 80px), repeating-linear-gradient(180deg, transparent 0 78px, rgba(255,255,255,0.04) 78px 79px)",
        }}
      />
    </div>
  );
}

/* -------------------- Mouse parallax wrapper -------------------- */
export function MouseParallax({
  children,
  strength = 12,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(${pos.x * strength}px, ${pos.y * strength}px, 0)`,
        transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {children}
    </div>
  );
}

/* -------------------- Animated PB counter ticking up -------------------- */
export function CountUp({
  value,
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return (
    <span className={className}>
      {Math.floor(n)}
      {suffix}
    </span>
  );
}

/* -------------------- Ticking PB clock 1:58.22 -------------------- */
export function PbClock({ className = "" }: { className?: string }) {
  const [ms, setMs] = useState(0);
  const target = 1 * 60_000 + 58 * 1000 + 220; // 1:58.220
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 2200;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setMs(target * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  const m = Math.floor(ms / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return (
    <span className={`tabular-nums ${className}`}>
      {m}:{String(s).padStart(2, "0")}.{String(cs).padStart(2, "0")}
    </span>
  );
}
