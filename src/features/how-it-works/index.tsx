import Link from "next/link";
import { ShieldCheck, Lock, Star, MapPin, ArrowRight } from "lucide-react";

const TRUST_PILLARS = [
  {
    i: <ShieldCheck className="size-6" />,
    t: "Three tiers of verification",
    b: "Background check, credential check, or ID — every vendor has a tier badge before they can list.",
  },
  {
    i: <Lock className="size-6" />,
    t: "Escrow payments",
    b: "We hold your money until the job is done. No upfront risk.",
  },
  {
    i: <Star className="size-6" />,
    t: "Only verified reviews",
    b: "Reviews are only possible after a completed booking. No fake stars.",
  },
  {
    i: <MapPin className="size-6" />,
    t: "Location-precise results",
    b: "Every search is anchored to your GPS or Eircode. Distance is honest.",
  },
];

type Step = { n: number; title: string; body: string };

export function HowItWorksView({ steps }: { steps: Step[] }) {
  return (
    <>
      <section className="hero-grad border-b border-border">
        <div className="container-x py-20">
          <span className="pill chip-teal">How it works</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl max-w-3xl leading-[0.95]">
            From &quot;I need someone&quot; to &quot;it&apos;s done.&quot; In four steps.
          </h1>
        </div>
      </section>

      <div className="container-x py-16 grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="card-soft p-8">
            <div className="font-display text-7xl num-pill text-teal/80">0{s.n}</div>
            <div className="font-display text-2xl mt-2">{s.title}</div>
            <p className="text-muted-foreground mt-2">{s.body}</p>
          </div>
        ))}
      </div>

      <section className="container-x py-16">
        <h2 className="font-display text-4xl mb-8">Why people trust JaldiHelp</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_PILLARS.map((x) => (
            <div key={x.t} className="card-soft p-6">
              <div className="size-12 rounded-xl bg-teal-soft text-teal grid place-items-center">
                {x.i}
              </div>
              <div className="font-semibold mt-3">{x.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card-soft p-10 ink-grad text-cream flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="font-display text-3xl">Ready to get something sorted?</h2>
            <p className="opacity-80 mt-1">Find your local pro in under a minute.</p>
          </div>
          <Link
            href="/browse"
            className="px-6 py-3.5 rounded-full bg-cream text-ink font-semibold text-sm inline-flex items-center gap-2"
          >
            Browse now <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
