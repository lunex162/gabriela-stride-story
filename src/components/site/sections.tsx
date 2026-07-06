import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n/LocaleContext";
import portraitStadium from "@/assets/photos/portrait-stadium.jpg";
import parisRace from "@/assets/photos/paris-race.jpg";
import indoorRace from "@/assets/photos/indoor-race.jpg";
import action1 from "@/assets/photos/action-1.jpg";
import action2 from "@/assets/photos/action-2.jpg";
import action3 from "@/assets/photos/action-3.jpg";
import action4 from "@/assets/photos/action-4.jpg";
import gagaAbout from "@/assets/gaga-tokyo-applause.jpg.asset.json";

/* ============================================================
 *  Shared motion constants — single curve everywhere
 * ============================================================ */
const ease = [0.16, 1, 0.3, 1] as const;

/* ============================================================
 *  HERO — full-bleed video, warm-deep overlay,
 *  layered translucent surname (MOVA-pattern), two CTAs.
 * ============================================================ */
export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden bg-[#15100B] text-white"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* Video / poster background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${y * 0.2}px, 0) scale(${1.04 + y * 0.00012})`,
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={portraitStadium}
          src="/video/hero.mp4"
        />
      </div>

      {/* Warm deep overlay — feels like sunset stadium, not harsh black */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,19,14,0.55) 0%, rgba(26,19,14,0.30) 35%, rgba(26,19,14,0.78) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 30% 40%, rgba(214,189,159,0.18) 0%, transparent 55%)",
        }}
      />


      {/* TOP META RAIL */}
      <div className="absolute inset-x-0 top-0 z-30 px-6 pt-24 md:px-12 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto flex max-w-[1700px] items-center justify-between gap-6"
        >
          <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-white/70 md:text-[11px]">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[--gold-soft] opacity-75" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[--gold-soft]" />
            </span>
            {t("hero.meta.route")}
          </span>
          <span className="hidden text-right text-[10px] uppercase tracking-[0.45em] text-white/60 md:block md:text-[11px]">
            {t("hero.meta.discipline")}
          </span>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-end px-6 pb-12 text-center md:px-12 md:pb-24">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display leading-[0.86] tracking-tight"
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease }}
            className="block text-[16vw] sm:text-[12vw] md:text-[8vw] xl:text-[8.5rem]"
          >
            GABRIELA
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.75, ease }}
            className="block font-serif-display italic text-[--gold-soft] text-[16vw] sm:text-[12vw] md:text-[8vw] xl:text-[8.5rem]"
            style={{ marginTop: "-0.08em" }}
          >
            Gajanová
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 flex max-w-2xl items-center justify-center gap-4 md:mt-10"
        >
          <span className="mt-2 hidden h-px w-10 shrink-0 bg-[--gold-soft] md:block" />
          <p className="text-[13px] leading-relaxed text-white/85 md:text-base md:tracking-[0.04em]">
            {t("hero.subhead")}
          </p>
          <span className="mt-2 hidden h-px w-10 shrink-0 bg-[--gold-soft] md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-12 md:gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/[0.04] px-7 py-3 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur transition-colors hover:border-[--gold-soft] hover:text-[--gold-soft] sm:px-9 sm:py-4 sm:text-[11px]"
          >
            {t("hero.cta.story")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/[0.04] px-7 py-3 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur transition-colors hover:border-[--gold-soft] hover:text-[--gold-soft] sm:px-9 sm:py-4 sm:text-[11px]"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>
      </div>

      {/* SCROLL CUE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.55em] text-white/70 md:text-[10px]"
      >
        <span>{t("hero.scroll")}</span>
        <motion.span
          className="h-9 w-px bg-gradient-to-b from-[--gold-soft] to-transparent"
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

/* ============================================================
 *  ABOUT — editorial portrait on right, big text on left
 * ============================================================ */
export function About() {
  const t = useT();
  const sectionRef = useRef<HTMLElement | null>(null);
  const photoWrapRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  // Parallax: photo moves slower than text, big background word crawls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  // Subtle 3D tilt on mouse move
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = photoWrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 4, ry: px * 4 });
  };
  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  const stats: Array<{ v: string; l: string }> = [
    { v: "2×", l: t("about.stats.olympics") },
    { v: "1:58.22", l: t("about.stats.record") },
    { v: t("about.stats.silver.value"), l: t("about.stats.silver") },
    { v: t("about.stats.athlete.value"), l: t("about.stats.athlete") },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-background pb-28 pt-16 text-ink md:pb-40 md:pt-24"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-16 px-6 md:grid-cols-2 md:gap-[96px] md:px-12">
        {/* LEFT — text + badges */}
        <div className="relative flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-ink/25 bg-ink/[0.04] px-6 py-2.5 text-[10px] uppercase tracking-[0.35em] text-ink backdrop-blur sm:px-7 sm:py-3 sm:text-[11px]">
              {t("about.eyebrow")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-8 space-y-5 text-[15px] leading-[1.8] text-[--ink-soft] md:text-[16px]"
          >
            <p>{t("about.p1")}</p>
            {t("about.p2") && <p>{t("about.p2")}</p>}
            {t("about.p3") && <p>{t("about.p3")}</p>}
          </motion.div>

          {/* Premium badges — 2×2 pill grid */}
          <PremiumBadges stats={stats} />
        </div>

        {/* RIGHT — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative flex flex-col"
          style={{ perspective: "1200px" }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          {/* Soft radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.9) 0%, rgba(232,225,209,0.55) 45%, rgba(249,246,241,0) 75%)",
            }}
          />

          <motion.div
            ref={photoWrapRef}
            style={{ y: photoY }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <motion.img
              src={gagaAbout.url}
              alt="Gabriela Gajanová — Tokyo 2025"
              loading="lazy"
              animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
              transition={{ duration: 0.6, ease }}
              className="block h-auto w-full rounded-2xl will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PremiumBadges({ stats }: { stats: Array<{ v: string; l: string }> }) {
  return (
    <motion.dl
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
      }}
      className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-14"
    >
      {stats.map((s) => (
        <motion.div
          key={s.l}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          }}
          whileHover={{ y: -3, scale: 1.02 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-full border border-white/60 px-7 py-5 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(122,94,50,0.35),inset_0_1px_0_rgba(255,255,255,0.75)] transition-shadow duration-500 hover:shadow-[0_18px_40px_-18px_rgba(122,94,50,0.30),inset_0_1px_0_rgba(255,255,255,0.85)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,253,247,0.85) 0%, rgba(245,235,215,0.70) 55%, rgba(232,214,178,0.55) 100%)",
          }}
        >
          {/* soft inner highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />
          <div className="relative flex items-baseline gap-3">
            <dd
              className="font-serif-display italic leading-none text-ink"
              style={{ fontSize: "clamp(1.6rem, 2.2vw, 2rem)" }}
            >
              {s.v}
            </dd>
            <dt className="text-[11px] uppercase leading-snug tracking-[0.22em] text-[--ink-soft]">
              {s.l}
            </dt>
          </div>
        </motion.div>
      ))}
    </motion.dl>
  );
}

/* ============================================================
 *  JOURNEY 800M — cinematic full-bleed photo per milestone
 *  Sticky scroll, 9 stages from 0m → 800m. Each stage:
 *    - full-bleed photo background with slow Ken-Burns zoom
 *    - warm deep overlay for legibility
 *    - magazine masthead with section number + year + place
 *    - HUGE kinetic distance numeral overlapping a italic serif title
 *    - delicate body text
 *  Bottom: hairline track lane with 9 markers + distance ticker
 *  Crossfade between milestones using motion + key-based remount.
 * ============================================================ */
export function Journey() {
  const t = useT();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  const milestones = useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        idx: n,
        dist: n * 100,
        title: t(`m${n}.title`),
        place: t(`m${n}.place`),
        year: t(`m${n}.year`),
        body: t(`m${n}.body`),
        photo: [
          action4,
          action2,
          action1,
          indoorRace,
          portraitStadium,
          action3,
          action1,
          parisRace,
          parisRace,
        ][n],
      })),
    [t],
  );

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  
  const activeIdx = Math.min(8, Math.floor((progress * 800) / 100));
  const active = milestones[activeIdx];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative isolate bg-[#15100B] text-white"
      style={{ height: "750vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* ===== Background photo crossfade ===== */}
        {milestones.map((m) => {
          const visible = m.idx === activeIdx;
          return (
            <motion.div
              key={m.idx}
              aria-hidden
              initial={false}
              animate={{ opacity: visible ? 1 : 0 }}
              transition={{ duration: 0.9, ease }}
              className="absolute inset-0"
            >
              <motion.img
                src={m.photo}
                alt=""
                className="h-full w-full object-cover"
                initial={false}
                animate={visible && !reduce ? { scale: [1.06, 1.12] } : { scale: 1.06 }}
                transition={{ duration: 8, ease: "linear" }}
              />
            </motion.div>
          );
        })}

        {/* Warm deep overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,19,14,0.65) 0%, rgba(26,19,14,0.30) 40%, rgba(26,19,14,0.85) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 20% 35%, rgba(214,189,159,0.18) 0%, transparent 55%)",
          }}
        />

        {/* ===== HEADER — magazine masthead ===== */}
        <div className="absolute inset-x-0 top-0 z-30 px-6 pt-10 md:px-12 md:pt-14">
          <div className="mx-auto flex max-w-[1700px] items-center justify-start gap-6">
            <h2 className="font-display text-left leading-[0.92] tracking-tight">
              <span className="text-3xl md:text-5xl">{t("journey.title.line1")}</span>{" "}
              <span className="font-serif-display italic text-[--gold-soft] text-3xl md:text-5xl">
                {t("journey.title.line2")}
              </span>
            </h2>
          </div>
        </div>

        {/* ===== MAIN — kinetic numeral + body ===== */}
        <div className="absolute inset-0 z-10 flex items-start pt-28 md:pt-36 px-6 md:px-12">
          <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            {/* LEFT: HUGE distance numeral */}
            <motion.div
              key={`L-${activeIdx}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-left md:col-span-7"
            >
              <h3
                className="mt-4 text-left font-display leading-[0.78] tracking-tight"
                style={{
                  fontSize: "clamp(7rem, 22vw, 22rem)",
                  textShadow: "0 18px 60px rgba(0,0,0,0.55)",
                }}
              >
                {active.dist}
                <span className="ml-2 align-baseline text-[0.2em] text-[--gold-soft]">m</span>
              </h3>
            </motion.div>

            {/* RIGHT: title + narrative */}
            <motion.div
              key={`R-${activeIdx}`}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="md:col-span-5"
            >
              <div
                className="text-left font-serif-display italic leading-[0.95] text-[--gold-soft]"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
              >
                {active.title}
              </div>
              <p className="mt-4 text-left text-[17px] leading-[1.7] text-white/95 md:text-[19px] md:leading-[1.65]">
                {active.body}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ===== BOTTOM TRACK — 800m with 9 markers ===== */}
        <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-10 md:px-12 md:pb-12">
          <div className="mx-auto max-w-[1700px]">
            {/* Year/dist row */}
            <div className="mb-5 hidden items-end justify-between text-[11px] uppercase tracking-[0.4em] md:flex">
              {milestones.map((m) => (
                <span
                  key={m.idx}
                  className={
                    m.idx === activeIdx
                      ? "text-[--gold-soft] transition-colors font-medium"
                      : m.idx < activeIdx
                        ? "text-white/75 transition-colors"
                        : "text-white/40"
                  }
                >
                  {m.dist}m
                </span>
              ))}
            </div>

            {/* Lane */}
            <div className="relative h-[3px] w-full bg-white/25">
              <div
                className="absolute inset-y-0 left-0 bg-[--gold-soft] will-change-[width]"
                style={{
                  width: `${progress * 100}%`,
                  boxShadow: "0 0 24px rgba(214,189,159,0.95), 0 0 8px rgba(214,189,159,0.85)",
                }}
              />
              {/* Tick markers */}
              <div className="absolute inset-0 flex items-center justify-between">
                {milestones.map((m) => {
                  const reached = m.idx <= activeIdx;
                  const current = m.idx === activeIdx;
                  return (
                    <span key={m.idx} className="relative block">
                      <span
                        className={`block transition-all duration-500 ease-out ${
                          current
                            ? "h-5 w-5 rounded-full bg-[--gold-soft] ring-[8px] ring-[rgba(214,189,159,0.35)] shadow-[0_0_28px_rgba(214,189,159,1),0_0_10px_rgba(214,189,159,0.9)]"
                            : reached
                              ? "h-3 w-3 rounded-full bg-[--gold-soft] shadow-[0_0_12px_rgba(214,189,159,0.7)]"
                              : "h-2.5 w-2.5 rounded-full bg-white/30"
                        }`}
                      />
                      {current && !reduce && (
                        <>
                          <span
                            key={`ping-${m.idx}-${activeIdx}`}
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--gold-soft] opacity-70 animate-milestone-ripple"
                          />
                          <span
                            key={`ping2-${m.idx}-${activeIdx}`}
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--gold-soft] opacity-40 animate-milestone-ripple [animation-delay:120ms]"
                          />
                        </>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  ACHIEVEMENTS — cinematic photo cards
 *  Each honour is a tall, full-bleed photograph card with a
 *  gentle dark gradient, a small year eyebrow, a dominant title
 *  and a short two-sentence description. Hover: subtle scale,
 *  slow image zoom, gradient lift, text rises. Feels like a
 *  premium sports documentary — no medals, no dashboards.
 * ============================================================ */
const ACHIEVEMENT_CARDS: Array<{ key: string; photo: string }> = [
  { key: "ach1", photo: action1 },
  { key: "ach2", photo: parisRace },
  { key: "ach3", photo: portraitStadium },
  { key: "ach4", photo: action4 },
  { key: "ach5", photo: indoorRace },
  { key: "ach6", photo: action2 },
];

export function Achievements() {
  const t = useT();
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-background px-5 py-24 text-ink md:px-12 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 50% 0%, rgba(214,189,159,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1700px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-ink-soft">
              <span className="h-px w-10 bg-[--gold]" /> {t("achievements.eyebrow")}
            </div>
            <h2 className="mt-6 font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[12vw] sm:text-[8vw] md:text-[5.5vw] xl:text-[6.5rem]">
                {t("achievements.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[12vw] sm:text-[8vw] md:text-[5.5vw] xl:text-[6.5rem]"
                style={{ marginTop: "-0.06em" }}
              >
                {t("achievements.title.line2")}
              </span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={150}>
            <p className="text-[14px] leading-relaxed text-ink/80 md:text-[15px]">
              {t("achievements.lead")}
            </p>
          </Reveal>
        </div>

        {/* Cinematic card gallery
            Desktop: grid of tall photo cards.
            Mobile: horizontal snap carousel with edge padding. */}
        <div className="mt-14 md:mt-20">
          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ACHIEVEMENT_CARDS.map((a, i) => (
              <div key={a.key} className="shrink-0 basis-[82%] snap-center">
                <AchievementCard index={i} data={a} t={t} />
              </div>
            ))}
          </div>
          <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ACHIEVEMENT_CARDS.map((a, i) => (
              <AchievementCard key={a.key} index={i} data={a} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({
  data,
  index,
  t,
}: {
  data: { key: string; photo: string };
  index: number;
  t: (key: string) => string;
}) {
  const year = t(`${data.key}.year`);
  const title = t(`${data.key}.title`);
  const body = t(`${data.key}.body`);
  const ordinal = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease }}
      whileHover={{ scale: 1.03 }}
      className="group relative isolate block aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-[#15100B] shadow-[0_18px_60px_-30px_rgba(20,15,10,0.35)] transition-shadow duration-700 ease-out hover:shadow-[0_30px_80px_-30px_rgba(20,15,10,0.45)]"
      style={{ willChange: "transform" }}
    >
      <motion.img
        src={data.photo}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        initial={false}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 1.6, ease }}
      />

      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-700 ease-out group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,16,11,0.15) 0%, rgba(21,16,11,0.10) 40%, rgba(21,16,11,0.78) 100%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-7 pt-7 md:px-8 md:pt-8">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
          {ordinal}
        </span>
        <span className="text-[10px] uppercase tracking-[0.5em] text-[--gold-soft]">
          {year}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-8 md:px-8 md:pb-10">
        <div className="transition-transform duration-700 ease-out group-hover:-translate-y-1">
          <span
            aria-hidden
            className="mb-5 block h-px w-10 bg-[--gold-soft] transition-all duration-700 ease-out group-hover:w-16"
          />
          <h3 className="font-display text-[26px] leading-[1.05] tracking-tight text-white md:text-[30px]">
            {title}
          </h3>
          <p className="mt-4 max-w-[36ch] text-[13px] leading-[1.65] text-white/75 md:text-[14px]">
            {body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
 *  QUOTE — full-bleed Paris race photo, dark overlay, italic
 * ============================================================ */
export function Quote() {
  const t = useT();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setY(-rect.top * 0.18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[100svh] overflow-hidden bg-[#15100B] text-white"
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${y}px, 0) scale(1.1)` }}
      >
        <img
          src={parisRace}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,19,14,0.55) 0%, rgba(26,19,14,0.35) 50%, rgba(26,19,14,0.80) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center justify-center px-6 text-center md:px-12">
        <Reveal>
          {t("quote.eyebrow") && (
            <span className="mb-10 inline-block text-[10px] uppercase tracking-[0.55em] text-[--gold-soft]">
              {t("quote.eyebrow")}
            </span>
          )}
          <blockquote className="font-serif-display italic leading-[1.1]" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}>
            "{t("quote.text")}"
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.5em] text-white/75">
            <span className="h-px w-16 bg-[--gold-soft]" />
            {t("quote.author")}
            <span className="h-px w-16 bg-[--gold-soft]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
 *  PARTNERS — honoured sponsors wall
 *  Each card: tall portrait, hairline gold frame, ornate corner
 *  marks, big sans wordmark + italic role + supporting copy.
 *  Feels like a tribute plaque, not a logo dump.
 * ============================================================ */
