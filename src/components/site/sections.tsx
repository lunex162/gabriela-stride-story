import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-background pb-28 pt-16 text-ink md:pb-40 md:pt-24"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-16 px-6 md:grid-cols-2 md:items-stretch md:gap-[96px] md:px-12">
        {/* LEFT — text + badges */}
        <div className="relative flex flex-col self-stretch">
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

        </div>

        {/* RIGHT — portrait */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative flex flex-col self-stretch"
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
            className="relative mx-auto w-full max-w-[540px] flex-1 overflow-hidden rounded-2xl md:h-full"
          >
            <motion.img
              src={gagaAbout.url}
              alt="Gabriela Gajanová — Tokyo 2025"
              loading="lazy"
              animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
              transition={{ duration: 0.6, ease }}
              className="block h-auto w-full rounded-2xl will-change-transform md:h-full md:object-cover"
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
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
      className="relative overflow-hidden bg-background px-5 py-14 text-ink md:px-12 md:py-20"
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
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-12 text-center">
            <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-ink-soft">
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
          <Reveal className="hidden md:col-span-4 md:col-start-9" delay={150}>
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
      className="relative isolate h-[80svh] overflow-hidden text-ink"
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
            "linear-gradient(180deg, rgba(249,246,241,0.45) 0%, rgba(249,246,241,0.22) 45%, rgba(249,246,241,0.75) 100%)",
        }}
      />
      {/* Smooth fade into page background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 md:h-40"
        style={{
          background:
            "linear-gradient(to top, #F9F6F1 0%, rgba(249,246,241,0.95) 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center justify-center px-6 text-center md:px-12">
        <Reveal>
          {t("quote.eyebrow") && (
            <span className="mb-10 inline-block text-[10px] uppercase tracking-[0.55em] text-[--gold]">
              {t("quote.eyebrow")}
            </span>
          )}
          <blockquote className="font-serif-display italic leading-[1.1]" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}>
            "{t("quote.text")}"
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.5em] text-ink/70">
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

/* ============================================================
 *  PRESS — editorial "As featured in" selection
 *  Three magazine-style article cards. Desktop: 3-up grid.
 *  Mobile: horizontal snap carousel. Cover image ~60% height,
 *  outlet logo top-left, date, headline, excerpt, subtle link.
 * ============================================================ */
type PressItem = {
  outlet: string;
  outletMark: ReactNode;
  dateKey: string;
  titleKey: string;
  excerptKey: string;
  href: string;
  cover: string;
  focus?: string;
};

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "Forbes Slovensko",
    outletMark: (
      <svg viewBox="0 0 120 28" aria-hidden className="h-full w-full">
        <text
          x="0"
          y="22"
          fill="currentColor"
          fontFamily="'Times New Roman', Georgia, serif"
          fontWeight={900}
          fontStyle="italic"
          fontSize="26"
          letterSpacing="-1"
        >
          Forbes
        </text>
      </svg>
    ),
    dateKey: "press.date1",
    titleKey: "press.title1",
    excerptKey: "press.excerpt1",
    href: "https://www.forbes.sk/lists/rebricek-forbes-30-pod-30-2025/sport/gabriela-gajanova/",
    cover: "https://cdn.forbes.sk/uploads/2025/05/gajanova_gabriela.jpg",
    focus: "center 25%",
  },
  {
    outlet: "Slovenský olympijský tím",
    outletMark: (
      <svg viewBox="0 0 160 28" aria-hidden className="h-full w-full">
        <text
          x="0"
          y="20"
          fill="currentColor"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={700}
          fontSize="11"
          letterSpacing="3"
        >
          OLYMPIC.SK
        </text>
      </svg>
    ),
    dateKey: "press.date2",
    titleKey: "press.title2",
    excerptKey: "press.excerpt2",
    href: "https://www.olympic.sk/clanok/atlet-roka-2024-kralovnou-prvy-raz-gabriela-gajanova",
    cover:
      "https://www.olympic.sk/sites/default/files/styles/gallery_full_watermark/public/field_media_image/2024-11/20240711_atlet_roka24_12085956.jpg",
    focus: "center 30%",
  },
  {
    outlet: "Atletika.sk",
    outletMark: (
      <svg viewBox="0 0 160 28" aria-hidden className="h-full w-full">
        <text
          x="0"
          y="20"
          fill="currentColor"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={700}
          fontSize="11"
          letterSpacing="3"
        >
          ATLETIKA.SK
        </text>
      </svg>
    ),
    dateKey: "press.date3",
    titleKey: "press.title3",
    excerptKey: "press.excerpt3",
    href: "https://www.atletika.sk/gabriela-gajanova-prekonala-na-zlatom-mitingu-vo-francuzskom-lievine-vlastny-slovensky-rekord-na-800-m/",
    cover:
      "https://www.atletika.sk/wp-content/uploads/2025/02/Gajanova-Gabriela-Lievin-2025-.jpg",
    focus: "center 25%",
  },
];

