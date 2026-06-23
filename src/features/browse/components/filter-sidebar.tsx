"use client";

import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import type { Community } from "@/lib/mock-data";

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {title}
      </div>
      <div className="space-y-1.5">
        {options.map((o) => (
          <label
            key={o}
            className="flex items-center gap-2 text-sm cursor-pointer hover:text-foreground"
          >
            <input type="checkbox" className="rounded border-border accent-teal" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

export function FilterSidebar({ communities }: { communities: Community[] }) {
  return (
    <aside className="space-y-6">
      <div className="card-soft p-5">
        <div className="flex items-center gap-2 font-semibold text-sm mb-4">
          <SlidersHorizontal className="size-4" />
          Filters
        </div>

        <FilterGroup
          title="Availability"
          options={["Available today", "This week", "Specific date"]}
        />
        <FilterGroup
          title="Price range"
          options={["€ Under 50", "€€ 50–150", "€€€ 150–500", "€€€€ 500+"]}
        />
        <FilterGroup title="Minimum rating" options={["4.5+", "4.0+", "3.5+"]} />
        <FilterGroup
          title="Verification tier"
          options={["Background-checked", "Credential-verified", "ID-verified"]}
        />
        <FilterGroup
          title="Language"
          options={["English", "Polish", "Hindi", "Portuguese", "Tagalog", "Arabic"]}
        />

        <div className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Community
          </div>
          <div className="flex flex-wrap gap-1.5">
            {communities.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/community/${c.slug}`} className="pill chip-outline">
                {c.flag} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
