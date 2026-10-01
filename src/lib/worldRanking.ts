import { createServerFn } from "@tanstack/react-start";

export const WORLD_RANKING_URL = "https://worldathletics.org/world-rankings/800m/women";
const ATHLETE_PATH = "/athletes/slovak-republic/gabriela-gajanova-14593394";

export type WorldRanking = { rank: number; date: string } | null;

/*
  World Athletics nemá verejné API, ale tabuľka rebríčka je v HTML zo servera.
  Stiahne sa na serveri (prehliadač by narazil na CORS) a podrží sa 6 hodín,
  rebríček sa aj tak aktualizuje raz týždenne (v utorok).
*/
const TTL = 6 * 60 * 60 * 1000;
let cache: { at: number; value: WorldRanking } | null = null;

export const getWorldRanking = createServerFn({ method: "GET" }).handler(
  async (): Promise<WorldRanking> => {
    if (cache && Date.now() - cache.at < TTL) return cache.value;
    try {
      const res = await fetch(WORLD_RANKING_URL, {
        headers: { "user-agent": "Mozilla/5.0 (gabrielagajanova.sk)" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();

      const row = html.indexOf(`data-athlete-url="${ATHLETE_PATH}"`);
      if (row === -1) throw new Error("athlete not in ranking");
      const rankMatch = html.slice(row, row + 600).match(/data-th="Rank">\s*(\d+)/);
      if (!rankMatch) throw new Error("rank not found");
      const dateMatch = html.match(/rankDate":"(\d{4}-\d{2}-\d{2})"/);

      const value = { rank: Number(rankMatch[1]), date: dateMatch?.[1] ?? "" };
      cache = { at: Date.now(), value };
      return value;
    } catch (err) {
      console.error("[worldRanking]", err);
      // Pri chybe sa vráti posledná známa hodnota, inak nič (zobrazí sa len odkaz).
      return cache?.value ?? null;
    }
  },
);