export function Press() {
  const t = useT();
  return (
    <section
      id="press"
      className="relative overflow-hidden px-5 pt-8 pb-16 text-ink md:px-12 md:pb-20"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* Editorial header */}
        <div className="text-center">
          <Reveal>
            {t("press.eyebrow") && (
              <div className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[--gold]">
                <span className="h-px w-10 bg-[--gold]" />
                {t("press.eyebrow")}
                <span className="h-px w-10 bg-[--gold]" />
              </div>
            )}
            <h2 className="font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[10vw] sm:text-[7vw] md:text-[4.6vw] xl:text-[5.2rem]">
                {t("press.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[10vw] sm:text-[7vw] md:text-[4.6vw] xl:text-[5.2rem]"
                style={{ marginTop: "-0.05em" }}
              >
                {t("press.title.line2")}
              </span>
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-xl" delay={120}>
            <p className="text-[14px] leading-[1.8] text-ink/75 md:text-[15px]">
              {t("press.lead")}
            </p>
          </Reveal>
        </div>

        {/* Cards: mobile snap carousel → desktop 3-up grid */}
        <div
          className="mt-16 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {PRESS_ITEMS.map((item, i) => (
            <Reveal
              key={item.href}
              delay={200 + i * 120}
              className="min-w-[85%] snap-start sm:min-w-[70%] md:min-w-0"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/press flex h-full flex-col overflow-hidden rounded-[24px] border border-[--gold]/25 bg-[#fdfaf3] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    "0 10px 30px -20px rgba(60,45,25,0.25), 0 2px 8px -4px rgba(60,45,25,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px -25px rgba(60,45,25,0.35), 0 8px 20px -10px rgba(60,45,25,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px -20px rgba(60,45,25,0.25), 0 2px 8px -4px rgba(60,45,25,0.08)";
                }}
              >
                {/* Cover ~60% height */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.outlet}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/press:scale-[1.06]"
                    style={{ objectPosition: item.focus ?? "center" }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,15,10,0.35) 0%, rgba(20,15,10,0) 45%)",
                    }}
                  />
                  {/* Outlet mark, top-left */}
                  <div className="absolute left-4 top-4 flex h-7 items-center rounded-full bg-white/90 px-3 text-ink shadow-sm backdrop-blur">
                    <div className="h-4">{item.outletMark}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-ink/55">
                    {t(item.dateKey)}
                  </div>
                  <h3 className="mt-3 font-display text-[22px] leading-[1.15] text-ink md:text-[24px]">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink/70">
                    {t(item.excerptKey)}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.3em] text-[--gold]">
                    <span className="relative">
                      {t("press.cta")}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[--gold] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/press:scale-x-100"
                      />
                    </span>
                    <span className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/press:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Partner wordmark SVGs — single-colour (currentColor), each a stylised
 * typographic mark. Rendered white on the dark strip, gently tinted on hover. */
