import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useLocale, useT } from "@/i18n/LocaleContext";
import { loadWorldRanking, WORLD_RANKING_URL, type WorldRanking } from "@/lib/worldRanking";

const ease = [0.16, 1, 0.3, 1] as const;

export function useWorldRanking() {
  const [ranking, setRanking] = useState<WorldRanking>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadWorldRanking().then((r) => {
      setRanking(r);
      setLoading(false);
    });
  }, []);
  return { ranking, loading };
}

export function formatRankingDate(date: string, locale: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString(locale === "sk" ? "sk-SK" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ============================================================
 *  WORLD RANKING — veľké aktuálne poradie vľavo, celá tabuľka
 *  top 100 z World Athletics vpravo, Gabriela zvýraznená a
 *  tabuľka sa na ňu sama odroluje.
 * ============================================================ */
export function RankingSection() {
  const t = useT();
  const locale = useLocale();
  const { ranking, loading } = useWorldRanking();
  const listRef = useRef<HTMLDivElement | null>(null);
  const meRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const me = meRef.current;
    if (!list || !me) return;
    // Posun len vnútri tabuľky, stránka sa nehýbe.
    list.scrollTop = me.offsetTop - list.clientHeight / 2 + me.clientHeight / 2;
  }, [ranking]);

  const date = ranking ? formatRankingDate(ranking.date, locale) : null;

  return (
    <section
      id="ranking"
      className="relative isolate overflow-hidden bg-[#15100B] px-5 py-20 text-white md:px-12 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 15% 30%, rgba(214,189,159,0.16) 0%, transparent 60%), radial-gradient(40% 50% at 90% 90%, rgba(214,189,159,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1500px] gap-14 md:grid-cols-12 md:items-center md:gap-16">
        {/* LEFT — big current position */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[--gold-soft]">
              <span className="h-px w-10 bg-[--gold-soft]" /> {t("ranking.eyebrow")}
            </div>
            <h2 className="mt-6 font-display leading-[0.92] tracking-tight">
              <span className="block text-[11vw] sm:text-[7vw] md:text-[4.2vw] xl:text-[4.6rem]">
                {t("ranking.title.line1")}
              </span>
              <span
                className="block font-serif-display italic text-[--gold-soft] text-[11vw] sm:text-[7vw] md:text-[4.2vw] xl:text-[4.6rem]"
                style={{ marginTop: "-0.06em" }}
              >
                {t("ranking.title.line2")}
              </span>
            </h2>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="mt-10 flex items-end gap-6"
          >
            <span
              className="font-display leading-[0.8] tracking-tight"
              style={{
                fontSize: "clamp(7rem, 16vw, 13rem)",
                textShadow: "0 18px 60px rgba(0,0,0,0.5)",
              }}
            >
              {ranking?.rank ? (
                <>
                  <span className="text-[--gold-soft]">#</span>
                  {ranking.rank}
                </>
              ) : (
                <span className="text-white/20">#—</span>
              )}
            </span>
            {ranking?.score ? (
              <span className="mb-3 flex flex-col gap-1">
                <span className="font-display text-4xl leading-none text-white md:text-5xl">
                  {ranking.score}
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/55">
                  {t("ranking.points")}
                </span>
              </span>
            ) : null}
          </motion.div>

          <Reveal delay={200}>
            <p className="mt-8 text-[13px] text-white/55">
              {date ? `${t("ranking.updated")} ${date} · World Athletics` : "World Athletics"}
            </p>
            <a
              href={WORLD_RANKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/[0.04] px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-white backdrop-blur transition-colors hover:border-[--gold-soft] hover:text-[--gold-soft]"
            >
              {t("ranking.full")}
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        {/* RIGHT — full table */}
        <Reveal delay={150} className="md:col-span-7">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur">
            <div className="grid grid-cols-[2rem_1fr_2.5rem_2.75rem] gap-2.5 md:gap-3 border-b border-white/10 px-4 py-4 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.35em] text-white/50 md:grid-cols-[4.5rem_1fr_5rem_5rem] md:px-8">
              <span>{t("ranking.col.rank")}</span>
              <span>{t("ranking.col.athlete")}</span>
              <span>{t("ranking.col.nat")}</span>
              <span className="text-right">{t("ranking.col.score")}</span>
            </div>
            <div
              ref={listRef}
              className="relative max-h-[460px] overflow-y-auto md:max-h-[540px] [scrollbar-color:rgba(214,189,159,0.4)_transparent] [scrollbar-width:thin]"
            >
              {loading ? (
                <ul aria-hidden>
                  {Array.from({ length: 9 }, (_, i) => (
                    <li key={i} className="border-b border-white/5 px-5 py-4 md:px-8">
                      <span className="block h-4 w-2/3 animate-pulse rounded bg-white/10" />
                    </li>
                  ))}
                </ul>
              ) : ranking ? (
                <ul>
                  {ranking.rows.map((r) => (
                    <li
                      key={r.rank + r.name}
                      ref={r.isGabriela ? meRef : undefined}
                      className={`grid grid-cols-[2rem_1fr_2.5rem_2.75rem] items-center gap-2.5 md:gap-3 border-b px-4 py-3.5 md:grid-cols-[4.5rem_1fr_5rem_5rem] md:px-8 ${
                        r.isGabriela
                          ? "border-[--gold-soft]/40 bg-[rgba(214,189,159,0.16)] text-[--gold-soft]"
                          : "border-white/5 text-white/80"
                      }`}
                    >
                      <span className="font-display text-xl leading-none md:text-2xl">
                        {r.rank}
                      </span>
                      <span
                        className={`truncate text-[14px] md:text-[15px] ${r.isGabriela ? "font-semibold" : ""}`}
                      >
                        {r.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.1em] text-current/70 md:text-[11px] md:tracking-[0.2em]">
                        {r.nat}
                      </span>
                      <span className="text-right font-display text-xl leading-none md:text-2xl">
                        {r.score}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-8 py-10 text-[14px] text-white/60">{t("ranking.unavailable")}</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
