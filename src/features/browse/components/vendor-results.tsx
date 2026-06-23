"use client";

import { ChevronDown } from "lucide-react";
import { VendorCard } from "@/components/vendor-card";
import type { Vendor } from "@/lib/mock-data";

export function VendorResults({ vendors }: { vendors: Vendor[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-muted-foreground">{vendors.length} top results</p>
        <button className="text-sm font-semibold inline-flex items-center gap-1">
          Sort: Best match <ChevronDown className="size-3.5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {vendors.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>

      <div className="mt-10 card-soft p-6 bg-secondary/60 text-sm">
        <b>Smart fallback:</b> showing additional vendors beyond 5 km.{" "}
        <button className="underline">Expand radius to 10 km</button>
      </div>
    </div>
  );
}
