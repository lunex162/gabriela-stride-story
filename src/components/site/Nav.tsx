import { useEffect, useState } from "react";
import { useLocale, useT } from "@/i18n/LocaleContext";
import logoAsset from "@/assets/gaga-logo-transparent.png.asset.json";

export function Nav() {
  const t = useT();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-transparent">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="GAGA"
            className={`h-16 w-auto transition-all duration-500 md:h-20 ${
              scrolled ? "opacity-0" : "brightness-0 invert"
            }`}
          />
        </a>
        <ul
          className={`hidden gap-8 transition-all duration-500 md:flex ${
            scrolled ? "pointer-events-none opacity-0" : ""
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-gold-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-4 transition-all duration-500 ${
              scrolled ? "pointer-events-none opacity-0" : ""
            }`}
          >
            <LangSwitch current={locale} scrolled={scrolled} />
            <a
              href="mailto:ggajanova@gmail.com"
              className={`hidden text-xs uppercase tracking-[0.2em] underline-offset-8 hover:underline lg:inline ${
                scrolled ? "text-navy-deep" : "text-white/80"
              }`}
            >
              ggajanova@gmail.com
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            <span
              className={`block h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mb-4 rounded-2xl border border-white/20 bg-white/[0.06] px-6 py-5 backdrop-blur-xl">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-gold-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ current, scrolled }: { current: "sk" | "en"; scrolled: boolean }) {
  return (
    <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em]">
      <a
        href="/"
        className={
          current === "sk"
            ? "text-gold"
            : scrolled
              ? "text-ink-soft hover:text-navy transition-colors"
              : "text-white/80 hover:text-gold-soft transition-colors"
        }
      >
        SK
      </a>
      <span className={scrolled ? "text-ink-soft/40" : "text-white/40"}>·</span>
      <a
        href="/en"
        className={
          current === "en"
            ? "text-gold"
            : scrolled
              ? "text-ink-soft hover:text-navy transition-colors"
              : "text-white/80 hover:text-gold-soft transition-colors"
        }
      >
        EN
      </a>
    </div>
  );
}
