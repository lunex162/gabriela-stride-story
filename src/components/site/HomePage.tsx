import { LocaleProvider } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";
import { Loader } from "./Loader";
import { Nav } from "./Nav";
import {
  Hero,
  About,
  Achievements,
  Journey,
  Partners,
  Quote,
  Contact,
  Footer,
} from "./sections";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <main
        className="relative text-foreground"
        style={{
          background:
            "linear-gradient(180deg, #fce7e7 0%, #fff9ef 28%, #fce7e7 52%, #fff9ef 76%, #fce7e7 100%)",
        }}
      >
        <Loader />
        <Nav />
        <Hero />
        <About />
        <Journey />
        <Achievements />
        <Quote />
        <Partners />
        <Contact />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
