import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n/LocaleContext";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import race1 from "@/assets/race1.jpg";
import race2 from "@/assets/race2.jpg";
import race3 from "@/assets/race3.jpg";
import race4 from "@/assets/race4.jpg";
import quoteBg from "@/assets/quote.jpg";

/* ---------------- HERO ---------------- */
export function Hero() {
  const t = useT();
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-navy-deep text-white"
    >
      <div
        className="absolute inset-0 animate-slow-zoom"
        style={{ transform: `translateY(${y * 0.25}px) scale(1.05)` }}
      >
        <video
          className="hidden h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero}
        />
        <img
          src={hero}
          alt="Gabriela Gajanová"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute inset-0 bg-navy-deep/65" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 80px, rgba(194,85,58,0.20) 80px 81px)",
          transform: `translateX(${-y * 0.15}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${y * 0.1}px)` }}
      >
        <span className="font-display text-[28vw] leading-none tracking-tight text-white/[0.06] select-none">
          800M
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
        <div className="max-w-5xl">
          <div
            className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-gold opacity-0"
            style={{ animation: "fade-up 1s ease-out 0.2s forwards" }}
          >
            <span className="h-px w-10 bg-gold" />
            {t("hero.eyebrow")}
          </div>
          <h1
            className="font-display text-[18vw] leading-[0.85] tracking-tight md:text-[12rem] opacity-0"
            style={{ animation: "fade-up 1.2s ease-out 0.5s forwards" }}
          >
            {t("hero.firstName")}
            <br />
            <span className="text-gold">{t("hero.lastName")}</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-sm tracking-[0.18em] text-white/80 md:text-base opacity-0"
            style={{ animation: "fade-up 1s ease-out 0.9s forwards" }}
          >
            {t("hero.subhead")}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0"
            style={{ animation: "fade-up 1s ease-out 1.1s forwards" }}
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta.story")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-navy-deep"
            >
              {t("hero.cta.contact")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-white/60">
        {t("hero.scroll")}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const t = useT();
  const stats = [
    { value: t("about.stat1.value"), label: t("about.stat1.label") },
    { value: t("about.stat2.value"), label: t("about.stat2.label") },
    { value: t("about.stat3.value"), label: t("about.stat3.label") },
    { value: t("about.stat4.value"), label: t("about.stat4.label") },
  ];

  return (
    <section id="about" className="relative bg-background px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-12 md:gap-24">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <img
              src={portrait}
              alt="Gabriela Gajanová"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 h-12 w-full bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            <span>Portrait · 2025</span>
            <span>SVK</span>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pt-12">
          <Reveal>
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {t("about.eyebrow")}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif-display text-4xl leading-[1.05] text-navy-deep md:text-6xl">
              {t("about.title")}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-ink md:max-w-xl md:text-lg">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-px bg-border">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="bg-background p-6 md:p-8">
                  <div className="font-display text-4xl tracking-tight text-navy md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
export function Achievements() {
  const t = useT();
  const items = [1, 2, 3, 4, 5, 6].map((n) => ({
    year: t(`ach${n}.year`),
    title: t(`ach${n}.title`),
    body: t(`ach${n}.body`),
  }));

  return (
    <section
      id="achievements"
      className="relative bg-powder px-6 py-32 md:px-16 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> {t("achievements.eyebrow")}
            </div>
            <h2 className="font-display text-6xl leading-[0.9] text-navy-deep md:text-8xl">
              {t("achievements.title").toUpperCase()}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-base leading-relaxed text-ink md:text-lg">
              {t("achievements.lead")}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <article
                className="group relative h-full overflow-hidden bg-white p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(13,46,99,0.30)]"
                style={{ minHeight: 320 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="font-display text-sm tracking-[0.3em] text-gold">
                      {a.year}
                    </div>
                    <h3 className="mt-6 font-display text-2xl leading-tight text-navy-deep md:text-3xl">
                      {a.title.toUpperCase()}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                      {a.body}
                    </p>
                  </div>
                  <div className="mt-10 flex items-end justify-end">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="text-gold">
                      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M10 16 L22 16 M18 12 L22 16 L18 20" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 800 METRES — scroll-driven interactive track ---------------- */
/**
 * Sticky scroll section. As the user scrolls, the runner advances along
 * a curved 800m path from 0m → 800m. At every 100m a milestone card is
 * revealed with the relevant achievement / place from Gabriela's career.
 */
export function Journey() {
  const t = useT();
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [pathLen, setPathLen] = useState(1);
  const [runnerPos, setRunnerPos] = useState({ x: 60, y: 360 });

  const milestones = useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        dist: n * 100,
        title: t(`m${n}.title`),
        place: t(`m${n}.place`),
        year: t(`m${n}.year`),
        body: t(`m${n}.body`),
      })),
    [t],
  );

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      if (pathRef.current) {
        const pt = pathRef.current.getPointAtLength(p * pathLen);
        setRunnerPos({ x: pt.x, y: pt.y });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathLen]);

  const distance = Math.round(progress * 800);
  // Active milestone: snap to nearest 100m within ±60m window
  const activeIdx = Math.min(8, Math.round((progress * 800) / 100));
  const active = milestones[activeIdx];

  // SVG path — a long S-curve representing the 800m track laps
  // Conceptually two laps, drawn as a flowing horizontal S
  const trackPath =
    "M 60 360 " +
    "C 200 360, 280 120, 480 120 " +
    "C 680 120, 760 360, 960 360 " +
    "C 1160 360, 1240 120, 1440 120 " +
    "C 1640 120, 1720 360, 1860 360";

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-navy-deep text-white"
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Ambient glow following the runner */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${
              (runnerPos.x / 1920) * 100
            }% ${
              (runnerPos.y / 480) * 60 + 20
            }%, rgba(194,85,58,0.35) 0%, rgba(7,26,51,0) 45%)`,
            transition: "background 0.3s ease-out",
          }}
        />

        {/* Heading */}
        <div className="absolute left-0 right-0 top-0 z-10 px-6 pt-28 md:px-16 md:pt-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-3 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> {t("journey.eyebrow")}
            </div>
            <h2 className="font-display text-4xl leading-none md:text-6xl">
              {t("journey.title")}
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
              {t("journey.lead")}
            </p>
          </div>
        </div>

        {/* Distance counter */}
        <div className="absolute right-6 top-32 z-10 text-right md:right-16 md:top-44">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            {t("journey.distanceLabel")}
          </div>
          <div className="mt-2 font-display text-6xl leading-none text-white md:text-8xl">
            {distance}
            <span className="ml-2 text-2xl text-gold md:text-3xl">
              {t("journey.metersShort")}
            </span>
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/40">
            / 800 {t("journey.metersShort")}
          </div>
        </div>

        {/* The track SVG */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <svg
            viewBox="0 0 1920 480"
            className="h-[60vh] w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Track lane lines (faded) */}
            <path
              ref={pathRef}
              d={trackPath}
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="80"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d={trackPath}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="50"
              strokeLinecap="round"
              strokeDasharray="2 18"
              fill="none"
            />
            {/* Progress lane filled with antuka */}
            <path
              d={trackPath}
              stroke="var(--gold)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: pathLen,
                strokeDashoffset: pathLen * (1 - progress),
                transition: "stroke-dashoffset 0.25s linear",
              }}
            />

            {/* Milestone markers along the path */}
            {milestones.map((m, i) => {
              if (!pathRef.current) return null;
              const pt = pathRef.current.getPointAtLength((i / 8) * pathLen);
              const reached = activeIdx >= i;
              return (
                <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
                  <circle
                    r={reached ? 14 : 9}
                    fill={reached ? "var(--gold)" : "rgba(255,255,255,0.15)"}
                    stroke={reached ? "rgba(194,85,58,0.4)" : "rgba(255,255,255,0.3)"}
                    strokeWidth={reached ? 8 : 2}
                  />
                  <text
                    x={0}
                    y={-26}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill={reached ? "var(--gold)" : "rgba(255,255,255,0.5)"}
                  >
                    {m.dist}m
                  </text>
                </g>
              );
            })}

            {/* Runner dot */}
            <g transform={`translate(${runnerPos.x}, ${runnerPos.y})`}>
              <circle r="22" fill="var(--gold)" opacity="0.25" />
              <circle r="12" fill="var(--gold)" />
              <circle r="5" fill="#fff" />
            </g>
          </svg>
        </div>

        {/* Active milestone card */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-16 md:pb-16">
          <div className="mx-auto max-w-[1500px]">
            <div
              key={activeIdx}
              className="grid items-end gap-8 animate-fade-up md:grid-cols-12"
            >
              <div className="md:col-span-7">
                <div className="font-display text-sm tracking-[0.3em] text-gold">
                  {active.dist} {t("journey.metersShort")} · {active.year}
                </div>
                <div className="mt-3 font-display text-4xl leading-[0.95] text-white md:text-6xl">
                  {active.title.toUpperCase()}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  {active.place}
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  {active.body}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 text-center"
                >
                  <div
                    className={`mx-auto h-2 w-2 rounded-full transition-colors ${
                      i <= activeIdx ? "bg-gold" : "bg-white/15"
                    }`}
                  />
                  <div
                    className={`mt-2 text-[9px] uppercase tracking-[0.2em] transition-colors ${
                      i === activeIdx ? "text-gold" : "text-white/30"
                    }`}
                  >
                    {m.dist}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const t = useT();
  const photos = [
    { src: race1, alt: "Start", tag: t("gallery.cat.start"), h: "row-span-2" },
    { src: race3, alt: "Finish", tag: t("gallery.cat.finish"), h: "row-span-2" },
    { src: race2, alt: "Detail", tag: t("gallery.cat.detail"), h: "" },
    { src: race4, alt: "Race", tag: t("gallery.cat.race"), h: "" },
  ];

  return (
    <section id="gallery" className="relative bg-beige px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> {t("gallery.eyebrow")}
            </div>
            <h2 className="font-display text-6xl leading-[0.9] text-navy-deep md:text-8xl">
              {t("gallery.title").toUpperCase()}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={150}>
            <p className="text-sm leading-relaxed text-ink-soft md:text-base">
              {t("gallery.lead")}
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4 md:gap-6">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 100}
              className={`group relative overflow-hidden bg-navy-deep ${p.h}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <span className="text-[10px] uppercase tracking-[0.3em]">{p.tag}</span>
                <span className="font-display text-sm tracking-[0.2em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 800 METRES — cinematic typographic interlude ---------------- */
export function EightHundred() {
  const t = useT();
  const ref = useRef<HTMLElement | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + el.offsetHeight;
      const scrolled = window.innerHeight - rect.top;
      setP(Math.min(Math.max(scrolled / total, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gap = (1 - Math.abs(p - 0.5) * 2) * 8;

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep px-6 py-32 text-white md:py-44">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
      >
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx="800"
            cy="500"
            rx={400 + i * 60}
            ry={180 + i * 28}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            style={{
              transform: `rotate(${p * 30}deg)`,
              transformOrigin: "center",
              opacity: 0.4 - i * 0.04,
            }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1500px] text-center">
        <h2 className="font-display leading-none">
          <span
            className="block text-[24vw] md:text-[16rem]"
            style={{ letterSpacing: `${gap}px` }}
          >
            800
          </span>
          <span className="mt-2 block text-2xl tracking-[0.6em] text-gold md:text-4xl">
            {t("eight.title").replace("800 ", "")}
          </span>
        </h2>
        <Reveal>
          <p className="mx-auto mt-12 max-w-xl font-serif-display text-2xl leading-relaxed text-white/90 md:text-3xl">
            {t("eight.line1")} {t("eight.line2")} {t("eight.line3")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
export function Partners() {
  const t = useT();
  const partners = [
    { name: "On Running", mono: "ON" },
    { name: "Slovenský atletický zväz", mono: "SAZ" },
    { name: "VŠC Dukla Banská Bystrica", mono: "DUKLA" },
  ];

  return (
    <section className="bg-white px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="mb-10 grid gap-8 border-b border-border pb-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                {t("partners.eyebrow")}
              </span>
              <h2 className="mt-4 font-serif-display text-4xl leading-[1.05] text-navy-deep md:text-5xl">
                {t("partners.title")}
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 md:pt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              {t("partners.lead")}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="group flex h-48 flex-col items-center justify-center bg-white px-6 text-center transition-all">
                <div className="font-display text-4xl tracking-[0.2em] text-ink-soft transition-colors duration-500 group-hover:text-gold md:text-5xl">
                  {p.mono}
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                  {p.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL ---------------- */
export function Social() {
  const t = useT();
  return (
    <section className="bg-beige px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> {t("social.eyebrow")}
            </div>
            <h2 className="font-serif-display text-5xl leading-[1] text-navy-deep md:text-7xl">
              {t("social.title")}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
              {t("social.lead")}
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { platform: "Instagram", handle: "@gabriela.gajanova", href: "#" },
            { platform: "Threads", handle: "@gabriela.gajanova", href: "#" },
          ].map((s, i) => (
            <Reveal key={s.platform} delay={i * 120}>
              <a
                href={s.href}
                className="group relative block aspect-[4/3] overflow-hidden bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(13,46,99,0.25)]"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      {s.platform}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-navy">
                      <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-navy-deep md:text-5xl">
                      {s.handle}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUOTE ---------------- */
export function Quote() {
  const t = useT();
  return (
    <section className="relative h-[90vh] overflow-hidden bg-navy-deep">
      <img
        src={quoteBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-deep/75" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white md:px-16">
        <Reveal className="max-w-4xl">
          <blockquote className="font-serif-display text-3xl leading-[1.2] md:text-6xl">
            “{t("quote.text")}”
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-gold" />
            {t("quote.author")}
            <span className="h-px w-12 bg-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const t = useT();
  return (
    <section id="contact" className="bg-background px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-12 md:gap-24">
        <div className="md:col-span-5">
          <Reveal>
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> {t("contact.eyebrow")}
            </div>
            <h2 className="font-display text-5xl leading-[0.9] text-navy-deep md:text-7xl">
              {t("contact.title")}
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink md:text-lg">
              {t("contact.lead")}
            </p>
            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                  {t("contact.emailLabel")}
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:ggajanova@gmail.com"
                    className="font-display text-2xl tracking-wide text-navy-deep underline-offset-8 hover:underline"
                  >
                    ggajanova@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-12">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                    Instagram
                  </dt>
                  <dd className="mt-2">
                    <a href="#" className="font-display text-xl text-navy hover:text-gold">
                      @gabriela.gajanova
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                    Threads
                  </dt>
                  <dd className="mt-2">
                    <a href="#" className="font-display text-xl text-navy hover:text-gold">
                      @gabriela.gajanova
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="md:col-span-7" delay={100}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 border border-border bg-white p-10 md:p-14"
          >
            <Field label={t("contact.form.name")} id="name" type="text" placeholder="—" />
            <Field label={t("contact.form.email")} id="email" type="email" placeholder="you@example.com" />
            <div>
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.3em] text-ink-soft"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="—"
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-transform hover:-translate-y-0.5"
            >
              {t("contact.form.send")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.3em] text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-deep px-6 pt-24 pb-10 text-white md:px-16">
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full"
        viewBox="0 0 1600 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 L1600 20"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray="8 14"
          className="animate-track-shimmer"
        />
      </svg>

      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-display text-5xl leading-none md:text-7xl">
              GABRIELA
              <br />
              <span className="text-gold">GAJANOVÁ</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
              {t("social.eyebrow")}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">Threads</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
              {t("contact.eyebrow")}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:ggajanova@gmail.com" className="hover:text-gold">
                  ggajanova@gmail.com
                </a>
              </li>
              <li><a href="#contact" className="hover:text-gold">{t("contact.form.send")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex-row md:items-center">
          <span>© {year} Gabriela Gajanová · {t("footer.rights")}</span>
          <span>Bobrovec · Liptov · World</span>
        </div>
      </div>
    </footer>
  );
}
