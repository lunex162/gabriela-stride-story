import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  About,
  Achievements,
  Journey,
  Gallery,
  EightHundred,
  Partners,
  Social,
  Quote,
  Contact,
  Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriela Gajanová | Olympic Athlete | 800m Runner" },
      {
        name: "description",
        content:
          "Official website of Gabriela Gajanová, Slovak Olympic athlete and European Championship medalist specializing in the 800 metres.",
      },
      { property: "og:title", content: "Gabriela Gajanová | Olympic 800m Runner" },
      {
        property: "og:description",
        content:
          "Two-time Olympian and European Championship silver medalist. Slovak record holder in the 800 metres.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Journey />
      <Gallery />
      <EightHundred />
      <Partners />
      <Social />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
