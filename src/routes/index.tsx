import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriela Gajanová | Olympionička | Bežkyňa na 800 m" },
      {
        name: "description",
        content:
          "Oficiálna stránka Gabriely Gajanovej — slovenskej olympioničky a medailistky z Majstrovstiev Európy v behu na 800 metrov.",
      },
      { property: "og:title", content: "Gabriela Gajanová | Olympionička 800 m" },
      {
        property: "og:description",
        content:
          "Dvojnásobná olympionička a strieborná medailistka z ME. Držiteľka slovenského rekordu na 800 m.",
      },
      { property: "og:locale", content: "sk_SK" },
      { property: "og:locale:alternate", content: "en_GB" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "sk", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage locale="sk" />;
}
