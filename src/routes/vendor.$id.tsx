import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { Avatar } from "@/components/vendor-card";
import { findVendor, vendors } from "@/lib/mock-data";
import { Star, MapPin, Clock, ShieldCheck, MessageCircle, Calendar, Globe, CheckCircle2, ArrowLeft, Award } from "lucide-react";

export const Route = createFileRoute("/vendor/$id")({
  loader: ({ params }) => {
    const v = findVendor(params.id);
    if (!v) throw notFound();
    return { vendor: v };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.vendor.name} — ${loaderData?.vendor.tagline} | JaldiHelp` },
      { name: "description", content: loaderData?.vendor.bio ?? "" },
    ],
  }),
  component: VendorPage,
});

const fakeReviews = [
  { name: "Saoirse M.", date: "Mar 2026", rating: 5, body: "Absolutely brilliant. Booked late Sunday, here Monday 9am sharp. Place was sparkling." },
  { name: "Diarmuid O.", date: "Feb 2026", rating: 5, body: "Communicated really clearly, fair price, no hidden extras. Will book again." },
  { name: "Kamila W.", date: "Feb 2026", rating: 4, body: "Lovely service, only knocked a star for arriving 15 min late — traffic to be fair." },
  { name: "Adaeze N.", date: "Jan 2026", rating: 5, body: "Honestly the best in Dublin. Cannot recommend highly enough." },
];

function VendorPage() {
  const { vendor: v } = Route.useLoaderData();
  const related = vendors.filter(x => x.id !== v.id && x.category === v.category).slice(0,3);

  return (
    <PageLayout>
      <div className="container-x py-8">
        <Link to="/browse" className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5"/>Back to results</Link>
      </div>

      <section className="container-x grid lg:grid-cols-[1fr_360px] gap-10 pb-16">
        <div>
          {/* HEADER */}
          <div className="card-soft p-6 md:p-8">
            <div className="flex items-start gap-5">
              <Avatar initials={v.initials} color={v.color} size={88}/>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="pill chip-teal"><ShieldCheck className="size-3"/>{v.verified.replace("_"," ").toLowerCase()}</span>
                  {v.badges.map((b: string) => <span key={b} className="pill chip-outline">{b}</span>)}
                </div>
                <h1 className="font-display text-4xl md:text-5xl leading-tight">{v.name}</h1>
                <p className="text-muted-foreground mt-1">{v.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-1"><Star className="size-3.5 fill-amber text-amber"/><b>{v.rating}</b> <span className="text-muted-foreground">({v.reviewCount} reviews)</span></span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-3.5"/>{v.area}, {v.city} · {v.distanceKm} km</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="size-3.5"/>Replies in ~{v.responseMins} min</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><Globe className="size-3.5"/>{v.languages.join(", ")}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center border-t border-border pt-5">
              <Stat label="Trust score" value={v.trustScore + "/100"} />
              <Stat label="Years experience" value={v.yearsExperience + ""} />
              <Stat label="Jobs completed" value={v.jobsCompleted + ""} />
            </div>
          </div>

          {/* ABOUT */}
          <Section title="About">
            <p className="text-base leading-relaxed">{v.bio}</p>
          </Section>

          {/* SERVICES */}
          <Section title="Services & pricing">
            <div className="space-y-3">
              {v.services.map((s: typeof v.services[number]) => (
                <div key={s.name} className="card-soft p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-muted-foreground">Approx. {s.duration}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-display text-xl num-pill">€{s.price}<span className="text-xs text-muted-foreground font-sans">{s.unit}</span></div>
                    <Link to="/book/$id" params={{id:v.id}} className="pill chip-ink">Book</Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* VERIFICATION */}
          <Section title="Verification & trust">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Government ID verified", "Background check (Garda Vetting) on file",
                "Trade credential verified", "Insurance certificate on file",
                "Email & phone verified", "Address verified",
              ].map(x => (
                <div key={x} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-success"/>{x}</div>
              ))}
            </div>
          </Section>

          {/* REVIEWS */}
          <Section title={`Reviews · ${v.reviewCount}`}>
            <div className="card-soft p-5 mb-4 flex items-center gap-6">
              <div className="font-display text-5xl num-pill">{v.rating}</div>
              <div className="flex-1">
                <div className="flex gap-0.5 mb-1">{Array.from({length:5}).map((_,i)=><Star key={i} className={"size-4 " + (i<Math.round(v.rating)?"fill-amber text-amber":"text-border")}/>)}</div>
                <div className="text-xs text-muted-foreground">Based on {v.reviewCount} verified bookings</div>
              </div>
              <Award className="size-10 text-amber hidden sm:block"/>
            </div>
            <div className="space-y-4">
              {fakeReviews.map((r,i) => (
                <div key={i} className="card-soft p-5">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                  <div className="flex gap-0.5 my-2">{Array.from({length:r.rating}).map((_,i)=><Star key={i} className="size-3.5 fill-amber text-amber"/>)}</div>
                  <p className="text-sm">{r.body}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* STICKY BOOKING */}
        <aside>
          <div className="card-soft p-6 sticky top-20">
            <div className="text-sm text-muted-foreground">From</div>
            <div className="font-display text-3xl num-pill">€{v.priceFrom} <span className="text-sm text-muted-foreground font-sans">{v.priceUnit}</span></div>

            <div className="mt-4 pill chip-amber">Next available: {v.availability === "today" ? "Today" : v.availability === "this-week" ? "This week" : "Next week"}</div>

            <div className="mt-5 space-y-2">
              <Link to="/book/$id" params={{id:v.id}} className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ink text-cream font-semibold text-sm hover:opacity-90"><Calendar className="size-4"/>Request to book</Link>
              <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-secondary"><MessageCircle className="size-4"/>Send a message</button>
            </div>

            <div className="mt-5 text-xs text-muted-foreground space-y-1.5">
              <div className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-teal"/>Payment held in escrow until job is done</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-success"/>Free cancellation up to 24h</div>
              <div className="flex items-center gap-2"><Award className="size-3.5 text-amber"/>Backed by JaldiHelp Guarantee</div>
            </div>
          </div>
        </aside>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-x pb-20">
          <h2 className="font-display text-3xl mb-6">Similar pros nearby</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map(r => (
              <Link key={r.id} to="/vendor/$id" params={{id:r.id}} className="card-soft p-5 flex items-center gap-3">
                <Avatar initials={r.initials} color={r.color} size={48}/>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{r.tagline}</div>
                  <div className="text-xs mt-1 num-pill">⭐ {r.rating} · €{r.priceFrom}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl num-pill">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}
