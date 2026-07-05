import { useEffect, useState } from "react";
import { useLocale, useT } from "@/i18n/LocaleContext";
import logoAsset from "@/assets/gaga-logo-transparent.png.asset.json";

export function Nav() {
  const t = useT();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#journey", label: t("nav.journey") },
    { href: "#achievements", label: t("nav.achievements") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg tracking-[0.25em] text-navy-deep">
          G · GAJANOVÁ
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <LangSwitch current={locale} />
          <a
            href="mailto:ggajanova@gmail.com"
            className="hidden text-xs uppercase tracking-[0.2em] text-navy-deep underline-offset-8 hover:underline lg:inline"
          >
            ggajanova@gmail.com
          </a>
        </div>
      </nav>
    </header>
  );
}

function LangSwitch({ current }: { current: "sk" | "en" }) {
  return (
    <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em]">
      <a
        href="/"
        className={
          current === "sk"
            ? "text-gold"
            : "text-ink-soft hover:text-navy transition-colors"
        }
      >
        SK
      </a>
      <span className="text-ink-soft/40">·</span>
      <a
        href="/en"
        className={
          current === "en"
            ? "text-gold"
            : "text-ink-soft hover:text-navy transition-colors"
        }
      >
        EN
      </a>
    </div>
  );
}
