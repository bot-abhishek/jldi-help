"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { FilterSidebar } from "./components/filter-sidebar";
import { VendorResults } from "./components/vendor-results";
import type { Category, Community, Vendor } from "@/lib/mock-data";

type BrowseViewProps = {
  vendors: Vendor[];
  categories: Category[];
  communities: Community[];
};

export function BrowseView({ vendors, categories, communities }: BrowseViewProps) {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="container-x py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-teal" />
            Showing results near{" "}
            <b className="text-foreground">Dublin 2 · D02 XY45</b> · 5 km radius{" "}
            <button className="underline ml-2">Change</button>
          </div>
          <h1 className="font-display text-4xl md:text-5xl mt-3">All local services near you</h1>
          <p className="text-muted-foreground mt-2">
            {vendors.length * 47} verified vendors across {categories.length} categories
          </p>

          <div className="mt-6 flex gap-2 flex-wrap">
            <Link href="/browse" className="pill chip-ink">All</Link>
            {categories.map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`} className="pill chip-outline hover:bg-secondary">
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        <FilterSidebar communities={communities} />
        <VendorResults vendors={vendors} />
      </div>
    </>
  );
}
