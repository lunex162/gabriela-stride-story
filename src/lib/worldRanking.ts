import { createServerFn } from "@tanstack/react-start";

export const WORLD_RANKING_URL = "https://worldathletics.org/world-rankings/800m/women";
const ATHLETE_PATH = "/athletes/slovak-republic/gabriela-gajanova-14593394";

export type RankingRow = {
  rank: number;
  name: string;
  nat: string;
  score: number;
  isGabriela: boolean;
};

export type WorldRanking = {
  date: string;
  rank: number | null;
  score: number | null;
  rows: RankingRow[];
} | null;

/*
  World Athletics nemá verejné API, ale tabuľka rebríčka (top 100) je v HTML zo servera.
  Stiahne sa na serveri (prehliadač by narazil na CORS) a podrží sa 6 hodín,
  rebríček sa aj tak aktualizuje raz týždenne (v utorok).
*/
const TTL = 6 * 60 * 60 * 1000;
let cache: { at: number; value: WorldRanking } | null = null;

const decode = (s: string) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

function parse(html: string): WorldRanking {
  const rows: RankingRow[] = [];
  const rowRe = /<tr type="button"[^>]*data-athlete-url="([^"]*)"[^>]*>([\s\S]*?)<\/tr>/g;
  for (const [, url, body] of html.matchAll(rowRe)) {
    const cell = (name: string) =>
      decode(body.match(new RegExp(`data-th="${name}">([\\s\\S]*?)</td>`))?.[1] ?? "");
    const rank = Number(cell("Rank"));
    if (!rank) continue;
    rows.push({
      rank,
      name: cell("Competitor"),
      nat: cell("Nat"),
      score: Number(cell("score")),
      isGabriela: url === ATHLETE_PATH,
    });
  }
  if (rows.length === 0) throw new Error("ranking table not found");
  const me = rows.find((r) => r.isGabriela);
  return {
    date: html.match(/rankDate":"(\d{4}-\d{2}-\d{2})"/)?.[1] ?? "",
    rank: me?.rank ?? null,
    score: me?.score ?? null,
    rows,
  };
}

export const getWorldRanking = createServerFn({ method: "GET" }).handler(
  async (): Promise<WorldRanking> => {
    if (cache && Date.now() - cache.at < TTL) return cache.value;
    try {
      const res = await fetch(WORLD_RANKING_URL, {
        headers: { "user-agent": "Mozilla/5.0 (gabrielagajanova.sk)" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const value = parse(await res.text());
      cache = { at: Date.now(), value };
      return value;
    } catch (err) {
      console.error("[worldRanking]", err);
      // Pri chybe sa vráti posledná známa hodnota, inak nič (zobrazí sa len odkaz).
      return cache?.value ?? null;
    }
  },
);

// Odznak v sekcii O mne aj sekcia Rebríček si zdieľajú jedno volanie.
let clientRequest: Promise<WorldRanking> | null = null;
export function loadWorldRanking(): Promise<WorldRanking> {
  clientRequest ??= getWorldRanking().catch(() => {
    clientRequest = null;
    return null;
  });
  return clientRequest;
}
