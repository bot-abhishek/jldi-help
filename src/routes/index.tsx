import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { VendorCard } from "@/components/vendor-card";
import { categories, communities, vendors, stats, testimonials, howItWorks } from "@/lib/mock-data";
import { MapPin, Search, ShieldCheck, Sparkles, ArrowRight, Star, Clock, Zap, Globe2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JaldiHelp — Local services in Ireland, sorted in minutes" },
      { name: "description", content: "From a leaking tap to a wedding priest — find a verified local pro nearby and book in under a minute." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = vendors.slice(0, 6);
  return (
    <PageLayout>
      {/* HERO */}
      <section className="hero-grad border-b border-border">
        <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="pill chip-amber"><Sparkles className="size-3"/>Now live across Ireland · 28 cities</span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Whatever you need <span className="underline-grow">sorted</span>,<br/>
              there's someone trusted nearby.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A leaking tap, a haircut, a maths tutor, a wedding priest. Open the app, share your location, and book a verified local pro in under a minute.
            </p>

            {/* Search bar */}
            <div className="mt-8 card-soft p-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-2xl">
              <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
                <MapPin className="size-4 text-teal shrink-0"/>
                <input defaultValue="Dublin 2 — D02 XY45" className="bg-transparent outline-none w-full text-sm font-medium py-2"/>
              </div>
              <div className="hidden sm:block w-px bg-border my-2"/>
              <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
                <Search className="size-4 text-muted-foreground shrink-0"/>
                <input placeholder="Try 'plumber', 'mehndi artist', 'Polish priest'…" className="bg-transparent outline-none w-full text-sm py-2"/>
              </div>
              <Link to="/browse" className="px-5 py-3 rounded-xl bg-ink text-cream text-sm font-semibold text-center hover:opacity-90">Search</Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="text-muted-foreground mr-1">Popular:</span>
              {["Emergency plumber","Deep cleaning","Wedding photographer","Hindu priest","Personal trainer","Polish cleaner"].map(t =>
                <Link key={t} to="/browse" className="pill chip-outline hover:bg-secondary">{t}</Link>
              )}
            </div>
          </div>

          {/* Floating card collage */}
          <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
            <div className="absolute right-0 top-2 card-soft p-4 w-72 rotate-2">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl grid place-items-center text-cream font-display" style={{background:"linear-gradient(135deg,#0d9488,#0b0f1a)"}}>AB</div>
                <div>
                  <div className="font-semibold text-sm">Aoife Brennan</div>
                  <div className="text-xs text-muted-foreground">Deep cleans · Dublin 6 · 1.2km</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs"><Star className="size-3 fill-amber text-amber"/><b>4.9</b> · 182 jobs · €32/hr</div>
              <div className="mt-2 flex gap-1.5"><span className="pill chip-teal"><ShieldCheck className="size-3"/>Background-checked</span></div>
            </div>
            <div className="absolute left-2 top-32 card-soft p-4 w-72 -rotate-3">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl grid place-items-center text-cream font-display" style={{background:"linear-gradient(135deg,#7c3aed,#0b0f1a)"}}>PR</div>
                <div>
                  <div className="font-semibold text-sm">Pandit Ramesh Sharma</div>
                  <div className="text-xs text-muted-foreground">Hindu priest · Dublin 15</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs"><Star className="size-3 fill-amber text-amber"/><b>5.0</b> · Telugu, Hindi, Sanskrit</div>
              <div className="mt-2 flex gap-1.5"><span className="pill chip-amber">Available this Saturday</span></div>
            </div>
            <div className="absolute right-4 bottom-0 card-soft p-4 w-72 rotate-1">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl grid place-items-center text-cream font-display" style={{background:"linear-gradient(135deg,#e8920a,#0b0f1a)"}}>PK</div>
                <div>
                  <div className="font-semibold text-sm">Patryk Kowalski</div>
                  <div className="text-xs text-muted-foreground">Emergency plumber · 24/7</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs"><Clock className="size-3"/>Replies in ~8 min · 241 jobs</div>
              <div className="mt-2 flex gap-1.5"><span className="pill chip-teal"><Zap className="size-3"/>Available now</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: stats.vendors, l: "Verified vendors" },
            { v: stats.cities + "", l: "Cities live in Ireland" },
            { v: stats.bookings, l: "Bookings completed" },
            { v: stats.categories + "", l: "Top-level categories" },
          ].map(s => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl num-pill">{s.v}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="pill chip-teal">Browse by category</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Ten ways to get something done.</h2>
          </div>
          <Link to="/browse" className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">See all categories <ArrowRight className="size-4"/></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map(c => (
            <Link key={c.slug} to="/category/$slug" params={{slug:c.slug}} className="card-soft p-5 flex flex-col gap-2 hover:-translate-y-0.5 transition-transform">
              <div className="text-3xl">{c.icon}</div>
              <div className="font-display text-lg leading-tight">{c.name}</div>
              <div className="text-xs text-muted-foreground line-clamp-2">{c.blurb}</div>
              <div className="text-xs num-pill text-teal mt-auto pt-2">{c.count.toLocaleString()} vendors</div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMMUNITIES */}
      <section className="bg-sand/60 border-y border-border">
        <div className="container-x py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="pill chip-amber"><Globe2 className="size-3"/>Browse by community</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3">Services for your community, across every category.</h2>
              <p className="mt-4 text-muted-foreground">A Polish-speaking plumber, a Polish delicatessen caterer, a Polish-speaking hairdresser — surfaced together. The category-blind discovery layer no other marketplace has.</p>
              <Link to="/communities" className="mt-6 inline-flex items-center gap-1 font-semibold text-sm hover:gap-2 transition-all">See all communities <ArrowRight className="size-4"/></Link>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {communities.map(c => (
                <Link key={c.slug} to="/community/$slug" params={{slug:c.slug}} className="card-soft p-4 flex items-center gap-3 hover:bg-card">
                  <div className="text-3xl">{c.flag}</div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm">Services for {c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.vendorCount} vendors · {c.primaryLanguage}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VENDORS */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="pill chip-teal">Trusted nearby</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Top-rated pros within 5 km.</h2>
          </div>
          <Link to="/browse" className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="size-4"/></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(v => <VendorCard key={v.id} vendor={v}/>)}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ink-grad rounded-3xl mx-4 md:mx-8 my-10">
        <div className="container-x py-20">
          <div className="max-w-2xl">
            <span className="pill" style={{background:"rgba(255,255,255,.1)", color:"#e6fbf8"}}>How it works</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Four steps from "I need someone" to "it's done."</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map(s => (
              <div key={s.n} className="border-t border-white/20 pt-5">
                <div className="font-display text-5xl num-pill opacity-60">0{s.n}</div>
                <div className="mt-2 font-display text-xl text-cream">{s.title}</div>
                <p className="mt-2 text-sm" style={{color:"rgba(230,251,248,.7)"}}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20">
        <div className="mb-10">
          <span className="pill chip-amber">From the neighbourhood</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Real bookings. Real reviews.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="card-soft p-6">
              <div className="flex gap-0.5 mb-3">{Array.from({length:t.rating}).map((_,i)=><Star key={i} className="size-4 fill-amber text-amber"/>)}</div>
              <p className="font-display text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-5 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">Booked {t.vendor}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENDOR CTA */}
      <section className="container-x pb-24">
        <div className="card-soft p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center" style={{background:"linear-gradient(135deg, var(--amber-soft) 0%, var(--teal-soft) 100%)"}}>
          <div>
            <span className="pill chip-ink">For vendors</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Get found by every customer near you.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">List for free. Pay only when you get booked — a flat 18% commission, no monthly fees, no contracts. Your reputation, your prices, your calendar.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/for-vendors" className="px-6 py-3.5 rounded-full bg-ink text-cream font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90">Start listing — it's free <ArrowRight className="size-4"/></Link>
            <Link to="/vendor-dashboard" className="text-sm font-semibold underline-offset-4 hover:underline">See a vendor dashboard →</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
