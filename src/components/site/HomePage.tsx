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
          background: `
            radial-gradient(80% 70% at 10% 10%, #fce7e7 0%, transparent 60%),
            radial-gradient(70% 80% at 90% 30%, #fff9ef 0%, transparent 55%),
            radial-gradient(75% 70% at 40% 55%, #fce7e7 0%, transparent 50%),
            radial-gradient(80% 75% at 80% 85%, #fff9ef 0%, transparent 55%),
            radial-gradient(70% 70% at 20% 90%, #fce7e7 0%, transparent 50%),
            #fff9ef
          `,
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
