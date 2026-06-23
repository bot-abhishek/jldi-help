import Link from "next/link";

const MARKET_STATS = [
  { v: "$59.2B", l: "India home-services TAM" },
  { v: "28.3%", l: "Urban Company commission benchmark" },
  { v: "10", l: "Service categories at launch" },
  { v: "28", l: "Cities live in Ireland" },
];

const PRINCIPLES = [
  {
    t: "Location is the entry point",
    b: "Not a login wall. Not a category browse. GPS first, Eircode always.",
  },
  {
    t: "Trust is a tier, not a tick",
    b: "Three verification tiers, visible on every profile. Background-checked vendors get 3× more bookings.",
  },
  {
    t: "Every community, every category",
    b: "A Polish-speaking plumber and a Polish caterer share a discovery surface for the first time.",
  },
  {
    t: "Vendor-friendly economics",
    b: "Flat 18% commission. No monthly fees. The reputation belongs to the vendor.",
  },
  {
    t: "Configuration, not code",
    b: "A new country, currency, category or community is a row of data — not a deploy.",
  },
  {
    t: "Receipts, not promises",
    b: "Escrow on every payment. Reviews only after completed bookings. Disputes resolved in 48h.",
  },
];

export function AboutView() {
  return (
    <>
      <section className="hero-grad border-b border-border">
        <div className="container-x py-20">
          <span className="pill chip-teal">Our story</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            Every household, everywhere, needs a local pro. We&apos;re building the trusted way to
            find one.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            JaldiHelp is a location-first marketplace for local services — built first for Ireland,
            designed as configuration so it can launch in any country without rebuilding the
            platform.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl">The problem we&apos;re solving</h2>
          <p className="mt-3 text-muted-foreground">
            Finding a trustworthy plumber, an Afro-hair specialist or a Punjabi-speaking pandit
            currently means scrolling Facebook groups, calling three numbers off a flyer, and
            praying. There&apos;s no shared infrastructure for trust, pricing, booking, payment or
            accountability across the long tail of local services.
          </p>
          <p className="mt-3 text-muted-foreground">
            We&apos;re building it — for every category a household needs, including the cultural
            and religious services no other marketplace has touched.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl">Why Ireland first</h2>
          <p className="mt-3 text-muted-foreground">
            A compact, English-speaking, high-income market with the world&apos;s most precise
            postcode system. Once JaldiHelp works in Ireland, it can roll into any country as
            configuration — taxonomy, currencies, languages and communities switched on per market.
          </p>
        </div>
      </section>

      <section className="bg-sand/60 border-y border-border">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {MARKET_STATS.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl num-pill">{s.v}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl mb-8">Product principles</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PRINCIPLES.map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="font-display text-xl">{p.t}</div>
              <p className="text-sm text-muted-foreground mt-2">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card-soft p-10 text-center">
          <h2 className="font-display text-4xl">Want the full spec?</h2>
          <p className="text-muted-foreground mt-2">
            We have a four-document product specification covering foundation, modules, journeys
            &amp; technical spec, and the full category taxonomy.
          </p>
          <Link
            href="/for-vendors"
            className="mt-5 inline-flex px-6 py-3.5 rounded-full bg-ink text-cream font-semibold text-sm"
          >
            Talk to the founders
          </Link>
        </div>
      </section>
    </>
  );
}
