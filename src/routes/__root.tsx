import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gabriela Gajanová | Olympionička | Bežkyňa na 800 m" },
      {
        name: "description",
        content:
          "Official website of Gabriela Gajanová, Slovak Olympic athlete and European Championship medalist specializing in the 800 metres.",
      },
      { name: "author", content: "Gabriela Gajanová" },
      { property: "og:title", content: "Gabriela Gajanová | Olympionička | Bežkyňa na 800 m" },
      {
        property: "og:description",
        content:
          "Slovak Olympian, European Championship silver medalist, national record holder in the 800 metres.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gabriela Gajanová" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gabriela Gajanová | Olympionička | Bežkyňa na 800 m" },
      { name: "description", content: "Gabriela Gajanová - Slovenská reprezentantka v behu na 800 metrov, dvojnásobná olympionička a strieborná medailistka z Majstrovstiev Európy 2024 v Ríme." },
      { property: "og:description", content: "Gabriela Gajanová - Slovenská reprezentantka v behu na 800 metrov, dvojnásobná olympionička a strieborná medailistka z Majstrovstiev Európy 2024 v Ríme." },
      { name: "twitter:description", content: "Gabriela Gajanová - Slovenská reprezentantka v behu na 800 metrov, dvojnásobná olympionička a strieborná medailistka z Majstrovstiev Európy 2024 v Ríme." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/aqxcC05253ULK5mUIJGmnrzcEBa2/social-images/social-1783294376769-250918_200610sm205528.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/aqxcC05253ULK5mUIJGmnrzcEBa2/social-images/social-1783294376769-250918_200610sm205528.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          additionalType: "https://schema.org/Athlete",
          name: "Gabriela Gajanová",
          nationality: "Slovak",
          jobTitle: "Olympic Middle-Distance Runner",
          sport: "Athletics — 800 metres",
          memberOf: [
            { "@type": "SportsTeam", name: "Slovak National Athletics Team" },
            { "@type": "SportsTeam", name: "VŠC Dukla Banská Bystrica" },
            { "@type": "SportsTeam", name: "TeamLouis" },
          ],
          award: [
            "European Championships Silver Medal",
            "Slovak National Record 800m — 1:58.22",
            "Olympic Games Tokyo 2021",
            "Olympic Games Paris 2024",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
