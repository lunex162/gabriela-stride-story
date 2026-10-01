import { useEffect, useState, type ReactNode } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n/LocaleContext";
import { INSTAGRAM_FEED_URL, SOCIALS } from "@/lib/socials";
import action1 from "@/assets/photos/action-1.jpg";
import action2 from "@/assets/photos/action-2.jpg";
import action3 from "@/assets/photos/action-3.jpg";
import action4 from "@/assets/photos/action-4.jpg";
import parisRace from "@/assets/photos/paris-race.jpg";
import indoorRace from "@/assets/photos/indoor-race.jpg";

function ThreadsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
    </svg>
  );
}

const ICONS: Record<string, (p: { className?: string }) => ReactNode> = {
  Instagram: (p) => <Instagram strokeWidth={1.5} {...p} />,
  Facebook: (p) => <Facebook strokeWidth={1.5} {...p} />,
  Threads: (p) => <ThreadsIcon {...p} />,
};

type Post = { href: string; image: string; caption: string };
type BeholdPost = {
  permalink?: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  caption?: string;
  prunedCaption?: string;
  sizes?: { medium?: { mediaUrl?: string } };
};

const INSTAGRAM_URL = SOCIALS[0].url;
const FALLBACK_POSTS: Post[] = [parisRace, action1, indoorRace, action4, action2, action3].map(
  (image) => ({ href: INSTAGRAM_URL, image, caption: "" }),
);

/* Behold.so JSON feed → jednotný tvar. Pri chybe ostanú záložné fotky. */
function useInstagramPosts(): Post[] {
  const [posts, setPosts] = useState<Post[]>(FALLBACK_POSTS);
  useEffect(() => {
    if (!INSTAGRAM_FEED_URL) return;
    fetch(INSTAGRAM_FEED_URL)
      .then((r) => r.json())
      .then((data) => {
        const list: BeholdPost[] = (Array.isArray(data) ? data : data.posts) ?? [];
        const mapped: Post[] = list
          .map((p: BeholdPost) => ({
            href: p.permalink ?? "",
            image:
              p.sizes?.medium?.mediaUrl ??
              (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl) ??
              p.thumbnailUrl ??
              "",
            caption: p.prunedCaption ?? p.caption ?? "",
          }))
          .filter((p: Post) => p.href && p.image)
          .slice(0, 6);
        if (mapped.length) setPosts(mapped);
      })
      .catch(() => {});
  }, []);
  return posts;
}

/* ============================================================
 *  SOCIALS — tri veľké karty sietí + mriežka príspevkov
 * ============================================================ */
export function SocialsSection() {
  const t = useT();
  const posts = useInstagramPosts();

  return (
    <section
      id="socials"
      className="relative overflow-hidden px-5 py-16 text-ink md:px-12 md:py-24"
    >
      <div className="relative mx-auto max-w-[1500px]">
        <Reveal className="text-center">
          <h2 className="font-display leading-[0.92] tracking-tight text-ink">
            <span className="block text-[11vw] sm:text-[7vw] md:text-[4.2vw] xl:text-[4.6rem]">
              {t("socials.title.line1")}
            </span>
            <span
              className="block font-serif-display italic text-[--gold] text-[9vw] sm:text-[6vw] md:text-[3.4vw] xl:text-[3.8rem]"
              style={{ marginTop: "-0.04em" }}
            >
              @gabigajanova
            </span>
          </h2>
        </Reveal>

        {/* Network cards */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.label];
            return (
              <Reveal key={s.label} delay={100 + i * 100}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-[24px] bg-[#15100B] px-6 py-6 text-white shadow-[0_18px_60px_-30px_rgba(20,15,10,0.45)] transition-colors duration-300 hover:bg-[#221a12] md:px-8 md:py-7"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[--gold-soft]/40 text-[--gold-soft] transition-colors duration-300 group-hover:border-[--gold-soft]">
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/55">
                      {s.label}
                    </span>
                    <span className="truncate font-display text-xl tracking-wide md:text-2xl">
                      {s.handle}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-[--gold-soft] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Post grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-6 md:gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.image + i} delay={150 + i * 60}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.caption || `Instagram @gabigajanova`}
                className="group relative block aspect-square overflow-hidden rounded-[18px] bg-[#15100B]"
              >
                <img
                  src={p.image}
                  alt={p.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#15100B]/0 text-white opacity-0 transition-all duration-300 group-hover:bg-[#15100B]/45 group-hover:opacity-100">
                  <Instagram strokeWidth={1.5} className="h-7 w-7" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
