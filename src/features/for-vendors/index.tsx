import Link from "next/link";
import { ArrowRight, Check, TrendingUp, ShieldCheck, Calendar, CreditCard, Star, Zap } from "lucide-react";

const EARNINGS = [
  { c: "Cleaning", k: "€2,400 / mo", w: "70%" },
  { c: "Plumbing", k: "€4,800 / mo", w: "92%" },
  { c: "Beauty & Wellness", k: "€3,100 / mo", w: "78%" },
  { c: "Religious & Cultural", k: "€1,900 / mo", w: "55%" },
  { c: "Photography & Events", k: "€3,800 / mo", w: "85%" },
];

const FEATURES = [
  { i: TrendingUp, t: "Smart placement", b: "Our matching engine ranks you by trust, response time and proximity — not who pays most." },
  { i: Calendar, t: "Calendar that's yours", b: "Sync with Google or Apple Calendar. Block off times in one tap. Auto-decline outside hours." },
  { i: CreditCard, t: "Get paid fast", b: "Payments land in your account within 2 business days of completion. Direct to your IBAN." },
  { i: ShieldCheck, t: "Verification that helps", b: "Pass our verification once — wear the badge forever. Background-checked vendors get 3× more bookings." },
  { i: Star, t: "A portable reputation", b: "Your reviews are yours. Embed them on your own site, share via WhatsApp, take them with you." },
  { i: Zap, t: "Instant-book or request", b: "Choose per service whether customers can book directly or have to request first." },
];

const TIERS = [
  {
    tier: "Free to list", price: "€0", sub: "No monthly fee",
    lines: ["List unlimited services", "Profile + reviews", "Customer messaging", "Up to 5 active bookings/mo"],
    cta: "Start free", featured: false,
  },
  {
    tier: "Pay-as-you-go", price: "18%", sub: "per completed booking",
    lines: ["Everything in Free", "Unlimited bookings", "Escrow payments", "JaldiHelp Guarantee for customers", "Featured placement boosts"],
    cta: "Get started", featured: true,
  },
  {
    tier: "Pro", price: "€29 /mo", sub: "+ reduced 12% commission",
    lines: ["Everything in PAYG", "Lower 12% commission", "Priority support", "Analytics dashboard", "Custom vendor URL"],
    cta: "Upgrade later", featured: false,
  },
];

export function ForVendorsView() {
  return (
    <>
      <section
        className="border-b border-border"
        style={{ background: "linear-gradient(135deg, var(--amber-soft), var(--teal-soft) 80%)" }}
      >
        <div className="container-x py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill chip-ink">For vendors</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[0.95]">
              Get found by every customer near you.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              List your service in 10 minutes. No monthly fees, no contracts. Pay a flat 18% only when
              you get booked — Ireland&apos;s most vendor-friendly commission.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/vendor-dashboard"
                className="px-6 py-3.5 rounded-full bg-ink text-cream font-semibold text-sm inline-flex items-center gap-2"
              >
                Start listing <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/vendor-dashboard"
                className="px-6 py-3.5 rounded-full border border-border bg-card font-semibold text-sm"
              >
                See vendor dashboard
              </Link>
            </div>
          </div>

          <div className="card-soft p-7">
            <div className="font-display text-xl">Average vendor earnings (Dublin)</div>
            <div className="mt-5 space-y-4">
              {EARNINGS.map((r) => (
                <div key={r.c}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{r.c}</span><span className="num-pill">{r.k}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary mt-1.5 overflow-hidden">
                    <div className="h-full bg-teal" style={{ width: r.w }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-muted-foreground">
              Estimates based on active vendors with verified bookings · Q1 2026
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Built for the way you work.</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ i: Icon, t, b }) => (
            <div key={t} className="card-soft p-6">
              <div className="size-11 rounded-xl bg-amber-soft text-foreground grid place-items-center">
                <Icon className="size-5" />
              </div>
              <div className="font-semibold mt-3">{t}</div>
              <p className="text-sm text-muted-foreground mt-1">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <h2 className="font-display text-4xl mb-8">Simple, honest pricing.</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((p) => (
            <div key={p.tier} className={"card-soft p-7 flex flex-col " + (p.featured ? "ring-2 ring-teal" : "")}>
              {p.featured && <span className="pill chip-teal w-fit mb-2">Most popular</span>}
              <div className="font-display text-xl">{p.tier}</div>
              <div className="font-display text-5xl num-pill mt-2">{p.price}</div>
              <div className="text-xs text-muted-foreground">{p.sub}</div>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {p.lines.map((l) => (
                  <li key={l} className="flex gap-2">
                    <Check className="size-4 text-teal shrink-0 mt-0.5" />{l}
                  </li>
                ))}
              </ul>
              <button
                className={"mt-5 px-5 py-3 rounded-xl text-sm font-semibold " +
                  (p.featured ? "bg-ink text-cream" : "border border-border bg-card")}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
