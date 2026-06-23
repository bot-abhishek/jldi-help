import Link from "next/link";
import type { Vendor } from "@/lib/mock-data";

export function VendorServices({ vendor }: { vendor: Vendor }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4">Services &amp; pricing</h2>
      <div className="space-y-3">
        {vendor.services.map((s) => (
          <div key={s.name} className="card-soft p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-xs text-muted-foreground">Approx. {s.duration}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-display text-xl num-pill">
                €{s.price}<span className="text-xs text-muted-foreground font-sans">{s.unit}</span>
              </div>
              <Link href={`/book/${vendor.id}`} className="pill chip-ink">Book</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
