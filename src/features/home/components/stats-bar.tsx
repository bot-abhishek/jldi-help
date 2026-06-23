import type { Stats } from "@/lib/mock-data";

export function StatsBar({ stats }: { stats: Stats }) {
  const items = [
    { v: stats.vendors, l: "Verified vendors" },
    { v: String(stats.cities), l: "Cities live in Ireland" },
    { v: stats.bookings, l: "Bookings completed" },
    { v: String(stats.categories), l: "Top-level categories" },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.l}>
            <div className="font-display text-3xl md:text-4xl num-pill">{s.v}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
