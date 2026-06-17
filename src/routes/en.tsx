import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Gabriela Gajanová | Olympic Athlete | 800m Runner" },
      {
        name: "description",
        content:
          "Official website of Gabriela Gajanová, Slovak Olympic athlete and European Championship medalist specialising in the 800 metres.",
      },
      { property: "og:title", content: "Gabriela Gajanová | Olympic 800m Runner" },
      {
        property: "og:description",
        content:
          "Two-time Olympian and European Championship silver medalist. Slovak record holder in the 800 metres.",
      },
      { property: "og:locale", content: "en_GB" },
      { property: "og:locale:alternate", content: "sk_SK" },
      { property: "og:url", content: "/en" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "sk", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: EnIndex,
});

function EnIndex() {
  return <HomePage locale="en" />;
}