const PARTNER_LOGOS: { name: string; svg: ReactNode }[] = [
  {
    name: "On Running",
    svg: (
      <svg viewBox="0 0 140 40" fill="currentColor" aria-hidden>
        <text
          x="0" y="30"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={800}
          fontSize="34"
          letterSpacing="-1"
        >
          On
        </text>
        <circle cx="70" cy="20" r="3" />
        <text
          x="82" y="26"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={400}
          fontSize="10"
          letterSpacing="4"
        >
          RUN
        </text>
      </svg>
    ),
  },
  {
    name: "Slovenský atletický zväz",
    svg: (
      <svg viewBox="0 0 200 40" fill="currentColor" aria-hidden>
        <text
          x="0" y="24"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={800}
          fontSize="26"
          letterSpacing="2"
        >
          SAZ
        </text>
        <line x1="70" y1="10" x2="70" y2="34" stroke="currentColor" strokeWidth="1" />
        <text
          x="80" y="18"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={500}
          fontSize="9"
          letterSpacing="3"
        >
          SLOVENSKÝ
        </text>
        <text
          x="80" y="30"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={400}
          fontSize="8"
          letterSpacing="3"
          opacity="0.85"
        >
          ATLETICKÝ ZVÄZ
        </text>
      </svg>
    ),
  },
  {
    name: "VŠC Dukla",
    svg: (
      <svg viewBox="0 0 170 40" fill="currentColor" aria-hidden>
        <rect x="0" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
        <text
          x="6" y="27"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={800}
          fontSize="14"
        >
          D
        </text>
        <text
          x="34" y="27"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={800}
          fontSize="22"
          letterSpacing="2"
        >
          DUKLA
        </text>
        <text
          x="34" y="38"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight={400}
          fontSize="7"
          letterSpacing="4"
          opacity="0.8"
        >
          BANSKÁ BYSTRICA
        </text>
      </svg>
    ),
  },
];

