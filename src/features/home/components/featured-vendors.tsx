import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VendorCard } from "@/components/vendor-card";
import type { Vendor } from "@/lib/mock-data";

export function FeaturedVendors({ vendors }: { vendors: Vendor[] }) {
  return (
    <section className="container-x py-20">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="pill chip-teal">Trusted nearby</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Top-rated pros within 5 km.</h2>
        </div>
        <Link
          href="/browse"
          className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          View all <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vendors.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>
    </section>
  );
}
