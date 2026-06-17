import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import track from "@/assets/track.jpg";
import race1 from "@/assets/race1.jpg";
import race2 from "@/assets/race2.jpg";
import race3 from "@/assets/race3.jpg";
import race4 from "@/assets/race4.jpg";
import quoteBg from "@/assets/quote.jpg";

/* ---------------- HERO ---------------- */
export function Hero() {
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
      {/* Video / image background */}
      <div
        className="absolute inset-0 animate-slow-zoom"
        style={{ transform: `translateY(${y * 0.25}px) scale(1.05)` }}
      >
        {/* Reserved for video upload */}
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
          alt="Gabriela Gajanová sprinting on the track at dusk"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-deep/65" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 80px, rgba(194,85,58,0.18) 80px 81px)",
          transform: `translateX(${-y * 0.15}px)`,
        }}
      />

      {/* Huge 800M ghost */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${y * 0.1}px)` }}
      >
        <span className="font-display text-[28vw] leading-none tracking-tight text-white/[0.06] select-none">
          800M
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
        <div className="max-w-5xl">
          <div
            className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-gold opacity-0"
            style={{ animation: "fade-up 1s ease-out 0.2s forwards" }}
          >
            <span className="h-px w-10 bg-gold" />
            Olympic Athlete
          </div>
          <h1
            className="font-display text-[18vw] leading-[0.85] tracking-tight md:text-[12rem] opacity-0"
            style={{ animation: "fade-up 1.2s ease-out 0.5s forwards" }}
          >
            GABRIELA
            <br />
            <span className="text-gold">GAJANOVÁ</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-sm tracking-[0.18em] text-white/80 md:text-base opacity-0"
            style={{ animation: "fade-up 1s ease-out 0.9s forwards" }}
          >
            Olympian · Slovak National Team Athlete · European Championship Medalist
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0"
            style={{ animation: "fade-up 1s ease-out 1.1s forwards" }}
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              Discover My Story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-navy-deep"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-white/60">
        Scroll
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
const stats = [
  { value: "800 m", label: "Main Discipline" },
  { value: "2×", label: "Olympic Games" },
  { value: "1:58.22", label: "Slovak Record" },
  { value: "Silver", label: "European Championships" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-12 md:gap-24">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <img
              src={portrait}
              alt="Portrait of Gabriela Gajanová"
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
              About Me
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif-display text-4xl leading-[1.05] text-navy-deep md:text-6xl">
              Ahojte, moje meno je Gabriela Gajanová a&nbsp;rada behám.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-ink md:max-w-xl md:text-lg">
              <p>
                Som slovenská reprezentantka v behu na 800 metrov, dvojnásobná olympionička
                a strieborná medailistka z Majstrovstiev Európy.
              </p>
              <p>
                Pochádzam z Bobrovca na Liptove a atletike sa venujem od svojich 12 rokov.
              </p>
              <p>
                Som súčasťou medzinárodnej tréningovej skupiny TeamLouis a členkou
                VŠC Dukla Banská Bystrica.
              </p>
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
const achievements = [
  { year: "2021", title: "Olympic Games Tokyo", place: "Tokyo, Japan" },
  { year: "2024", title: "Olympic Games Paris", place: "Paris, France" },
  { year: "2024", title: "European Championships", place: "Silver Medal" },
  { year: "—", title: "Slovak National Record", place: "1:58.22" },
  { year: "—", title: "Slovak National Team", place: "Senior Squad" },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative bg-powder px-6 py-32 md:px-16 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> Honours
            </div>
            <h2 className="font-display text-6xl leading-[0.9] text-navy-deep md:text-8xl">
              ACHIEVE
              <br />
              MENTS
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-base leading-relaxed text-ink md:text-lg">
              Years of discipline distilled into moments that defined a career — on
              the world's biggest stages.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <article
                className="group relative h-full overflow-hidden bg-white p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(42,22,16,0.35)]"
                style={{ minHeight: 320 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="font-display text-sm tracking-[0.3em] text-gold">
                      {a.year}
                    </div>
                    <h3 className="mt-6 font-display text-3xl leading-tight text-navy-deep md:text-4xl">
                      {a.title.toUpperCase()}
                    </h3>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-ink-soft">
                      {a.place}
                    </span>
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

/* ---------------- JOURNEY ---------------- */
const milestones = [
  { title: "THE BEGINNING", place: "Bobrovec, Slovakia", year: "2008" },
  { title: "FIRST COMPETITIONS", place: "Liptov region", year: "2010" },
  { title: "SLOVAK NATIONAL TEAM", place: "Senior debut", year: "2018" },
  { title: "INTERNATIONAL STAGE", place: "World circuit", year: "2020" },
  { title: "TOKYO 2021", place: "Olympic Games", year: "2021" },
  { title: "EUROPEAN CHAMPIONSHIPS", place: "Silver Medal", year: "2024" },
  { title: "PARIS 2024", place: "Olympic Games", year: "2024" },
  { title: "THE JOURNEY CONTINUES", place: "Next horizon", year: "→" },
];

export function Journey() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIdx = Math.min(
    milestones.length - 1,
    Math.floor(progress * milestones.length),
  );

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-navy-deep text-white"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Track image with perspective rotation */}
        <div
          className="absolute inset-0 origin-center transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1400px) rotateX(${55 - progress * 20}deg) rotateZ(${
              progress * 8 - 4
            }deg) scale(${1.2 + progress * 0.4})`,
          }}
        >
          <img
            src={track}
            alt=""
            className="h-full w-full object-cover opacity-40"
            width={1600}
            height={1000}
            loading="lazy"
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/40 to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--navy-deep)_85%)]" />

        {/* Glowing runner trail */}
        <div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_60px_30px_rgba(194,85,58,0.45)]"
          style={{
            transform: `translate(calc(-50% + ${(progress - 0.5) * 60}vw), calc(-50% + ${
              Math.sin(progress * Math.PI * 2) * 10
            }vh))`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-10 px-6 pt-32 md:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> The Journey
            </div>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              FROM BOBROVEC <span className="text-gold">·</span> TO THE WORLD
            </h2>
          </div>
        </div>

        {/* Active milestone card */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-20 md:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex items-end justify-between gap-8">
              <div key={activeIdx} className="animate-fade-up">
                <div className="font-display text-sm tracking-[0.3em] text-gold">
                  {milestones[activeIdx].year}
                </div>
                <div className="mt-3 font-display text-5xl leading-none md:text-7xl">
                  {milestones[activeIdx].title}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  {milestones[activeIdx].place}
                </div>
              </div>
              <div className="hidden font-display text-sm tracking-[0.3em] text-white/40 md:block">
                {String(activeIdx + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
              </div>
            </div>

            {/* Progress lane */}
            <div className="mt-10 h-px w-full bg-white/10">
              <div
                className="h-px bg-gold transition-[width] duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/40">
              {milestones.map((m, i) => (
                <span
                  key={m.title}
                  className={i <= activeIdx ? "text-gold" : ""}
                >
                  ·
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const photos = [
  { src: race1, alt: "At the starting blocks", tag: "Start", h: "row-span-2" },
  { src: race3, alt: "Finish line celebration", tag: "Finish", h: "row-span-2" },
  { src: race2, alt: "Detail of running shoes", tag: "Details", h: "" },
  { src: race4, alt: "Behind the scenes preparation", tag: "Behind The Scenes", h: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-beige px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> Race Gallery
            </div>
            <h2 className="font-display text-6xl leading-[0.9] text-navy-deep md:text-8xl">
              MOMENTS
              <br />
              IN MOTION
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={150}>
            <p className="text-sm leading-relaxed text-ink-soft md:text-base">
              Race. Start. Finish. Emotion. Details. Behind the scenes. The
              fragments that compose a life on the track.
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

/* ---------------- 800 METRES ---------------- */
export function EightHundred() {
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

  const gap = (1 - Math.abs(p - 0.5) * 2) * 8; // separates then reconnects

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep px-6 py-40 text-white md:py-56">
      {/* Animated track lines */}
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
        <div className="mb-10 text-[10px] uppercase tracking-[0.5em] text-gold">
          The Discipline
        </div>
        <h2 className="font-display leading-none">
          <span
            className="block text-[24vw] md:text-[18rem]"
            style={{ letterSpacing: `${gap}px` }}
          >
            800
          </span>
          <span className="mt-2 block text-2xl tracking-[0.6em] text-gold md:text-4xl">
            METRES
          </span>
        </h2>
        <Reveal>
          <p className="mx-auto mt-16 max-w-xl font-serif-display text-2xl leading-relaxed text-white/90 md:text-3xl">
            Two laps. One strategy. The final 100 metres where everything is decided.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
const partners = [
  { name: "On Running", mono: "ON" },
  { name: "Slovenský atletický zväz", mono: "SAZ" },
  { name: "VŠC Dukla Banská Bystrica", mono: "DUKLA" },
];

export function Partners() {
  return (
    <section className="bg-white px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="mb-16 flex items-center justify-between border-b border-border pb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Partners
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-ink-soft">
              In Collaboration
            </span>
          </div>
        </Reveal>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="group flex h-48 flex-col items-center justify-center bg-white px-6 text-center transition-all">
                <div className="font-display text-4xl tracking-[0.2em] text-ink-soft transition-colors duration-500 group-hover:text-navy md:text-5xl">
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
  return (
    <section className="bg-beige px-6 py-32 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> Social
            </div>
            <h2 className="font-serif-display text-5xl leading-[1] text-navy-deep md:text-7xl">
              Follow my journey
            </h2>
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
                className="group relative block aspect-[4/3] overflow-hidden bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(42,22,16,0.25)]"
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
                    <div className="font-display text-4xl text-navy-deep md:text-6xl">
                      {s.handle}
                    </div>
                    <div className="mt-4 text-xs uppercase tracking-[0.25em] text-ink-soft">
                      Feed loading soon
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
          <div className="mb-10 text-[10px] uppercase tracking-[0.5em] text-gold">
            In Her Words
          </div>
          <blockquote className="font-serif-display text-3xl leading-[1.2] md:text-6xl">
            “Každý štart je nová príležitosť prekonať samu seba.”
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-gold" />
            Gabriela Gajanová
            <span className="h-px w-12 bg-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  return (
    <section id="contact" className="bg-background px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-12 md:gap-24">
        <div className="md:col-span-5">
          <Reveal>
            <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> Get in Touch
            </div>
            <h2 className="font-display text-6xl leading-[0.9] text-navy-deep md:text-8xl">
              CONTACT
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink md:text-lg">
              For media, partnerships, events and collaborations.
            </p>
            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                  Email
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
            <Field label="Name" id="name" type="text" placeholder="Your full name" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
            <div>
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.3em] text-ink-soft"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project, event or proposal…"
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-navy-deep px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-transform hover:-translate-y-0.5"
            >
              Send Message
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
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep px-6 pt-24 pb-10 text-white md:px-16">
      {/* Animated track line */}
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
              Slovenská reprezentantka v behu na 800 m.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Follow</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">Threads</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:ggajanova@gmail.com" className="hover:text-gold">
                  ggajanova@gmail.com
                </a>
              </li>
              <li><a href="#contact" className="hover:text-gold">Send Message</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex-row md:items-center">
          <span>© 2026 Gabriela Gajanová</span>
          <span>Bobrovec · Banská Bystrica · The World</span>
        </div>
      </div>
    </footer>
  );
}