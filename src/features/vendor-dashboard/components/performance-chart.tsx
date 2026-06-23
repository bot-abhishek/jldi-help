import { TrendingUp } from "lucide-react";

export function PerformanceChart() {
  return (
    <div className="card-soft p-6">
      <h2 className="font-display text-2xl mb-1 flex items-center gap-2">
        <TrendingUp className="size-5" />Last 30 days
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        Profile views, bookings and earnings — at a glance.
      </p>
      <div
        className="h-48 grid items-end gap-1"
        style={{ gridTemplateColumns: "repeat(30,1fr)" }}
      >
        {Array.from({ length: 30 }).map((_, i) => {
          const h = 30 + Math.sin(i / 2) * 25 + Math.cos(i / 3.1) * 20 + (i * 7) % 30;
          return <div key={i} className="rounded-t-md bg-teal/80" style={{ height: `${h}%` }} />;
        })}
      </div>
      <div className="mt-4 flex justify-between text-xs text-muted-foreground">
        <span>30 days ago</span><span>This week</span><span>Today</span>
      </div>
    </div>
  );
}
