import Link from "next/link";
import { Globe2, ArrowRight } from "lucide-react";
import type { Community } from "@/lib/mock-data";

export function CommunitiesShowcase({ communities }: { communities: Community[] }) {
  return (
    <section className="bg-sand/60 border-y border-border">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="pill chip-amber">
              <Globe2 className="size-3" />Browse by community
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Services for your community, across every category.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A Polish-speaking plumber, a Polish delicatessen caterer, a Polish-speaking hairdresser
              — surfaced together. The category-blind discovery layer no other marketplace has.
            </p>
            <Link
              href="/communities"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-sm hover:gap-2 transition-all"
            >
              See all communities <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {communities.map((c) => (
              <Link
                key={c.slug}
                href={`/community/${c.slug}`}
                className="card-soft p-4 flex items-center gap-3 hover:bg-card"
              >
                <div className="text-3xl">{c.flag}</div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm">Services for {c.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {c.vendorCount} vendors · {c.primaryLanguage}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
