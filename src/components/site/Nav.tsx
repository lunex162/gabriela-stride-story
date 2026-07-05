import { useEffect, useState } from "react";
import logoAsset from "@/assets/gaga-logo-transparent.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || hovered;

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-center px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="GAGA"
            className={`h-16 w-auto transition-all duration-500 md:h-20 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </a>
      </nav>
    </header>
  );
}