const SPONSOR_LAYOUT = [
  { key: "spn1", name: "On Running", mono: "On", caption: "Switzerland · Footwear" },
  { key: "spn2", name: "Slovenský atletický zväz", mono: "SAZ", caption: "Bratislava · Federation" },
  { key: "spn3", name: "VŠC Dukla", mono: "Dukla", caption: "Banská Bystrica · Centre" },
];

export function Partners() {
  const t = useT();
  return (
    <section className="relative overflow-hidden px-5 py-20 text-ink md:px-12 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 0% 100%, rgba(214,189,159,0.20) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1700px]">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[--gold]">
              <span className="h-px w-10 bg-[--gold]" /> {t("partners.eyebrow")}
            </div>
            <h2 className="font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[12vw] sm:text-[8vw] md:text-[5.2vw] xl:text-[6rem]">
                {t("partners.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[12vw] sm:text-[8vw] md:text-[5.2vw] xl:text-[6rem]"
                style={{ marginTop: "-0.05em" }}
              >
                {t("partners.title.line2")}
              </span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={120}>
            <p className="text-[14px] leading-[1.75] text-ink/80 md:text-[15px]">
              {t("partners.lead")}
            </p>
          </Reveal>
        </div>

        {/* Sponsor tribute cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {SPONSOR_LAYOUT.map((p, i) => (
            <Reveal key={p.key} delay={i * 120}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease }}
                className="group relative flex h-full flex-col bg-[#FBF6EA]"
              >
                {/* Hairline double frame */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 border border-[--gold]/40 transition-colors duration-500 group-hover:border-[--gold]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-[7px] border border-[--gold]/15"
                />
                {/* Ornate corner marks */}
                {[
                  "top-2 left-2",
                  "top-2 right-2 rotate-90",
                  "bottom-2 left-2 -rotate-90",
                  "bottom-2 right-2 rotate-180",
                ].map((pos) => (
                  <span
                    key={pos}
                    aria-hidden
                    className={`pointer-events-none absolute h-4 w-4 ${pos}`}
                  >
                    <span className="absolute left-0 top-0 h-px w-3 bg-[--gold]" />
                    <span className="absolute left-0 top-0 h-3 w-px bg-[--gold]" />
                  </span>
                ))}

                <div className="relative flex flex-1 flex-col items-center justify-between gap-10 px-8 py-12 text-center md:px-10 md:py-16">
                  {/* Small caption top */}
                  <div className="text-[10px] uppercase tracking-[0.45em] text-ink-soft">
                    Partner · {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Wordmark — display + italic blend */}
                  <div className="flex flex-col items-center">
                    <div className="font-serif-display text-6xl italic leading-none text-ink md:text-7xl">
                      {p.mono}
                    </div>
                    <div className="mt-4 h-px w-12 bg-[--gold]" />
                    <div className="mt-4 font-display text-sm tracking-[0.35em] text-ink/80 uppercase md:text-base">
                      {p.name}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.35em] text-ink-soft">
                      {p.caption}
                    </div>
                  </div>

                  {/* Role + body */}
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-[--gold]">
                      {t(`${p.key}.role`)}
                    </div>
                    <p className="font-serif-display text-base italic leading-[1.55] text-ink/85 md:text-lg">
                      {t(`${p.key}.body`)}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  CONTACT — asymmetric, elegant form on right
 * ============================================================ */
export function Contact() {
  const t = useT();
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20 text-ink md:px-12 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 50% at 100% 100%, rgba(232,207,198,0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1700px] gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-ink-soft">
              <span className="h-px w-10 bg-[--gold]" /> {t("contact.eyebrow")}
            </div>
            <h2 className="mt-6 font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[12vw] sm:text-[8vw] md:text-[4.8vw] xl:text-[5.5rem]">
                {t("contact.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[12vw] sm:text-[8vw] md:text-[4.8vw] xl:text-[5.5rem]"
                style={{ marginTop: "-0.05em" }}
              >
                {t("contact.title.line2")}
              </span>
            </h2>
            <p className="mt-8 max-w-md text-[14px] leading-[1.75] text-ink/85 md:text-[15px]">
              {t("contact.lead")}
            </p>

            <dl className="mt-12 space-y-7 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.35em] text-ink-soft">
                  E-mail
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:ggajanova@gmail.com"
                    className="group inline-flex items-center gap-3 font-display text-2xl tracking-wide text-ink md:text-3xl"
                  >
                    <span className="relative">
                      ggajanova@gmail.com
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[--gold] transition-transform duration-700 group-hover:scale-x-100" />
                    </span>
                  </a>
                </dd>
              </div>
              <div className="flex gap-12">
                {[
                  ["Instagram", "@gabriela.gajanova"],
                  ["Threads", "@gabriela.gajanova"],
                ].map(([label, handle]) => (
                  <div key={label}>
                    <dt className="text-[10px] uppercase tracking-[0.35em] text-ink-soft">
                      {label}
                    </dt>
                    <dd className="mt-2">
                      <a href="#" className="font-display text-lg text-ink hover:text-[--gold] md:text-xl">
                        {handle}
                      </a>
                    </dd>
                  </div>
                ))}
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="md:col-span-7" delay={150}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative space-y-8 border border-ink/15 bg-background p-8 md:p-12"
          >
            <Field label={t("contact.form.name")} id="name" type="text" placeholder={t("form.placeholder.name")} />
            <Field label={t("contact.form.email")} id="email" type="email" placeholder="you@example.com" />
            <div>
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.35em] text-ink-soft"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t("form.placeholder.message")}
                className="mt-3 w-full resize-none border-0 border-b border-ink/20 bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-[--gold] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[--gold] px-10 py-4 text-[11px] uppercase tracking-[0.35em] text-[#1A130E] transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "0 14px 40px -16px rgba(176,147,94,0.6)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">{t("contact.form.send")}</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
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
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.35em] text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-ink/20 bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-[--gold] focus:outline-none"
      />
    </div>
  );
}

/* ============================================================
 *  FOOTER — clean, warm, hairline
 * ============================================================ */
import logoAsset from "@/assets/gaga-logo-transparent.png.asset.json";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#15100B] px-6 pt-24 pb-10 text-white md:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src={logoAsset.url}
              alt="GAGA"
              className="h-40 w-auto brightness-0 invert"
            />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.follow")}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-[--gold-soft]">Instagram</a></li>
              <li><a href="#" className="hover:text-[--gold-soft]">Threads</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.contact")}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:ggajanova@gmail.com" className="hover:text-[--gold-soft]">
                  ggajanova@gmail.com
                </a>
              </li>
              <li><a href="#contact" className="hover:text-[--gold-soft]">{t("contact.form.send")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.35em] text-white/45 md:flex-row md:items-center">
          <span>© {year} Gabriela Gajanová · {t("footer.rights")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
