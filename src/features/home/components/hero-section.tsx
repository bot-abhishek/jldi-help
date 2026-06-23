import Link from "next/link";
import { MapPin, Search, ShieldCheck, Star, Clock, Zap, Sparkles } from "lucide-react";

const POPULAR_SEARCHES = [
  "Emergency plumber",
  "Deep cleaning",
  "Wedding photographer",
  "Hindu priest",
  "Personal trainer",
  "Polish cleaner",
];

export function HeroSection() {
  return (
    <section className="hero-grad border-b border-border">
      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="pill chip-amber">
            <Sparkles className="size-3" />
            Now live across Ireland · 28 cities
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Whatever you need <span className="underline-grow">sorted</span>,<br />
            there&apos;s someone trusted nearby.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A leaking tap, a haircut, a maths tutor, a wedding priest. Open the app, share your
            location, and book a verified local pro in under a minute.
          </p>

          <div className="mt-8 card-soft p-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-2xl">
            <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
              <MapPin className="size-4 text-teal shrink-0" />
              <input
                defaultValue="Dublin 2 — D02 XY45"
                className="bg-transparent outline-none w-full text-sm font-medium py-2"
              />
            </div>
            <div className="hidden sm:block w-px bg-border my-2" />
            <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
              <Search className="size-4 text-muted-foreground shrink-0" />
              <input
                placeholder="Try 'plumber', 'mehndi artist', 'Polish priest'…"
                className="bg-transparent outline-none w-full text-sm py-2"
              />
            </div>
            <Link
              href="/browse"
              className="px-5 py-3 rounded-xl bg-ink text-cream text-sm font-semibold text-center hover:opacity-90"
            >
              Search
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="text-muted-foreground mr-1">Popular:</span>
            {POPULAR_SEARCHES.map((t) => (
              <Link key={t} href="/browse" className="pill chip-outline hover:bg-secondary">
                {t}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating vendor card collage */}
        <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
          <div className="absolute right-0 top-2 card-soft p-4 w-72 rotate-2">
            <div className="flex items-center gap-3">
              <div
                className="size-12 rounded-xl grid place-items-center text-cream font-display"
                style={{ background: "linear-gradient(135deg,#0d9488,#0b0f1a)" }}
              >
                AB
              </div>
              <div>
                <div className="font-semibold text-sm">Aoife Brennan</div>
                <div className="text-xs text-muted-foreground">Deep cleans · Dublin 6 · 1.2km</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <Star className="size-3 fill-amber text-amber" />
              <b>4.9</b> · 182 jobs · €32/hr
            </div>
            <div className="mt-2 flex gap-1.5">
              <span className="pill chip-teal">
                <ShieldCheck className="size-3" />
                Background-checked
              </span>
            </div>
          </div>

          <div className="absolute left-2 top-32 card-soft p-4 w-72 -rotate-3">
            <div className="flex items-center gap-3">
              <div
                className="size-12 rounded-xl grid place-items-center text-cream font-display"
                style={{ background: "linear-gradient(135deg,#7c3aed,#0b0f1a)" }}
              >
                PR
              </div>
              <div>
                <div className="font-semibold text-sm">Pandit Ramesh Sharma</div>
                <div className="text-xs text-muted-foreground">Hindu priest · Dublin 15</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <Star className="size-3 fill-amber text-amber" />
              <b>5.0</b> · Telugu, Hindi, Sanskrit
            </div>
            <div className="mt-2 flex gap-1.5">
              <span className="pill chip-amber">Available this Saturday</span>
            </div>
          </div>

          <div className="absolute right-4 bottom-0 card-soft p-4 w-72 rotate-1">
            <div className="flex items-center gap-3">
              <div
                className="size-12 rounded-xl grid place-items-center text-cream font-display"
                style={{ background: "linear-gradient(135deg,#e8920a,#0b0f1a)" }}
              >
                PK
              </div>
              <div>
                <div className="font-semibold text-sm">Patryk Kowalski</div>
                <div className="text-xs text-muted-foreground">Emergency plumber · 24/7</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <Clock className="size-3" />
              Replies in ~8 min · 241 jobs
            </div>
            <div className="mt-2 flex gap-1.5">
              <span className="pill chip-teal">
                <Zap className="size-3" />
                Available now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
