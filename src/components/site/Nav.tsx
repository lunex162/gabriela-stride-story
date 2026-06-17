import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#journey", label: "Journey" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg tracking-[0.25em] text-navy-deep">
          G · GAJANOVÁ
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-navy"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:ggajanova@gmail.com"
          className="hidden text-xs uppercase tracking-[0.2em] text-navy-deep underline-offset-8 hover:underline md:inline"
        >
          ggajanova@gmail.com
        </a>
      </nav>
    </header>
  );
}