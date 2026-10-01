import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { useLocale, useT } from "@/i18n/LocaleContext";
import { getWorldRanking, WORLD_RANKING_URL, type WorldRanking } from "@/lib/worldRanking";
import portraitStadium from "@/assets/photos/portrait-stadium.jpg";
import { HeroVideo } from "./HeroVideo";
import { SOCIALS } from "@/lib/socials";
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
        <HeroVideo poster={portraitStadium} className="h-full w-full" />
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
            <blockquote className="font-serif-display italic leading-[0.95] tracking-tight text-ink hidden md:block md:text-[2.6vw] xl:text-[2.9rem]">
              „{t("about.quote")}“
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-10 space-y-6"
          >
            <p className="text-[18px] leading-[1.7] text-ink/80 md:text-[19px]">
              {t("about.p1")}
            </p>
            <p className="text-[18px] leading-[1.7] text-ink/80 md:text-[19px]">
              {t("about.p2")}
            </p>
            <p className="text-[18px] leading-[1.7] text-ink/80 md:text-[19px]">
              {t("about.p3")}
            </p>
          </motion.div>

          <WorldRankingBadge />

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
            className="relative mx-auto w-full max-w-[430px] flex-1 overflow-hidden rounded-2xl md:h-full"
          >
            <motion.img
              src={gagaAbout.url}
              alt="Gabriela Gajanová — Tokyo 2025"
              loading="lazy"
              decoding="async"
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
 *  WORLD RANKING — aktuálne miesto zo svetového rebríčka
 *  World Athletics (800 m ženy), odkaz vedie priamo na rebríček.
 * ============================================================ */
function WorldRankingBadge() {
  const t = useT();
  const locale = useLocale();
  const [ranking, setRanking] = useState<WorldRanking>(null);

  useEffect(() => {
    getWorldRanking().then(setRanking, () => {});
  }, []);

  const date = ranking?.date
    ? new Date(ranking.date).toLocaleDateString(locale === "sk" ? "sk-SK" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <motion.a
      href={WORLD_RANKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, delay: 0.3, ease }}
      className="group mt-10 flex items-center gap-6 rounded-2xl border border-[--gold]/30 bg-white/50 px-6 py-5 transition-colors duration-300 hover:border-[--gold]"
      aria-label={t("ranking.cta")}
    >
      <span className="font-display text-[3.25rem] leading-none tracking-tight text-ink md:text-[3.75rem]">
        {ranking ? (
          <>
            <span className="text-[--gold]">#</span>
            {ranking.rank}
          </>
        ) : (
          <span className="text-[--gold]">WA</span>
        )}
      </span>
      <span className="flex flex-1 flex-col gap-1.5">
        <span className="text-[11px] uppercase tracking-[0.35em] text-ink">
          {t("ranking.label")}
        </span>
        <span className="text-[13px] text-ink/60">
          {date ? `${t("ranking.updated")} ${date}` : "World Athletics"}
        </span>
      </span>
      <span
        aria-hidden
        className="text-[--gold] transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
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
      className="relative overflow-hidden px-5 pt-8 pb-6 text-ink md:px-12 md:pb-8"
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
              <span className="block text-[8vw] sm:text-[5.5vw] md:text-[3.7vw] xl:text-[4.2rem]">
                {t("press.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold] text-[8vw] sm:text-[5.5vw] md:text-[3.7vw] xl:text-[4.2rem]"
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
                    decoding="async"
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
    <section className="relative overflow-hidden px-5 pt-6 pb-10 text-ink md:px-12 md:pt-8 md:pb-12">

      <div className="relative mx-auto max-w-[1700px]">
        {/* ── Editorial header ── */}
        <div className="text-center">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[--gold]">
              <span className="h-px w-10 bg-[--gold]" /> {t("partners.eyebrow")}
            </div>
            <h2 className="font-display leading-[0.92] tracking-tight text-ink">
              <span className="block text-[8vw] sm:text-[5.5vw] md:text-[3.7vw] xl:text-[4.2rem]">
                {t("partners.title.line1")}
              </span>
            </h2>
          </Reveal>
        </div>

        {/* ── Partner strip — dark luxury panel with slow marquee ── */}
        <Reveal delay={200} className="mt-14 md:mt-20">
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
      className="relative overflow-hidden px-5 pt-10 pb-16 text-ink md:px-12 md:pt-12 md:pb-20"
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
            <span className="block text-[8vw] sm:text-[5.5vw] md:text-[3.7vw] xl:text-[4.2rem]">
              {t("contact.title.line1")}
            </span>
            <span
              className="block font-serif-display italic text-[--gold] text-[8vw] sm:text-[5.5vw] md:text-[3.7vw] xl:text-[4.2rem]"
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
                    ...SOCIALS.map((s) => [s.label, s.handle, s.url]),
                    ["Management", "EP Management", "https://www.ep-management.ch/"],
                  ].map(([label, handle, url]) => (
                    <div key={label}>
                      <dt className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                        {label}
                      </dt>
                      <dd className="mt-3">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-lg text-white transition-colors hover:text-[--gold-soft] md:text-xl"
                        >
                          {handle}
                        </a>
                      </dd>
                    </div>
                  ))}
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                    ADMINISTRATÍVA & SPOLUPRÁCE
                  </dt>
                  <dd className="mt-3">
                    <a
                      href="mailto:mariagajanova17@gmail.com"
                      className="group/mail inline-flex items-center gap-3 font-display text-2xl tracking-wide text-white md:text-3xl"
                    >
                      <span className="relative">
                        mariagajanova17@gmail.com
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[--gold-soft] transition-transform duration-700 group-hover/mail:scale-x-100" />
                      </span>
                    </a>
                  </dd>
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
    <footer className="relative overflow-hidden bg-[#15100B] px-6 pt-14 pb-6 text-white md:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Logo */}
        <div className="mb-10 flex justify-center md:mb-12">
          <img
            src={logoAsset.url}
            alt="GAGA"
            loading="lazy"
            decoding="async"
            className="h-24 w-auto brightness-0 invert md:h-28"
          />
        </div>

        {/* 3 columns */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* GaGa s.r.o. */}
          <div className="text-center md:text-left">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              GaGa s. r. o.
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>IČO: 56948344</li>
              <li>DIČ: 2122531455</li>
              <li className="pt-1 leading-relaxed">
                Sídlo:<br />
                Martina Martinčeka 4701/2<br />
                031 01 Liptovský Mikuláš
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="text-center md:text-left">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.contact")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:ggajanova@gmail.com" className="hover:text-[--gold-soft]">
                  ggajanova@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:mariagajanova17@gmail.com" className="hover:text-[--gold-soft]">
                  mariagajanova17@gmail.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[--gold-soft]">
                  {t("contact.form.send") || "Kontaktný formulár"}
                </a>
              </li>
            </ul>
          </div>

          {/* Sledujte ma */}
          <div className="text-center md:text-left">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[--gold-soft]">
              {t("footer.follow")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-[--gold-soft]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.35em] text-white/45 md:flex-row md:gap-0">
          <span>© {year} Gabriela Gajanová · {t("footer.rights")}</span>
          <a
            href="https://www.callora.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[--gold-soft]"
          >
            Web vytvorila callora.sk
          </a>
        </div>
      </div>
    </footer>
  );
}
