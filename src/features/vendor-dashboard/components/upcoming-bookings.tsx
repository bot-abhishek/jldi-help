import { Calendar } from "lucide-react";

const UPCOMING = [
  { who: "Saoirse M.", what: "Deep cleaning · 4 hr", when: "Today · 14:30", addr: "Rathmines, D06", price: 180, status: "Confirmed" },
  { who: "Diarmuid O.", what: "Regular cleaning · 2 hr", when: "Tomorrow · 09:00", addr: "Ranelagh, D06", price: 64, status: "Confirmed" },
  { who: "Kamila W.", what: "End-of-tenancy · 6 hr", when: "Sat 28 · 10:00", addr: "Smithfield, D07", price: 260, status: "Awaiting confirmation" },
];

export function UpcomingBookings() {
  return (
    <div className="lg:col-span-2 card-soft p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl flex items-center gap-2">
          <Calendar className="size-5" />Upcoming bookings
        </h2>
        <button className="text-sm font-semibold underline-offset-4 hover:underline">View calendar →</button>
      </div>
      <div className="divide-y divide-border">
        {UPCOMING.map((b, i) => (
          <div key={i} className="py-4 flex items-center gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="font-semibold">{b.who}</div>
              <div className="text-xs text-muted-foreground">{b.what} · {b.addr}</div>
            </div>
            <div className="text-sm font-medium">{b.when}</div>
            <div className="font-display text-lg num-pill w-20 text-right">€{b.price}</div>
            <span className={"pill " + (b.status === "Confirmed" ? "chip-teal" : "chip-amber")}>{b.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
