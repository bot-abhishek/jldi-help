import { Star, Award } from "lucide-react";
import type { Vendor } from "@/lib/mock-data";

const SAMPLE_REVIEWS = [
  { name: "Saoirse M.", date: "Mar 2026", rating: 5, body: "Absolutely brilliant. Booked late Sunday, here Monday 9am sharp. Place was sparkling." },
  { name: "Diarmuid O.", date: "Feb 2026", rating: 5, body: "Communicated really clearly, fair price, no hidden extras. Will book again." },
  { name: "Kamila W.", date: "Feb 2026", rating: 4, body: "Lovely service, only knocked a star for arriving 15 min late — traffic to be fair." },
  { name: "Adaeze N.", date: "Jan 2026", rating: 5, body: "Honestly the best in Dublin. Cannot recommend highly enough." },
];

export function VendorReviews({ vendor }: { vendor: Pick<Vendor, "rating" | "reviewCount"> }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4">Reviews · {vendor.reviewCount}</h2>

      <div className="card-soft p-5 mb-4 flex items-center gap-6">
        <div className="font-display text-5xl num-pill">{vendor.rating}</div>
        <div className="flex-1">
          <div className="flex gap-0.5 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={"size-4 " + (i < Math.round(vendor.rating) ? "fill-amber text-amber" : "text-border")}
              />
            ))}
          </div>
          <div className="text-xs text-muted-foreground">Based on {vendor.reviewCount} verified bookings</div>
        </div>
        <Award className="size-10 text-amber hidden sm:block" />
      </div>

      <div className="space-y-4">
        {SAMPLE_REVIEWS.map((r, i) => (
          <div key={i} className="card-soft p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-sm">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.date}</div>
            </div>
            <div className="flex gap-0.5 my-2">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="size-3.5 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-sm">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
