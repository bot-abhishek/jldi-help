import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { Avatar } from "@/components/vendor-card";
import { findVendor } from "@/lib/mock-data";
import { ShieldCheck, Calendar, CreditCard, CheckCircle2, MessageCircle, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/book/$id")({
  loader: ({ params }) => {
    const v = findVendor(params.id);
    if (!v) throw notFound();
    return { vendor: v };
  },
  head: () => ({ meta: [{ title: "Confirm your booking — Sorted" }] }),
  component: BookPage,
});

const slots = ["Today · 14:30", "Today · 17:00", "Tomorrow · 09:00", "Tomorrow · 11:30", "Tomorrow · 16:00", "Sat 28 · 10:00"];

function BookPage() {
  const { vendor: v } = Route.useLoaderData();
  const [service, setService] = useState(v.services[0]?.name);
  const [slot, setSlot] = useState(slots[0]);
  const [pay, setPay] = useState<"card"|"cash">("card");

  const svc = v.services.find(s => s.name === service) ?? v.services[0];
  const subtotal = svc?.price ?? 0;
  const fee = Math.round(subtotal * 0.04);
  const total = subtotal + fee;

  return (
    <PageLayout>
      <div className="container-x py-8">
        <Link to="/vendor/$id" params={{id:v.id}} className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5"/>Back to {v.name}</Link>
      </div>
      <section className="container-x grid lg:grid-cols-[1fr_400px] gap-10 pb-20">
        <div>
          <h1 className="font-display text-4xl md:text-5xl">Confirm your booking</h1>
          <p className="text-muted-foreground mt-2">Review everything below, then send your request. The vendor has 30 minutes to accept.</p>

          {/* Service */}
          <Step n={1} title="Choose a service">
            <div className="grid sm:grid-cols-2 gap-3">
              {v.services.map(s => (
                <button key={s.name} onClick={()=>setService(s.name)} className={"card-soft p-4 text-left transition " + (service===s.name?"ring-2 ring-teal":"hover:bg-secondary")}>
                  <div className="font-semibold text-sm">{s.name}</div>
                  <div className="text-xs text-muted-foreground">Approx. {s.duration}</div>
                  <div className="font-display text-lg num-pill mt-1">€{s.price}<span className="text-xs text-muted-foreground font-sans">{s.unit}</span></div>
                </button>
              ))}
            </div>
          </Step>

          {/* Slot */}
          <Step n={2} title="Pick a time" icon={<Calendar className="size-4"/>}>
            <div className="grid sm:grid-cols-3 gap-2">
              {slots.map(s => (
                <button key={s} onClick={()=>setSlot(s)} className={"px-4 py-3 rounded-xl border text-sm font-medium transition " + (slot===s?"border-teal bg-teal-soft text-foreground":"border-border hover:bg-secondary")}>{s}</button>
              ))}
            </div>
          </Step>

          {/* Address */}
          <Step n={3} title="Service address">
            <div className="space-y-3">
              <input defaultValue="42 Camden St Lower" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
              <div className="grid sm:grid-cols-2 gap-3">
                <input defaultValue="Dublin 2" className="px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
                <input defaultValue="D02 XY45 (Eircode)" className="px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
              </div>
              <textarea placeholder="Notes for the vendor (gate code, pets, parking, accessibility…)" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm min-h-24"/>
            </div>
          </Step>

          {/* Payment */}
          <Step n={4} title="Payment method" icon={<CreditCard className="size-4"/>}>
            <div className="grid sm:grid-cols-2 gap-3">
              <button onClick={()=>setPay("card")} className={"card-soft p-4 text-left " + (pay==="card"?"ring-2 ring-teal":"")}>
                <div className="font-semibold text-sm flex items-center gap-2"><CreditCard className="size-4"/>Card · Held in escrow</div>
                <div className="text-xs text-muted-foreground mt-1">Charged when the job is marked complete</div>
              </button>
              <button onClick={()=>setPay("cash")} className={"card-soft p-4 text-left " + (pay==="cash"?"ring-2 ring-teal":"")}>
                <div className="font-semibold text-sm">Pay cash on site</div>
                <div className="text-xs text-muted-foreground mt-1">Not protected by Sorted Guarantee</div>
              </button>
            </div>
            {pay==="card" && (
              <div className="mt-4 card-soft p-5 space-y-3">
                <input placeholder="Card number  •••• •••• •••• 4242" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="MM / YY" className="px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
                  <input placeholder="CVC" className="px-4 py-3 rounded-xl border border-border bg-card text-sm"/>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5"><Lock className="size-3"/>Secured by Stripe · Funds held in escrow until job complete</div>
              </div>
            )}
          </Step>
        </div>

        {/* SUMMARY */}
        <aside>
          <div className="card-soft p-6 sticky top-20">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <Avatar initials={v.initials} color={v.color} size={48}/>
              <div>
                <div className="font-semibold">{v.name}</div>
                <div className="text-xs text-muted-foreground">{v.area} · ⭐ {v.rating}</div>
              </div>
            </div>
            <div className="py-4 space-y-2 text-sm">
              <Row k="Service" v={svc?.name ?? ""} />
              <Row k="When" v={slot} />
              <Row k="Duration" v={svc?.duration ?? ""} />
              <Row k="Address" v="42 Camden St, D02" />
            </div>
            <div className="py-4 border-t border-border space-y-2 text-sm">
              <Row k="Service" v={`€${subtotal}`} />
              <Row k="Sorted fee (4%)" v={`€${fee}`} />
              <div className="flex justify-between pt-2 border-t border-border font-display text-xl">
                <span>Total</span><span className="num-pill">€{total}</span>
              </div>
            </div>

            <button className="mt-4 w-full px-5 py-3.5 rounded-xl bg-ink text-cream font-semibold text-sm hover:opacity-90">
              Request booking
            </button>

            <div className="mt-4 text-xs text-muted-foreground space-y-1.5">
              <div className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-teal"/>Payment held in escrow</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-success"/>Free cancellation up to 24h</div>
              <div className="flex items-center gap-2"><MessageCircle className="size-3.5"/>Chat opens once accepted</div>
            </div>
          </div>
        </aside>
      </section>
    </PageLayout>
  );
}

function Step({ n, title, children, icon }: { n: number; title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-3">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-cream text-sm num-pill">{n}</span>
        {title} {icon}
      </h2>
      {children}
    </section>
  );
}
function Row({k,v}:{k:string;v:string}) {
  return <div className="flex justify-between gap-2"><span className="text-muted-foreground">{k}</span><span className="font-medium text-right">{v}</span></div>;
}
