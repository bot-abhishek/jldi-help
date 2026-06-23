import Link from "next/link";
import { Avatar } from "@/components/vendor-card";
import type { Vendor } from "@/lib/mock-data";

export function RelatedVendors({ vendors }: { vendors: Vendor[] }) {
  if (vendors.length === 0) return null;

  return (
    <section className="container-x pb-20">
      <h2 className="font-display text-3xl mb-6">Similar pros nearby</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {vendors.map((r) => (
          <Link key={r.id} href={`/vendor/${r.id}`} className="card-soft p-5 flex items-center gap-3">
            <Avatar initials={r.initials} color={r.color} size={48} />
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">{r.name}</div>
              <div className="text-xs text-muted-foreground truncate">{r.tagline}</div>
              <div className="text-xs mt-1 num-pill">⭐ {r.rating} · €{r.priceFrom}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
