import { Euro, CheckCircle2, Star, Clock } from "lucide-react";

const KPI_DATA = [
  { l: "Earnings (this month)", v: "€2,840", d: "+18% vs last", i: <Euro className="size-4" /> },
  {
    l: "Bookings completed",
    v: "24",
    d: "3 awaiting review",
    i: <CheckCircle2 className="size-4" />,
  },
  { l: "Trust score", v: "94/100", d: "Top 8% in Dublin", i: <Star className="size-4" /> },
  { l: "Avg. response time", v: "8 min", d: "Faster than 92%", i: <Clock className="size-4" /> },
];

export function KpiBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {KPI_DATA.map((k) => (
        <div key={k.l} className="card-soft p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
            {k.i}
            {k.l}
          </div>
          <div className="font-display text-3xl num-pill mt-2">{k.v}</div>
          <div className="text-xs text-teal mt-1">{k.d}</div>
        </div>
      ))}
    </div>
  );
}
