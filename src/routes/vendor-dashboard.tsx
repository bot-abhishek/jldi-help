import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { Avatar } from "@/components/vendor-card";
import { vendors } from "@/lib/mock-data";
import { Calendar, TrendingUp, Star, MessageCircle, CheckCircle2, Clock, Euro, Eye } from "lucide-react";

export const Route = createFileRoute("/vendor-dashboard")({
  head: () => ({ meta: [{ title: "Vendor dashboard preview — Sorted" }] }),
  component: Dashboard,
});

function Dashboard() {
  const v = vendors[0];
  const upcoming = [
    { who:"Saoirse M.", what:"Deep cleaning · 4 hr", when:"Today · 14:30", addr:"Rathmines, D06", price:180, status:"Confirmed" },
    { who:"Diarmuid O.", what:"Regular cleaning · 2 hr", when:"Tomorrow · 09:00", addr:"Ranelagh, D06", price:64, status:"Confirmed" },
    { who:"Kamila W.", what:"End-of-tenancy · 6 hr", when:"Sat 28 · 10:00", addr:"Smithfield, D07", price:260, status:"Awaiting confirmation" },
  ];
  const requests = [
    { who:"Ravi P.", what:"Deep cleaning", when:"Sun 29 · afternoon", note:"3-bed, pets at home", price:"€180 est." },
    { who:"Adaeze N.", what:"Regular cleaning", when:"Weekly Mon mornings", note:"2-bed apartment", price:"€64 / visit" },
  ];

  return (
    <PageLayout>
      <div className="container-x py-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Avatar initials={v.initials} color={v.color} size={64}/>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Vendor dashboard</div>
              <h1 className="font-display text-3xl">Welcome back, {v.name.split(" ")[0]}</h1>
              <div className="text-sm text-muted-foreground">Your listing is live · Dublin 6 · {v.subcategory}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/vendor/$id" params={{id:v.id}} className="pill chip-outline gap-1.5"><Eye className="size-3.5"/>View public profile</Link>
            <button className="pill chip-ink">+ Add service</button>
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l:"Earnings (this month)", v:"€2,840", d:"+18% vs last", i:<Euro className="size-4"/> },
            { l:"Bookings completed", v:"24", d:"3 awaiting review", i:<CheckCircle2 className="size-4"/> },
            { l:"Trust score", v:"94/100", d:"Top 8% in Dublin", i:<Star className="size-4"/> },
            { l:"Avg. response time", v:"8 min", d:"Faster than 92%", i:<Clock className="size-4"/> },
          ].map(k => (
            <div key={k.l} className="card-soft p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">{k.i}{k.l}</div>
              <div className="font-display text-3xl num-pill mt-2">{k.v}</div>
              <div className="text-xs text-teal mt-1">{k.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* UPCOMING */}
          <div className="lg:col-span-2 card-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-2xl flex items-center gap-2"><Calendar className="size-5"/>Upcoming bookings</h2>
              <button className="text-sm font-semibold underline-offset-4 hover:underline">View calendar →</button>
            </div>
            <div className="divide-y divide-border">
              {upcoming.map((b,i) => (
                <div key={i} className="py-4 flex items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{b.who}</div>
                    <div className="text-xs text-muted-foreground">{b.what} · {b.addr}</div>
                  </div>
                  <div className="text-sm font-medium">{b.when}</div>
                  <div className="font-display text-lg num-pill w-20 text-right">€{b.price}</div>
                  <span className={"pill " + (b.status==="Confirmed"?"chip-teal":"chip-amber")}>{b.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REQUESTS */}
          <div className="card-soft p-6">
            <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><MessageCircle className="size-5"/>New requests</h2>
            <div className="space-y-4">
              {requests.map((r,i) => (
                <div key={i} className="border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm">{r.who}</div>
                    <div className="text-xs num-pill text-teal">{r.price}</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{r.what} · {r.when}</div>
                  <div className="text-xs mt-2 italic">"{r.note}"</div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded-lg bg-ink text-cream text-xs font-semibold">Accept</button>
                    <button className="flex-1 px-3 py-2 rounded-lg border border-border text-xs font-semibold">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="mt-6 card-soft p-6">
          <h2 className="font-display text-2xl mb-1 flex items-center gap-2"><TrendingUp className="size-5"/>Last 30 days</h2>
          <p className="text-sm text-muted-foreground mb-5">Profile views, bookings and earnings — at a glance.</p>
          <div className="h-48 grid grid-cols-30 items-end gap-1" style={{gridTemplateColumns:"repeat(30,1fr)"}}>
            {Array.from({length:30}).map((_,i)=> {
              const h = 30 + Math.sin(i/2)*25 + Math.cos(i/3.1)*20 + (i*7%30);
              return <div key={i} className="rounded-t-md bg-teal/80" style={{height:`${h}%`}}/>;
            })}
          </div>
          <div className="mt-4 flex justify-between text-xs text-muted-foreground">
            <span>30 days ago</span><span>This week</span><span>Today</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