export function Partners() {
  const t = useT();
  // Duplicate for seamless marquee loop
  const loop = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section className="relative overflow-hidden px-5 py-16 text-ink md:px-12 md:py-20">

      <div className="relative mx-auto max-w-[1700px]">
        {/* ── Editorial header ── */}
        <div className="text-center">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[--gold]">
              <span className="h-px w-10 bg-[--gold]" /> {t("partners.eyebrow")}
            </div>
            <h2 className="font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[10vw] sm:text-[7vw] md:text-[4.6vw] xl:text-[5.2rem]">
                {t("partners.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[10vw] sm:text-[7vw] md:text-[4.6vw] xl:text-[5.2rem]"
                style={{ marginTop: "-0.05em" }}
              >
                {t("partners.title.line2")}
              </span>
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-xl" delay={120}>
            <p className="text-[14px] leading-[1.8] text-ink/75 md:text-[15px]">
              {t("partners.lead")}
            </p>
          </Reveal>
        </div>

        {/* ── Partner strip — dark luxury panel with slow marquee ── */}
        <Reveal delay={200} className="mt-20 md:mt-28">
          <div
            className="group/strip relative overflow-hidden rounded-[32px]"
            style={{
              background:
                "linear-gradient(180deg, #1b1611 0%, #161311 50%, #100d0a 100%)",
              boxShadow:
                "0 40px 90px -50px rgba(20,15,10,0.55), 0 20px 40px -30px rgba(120,90,40,0.15)",
            }}
          >
            <style>{`
              @keyframes partnerMarquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .partner-track { animation: partnerMarquee 60s linear infinite; }
              .group\\/strip:hover .partner-track { animation-play-state: paused; }
              .partner-logo { transition: transform 500ms cubic-bezier(.16,1,.3,1), opacity 500ms; }
              .partner-logo:hover { transform: scale(1.12); opacity: 1 !important; }
            `}</style>

            {/* Gold top edge highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(214,189,159,0.55), transparent)",
              }}
            />
            {/* Inner glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[32px]"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,240,210,0.06), inset 0 -30px 60px rgba(0,0,0,0.45), inset 0 0 60px rgba(214,189,159,0.05)",
              }}
            />
            {/* Edge fade masks */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
              style={{
                background:
                  "linear-gradient(90deg, #161311 0%, rgba(22,19,17,0) 100%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
              style={{
                background:
                  "linear-gradient(270deg, #161311 0%, rgba(22,19,17,0) 100%)",
              }}
            />

            {/* Marquee track */}
            <div className="relative flex h-[140px] items-center overflow-hidden md:h-[170px]">
              <div className="partner-track flex shrink-0 items-center gap-16 pl-16 md:gap-24 md:pl-24">
                {loop.map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="partner-logo flex h-16 shrink-0 items-center text-white/70 md:h-20"
                    title={p.name}
                    aria-label={p.name}
                  >
                    <div className="h-full w-auto [&_svg]:h-full [&_svg]:w-auto">
                      {p.svg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
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
      className="relative overflow-hidden px-5 py-16 text-ink md:px-12 md:py-20"
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
        {/* Centered title, matching achievements */}
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-ink-soft">
            <span className="h-px w-10 bg-[--gold]" /> {t("contact.eyebrow")}
          </div>
          <h2 className="mt-6 font-display leading-[0.92] tracking-tight text-ink">
            <span className="block text-[12vw] sm:text-[8vw] md:text-[5.5vw] xl:text-[6.5rem]">
              {t("contact.title.line1")}
            </span>
            <span
              className="block font-serif-display italic text-[--gold] text-[12vw] sm:text-[8vw] md:text-[5.5vw] xl:text-[6.5rem]"
              style={{ marginTop: "-0.06em" }}
            >
              {t("contact.title.line2")}
            </span>
          </h2>
        </Reveal>

        {/* Dark 3D card holding contact info + form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
          whileHover={{ y: -4 }}
          className="group relative isolate mt-14 overflow-hidden rounded-[28px] bg-[#15100B] text-white shadow-[0_18px_60px_-30px_rgba(20,15,10,0.35)] transition-shadow duration-700 ease-out hover:shadow-[0_40px_100px_-30px_rgba(20,15,10,0.55)] md:mt-20"
          style={{ willChange: "transform" }}
        >
          {/* Background photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${portraitStadium})` }}
          />
          {/* 80% black overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-black/80"
          />
          {/* Ambient gold glow inside the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 55% at 100% 0%, rgba(176,147,94,0.22) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(176,147,94,0.14) 0%, transparent 65%)",
            }}
          />

          <div className="relative grid gap-12 p-8 md:grid-cols-12 md:gap-16 md:p-14 lg:p-16">
            {/* Left — direct contact */}
            <div className="md:col-span-5">
              <span className="mb-6 block h-px w-10 bg-[--gold-soft]" />
              <dl className="space-y-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                    E-mail
                  </dt>
                  <dd className="mt-3">
                    <a
                      href="mailto:ggajanova@gmail.com"
                      className="group/mail inline-flex items-center gap-3 font-display text-2xl tracking-wide text-white md:text-3xl"
                    >
                      <span className="relative">
                        ggajanova@gmail.com
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[--gold-soft] transition-transform duration-700 group-hover/mail:scale-x-100" />
                      </span>
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-8">
                  {[
                    ["Instagram", "@gabriela.gajanova"],
                    ["Threads", "@gabriela.gajanova"],
                  ].map(([label, handle]) => (
                    <div key={label}>
                      <dt className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                        {label}
                      </dt>
                      <dd className="mt-3">
                        <a
                          href="#"
                          className="font-display text-lg text-white transition-colors hover:text-[--gold-soft] md:text-xl"
                        >
                          {handle}
                        </a>
                      </dd>
                    </div>
                  ))}
                </div>
              </dl>
            </div>

            {/* Right — form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-8 md:col-span-7"
            >
              <Field label={t("contact.form.name")} id="name" type="text" placeholder={t("form.placeholder.name")} />
              <Field label={t("contact.form.email")} id="email" type="email" placeholder="you@example.com" />
              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.5em] text-white/60"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t("form.placeholder.message")}
                  className="mt-3 w-full resize-none border-0 border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder:text-white/40 focus:border-[--gold-soft] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/[0.04] px-9 py-4 text-[11px] uppercase tracking-[0.35em] text-white backdrop-blur transition-colors hover:border-[--gold-soft] hover:text-[--gold-soft]"
              >
                <span>{t("contact.form.send")}</span>
                <span aria-hidden className="transition-transform">→</span>
              </button>
            </form>
          </div>
        </motion.div>
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
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.5em] text-white/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder:text-white/40 focus:border-[--gold-soft] focus:outline-none"
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
    <footer className="relative overflow-hidden bg-[#15100B] px-6 pt-12 pb-5 text-white md:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src={logoAsset.url}
              alt="GAGA"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.follow")}
            </div>
            <ul className="mt-2.5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-[--gold-soft]">Instagram</a></li>
              <li><a href="#" className="hover:text-[--gold-soft]">Threads</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.contact")}
            </div>
            <ul className="mt-2.5 space-y-3 text-sm">
              <li>
                <a href="mailto:ggajanova@gmail.com" className="hover:text-[--gold-soft]">
                  ggajanova@gmail.com
                </a>
              </li>
              <li><a href="#contact" className="hover:text-[--gold-soft]">{t("contact.form.send")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.35em] text-white/45 md:flex-row md:items-center">
          <span>© {year} Gabriela Gajanová · {t("footer.rights")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
