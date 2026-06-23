import Link from "next/link";
import { MapPin, Globe2 } from "lucide-react";
import { VendorCard } from "@/components/vendor-card";
import type { Category, Community, Vendor } from "@/lib/mock-data";

type CommunityViewProps = {
  community: Community;
  vendors: Vendor[];
  categories: Category[];
  otherCommunities: Community[];
};

export function CommunityView({
  community: c,
  vendors,
  categories,
  otherCommunities,
}: CommunityViewProps) {
  const byCat = vendors.reduce<Record<string, Vendor[]>>((acc, v) => {
    (acc[v.category] ??= []).push(v);
    return acc;
  }, {});

  return (
    <>
      <section className="ink-grad">
        <div className="container-x py-16">
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "rgba(230,251,248,.7)" }}
          >
            <MapPin className="size-4" />
            Dublin · 5 km radius
          </div>
          <div className="mt-3 flex items-center gap-5">
            <div className="text-7xl">{c.flag}</div>
            <div>
              <span className="pill" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>
                <Globe2 className="size-3" />
                Community lens · Cross-category
              </span>
              <h1 className="font-display text-5xl md:text-6xl text-cream mt-2">
                Services for the {c.name} community
              </h1>
              <p className="mt-3 max-w-2xl" style={{ color: "rgba(230,251,248,.8)" }}>
                {c.vendorCount} vendors across every category who speak {c.primaryLanguage} or
                otherwise serve the {c.name} community in Dublin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-12">
        {Object.entries(byCat).map(([catSlug, list]) => {
          const cat = categories.find((c) => c.slug === catSlug);
          return (
            <div key={catSlug} className="mb-12">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <h2 className="font-display text-3xl flex items-center gap-2">
                  {cat?.icon} {cat?.name ?? catSlug}
                </h2>
                {cat && (
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    All {cat.name.toLowerCase()} →
                  </Link>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map((v) => (
                  <VendorCard key={v.id} vendor={v} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 card-soft p-6">
          <h3 className="font-display text-xl mb-3">Other communities</h3>
          <div className="flex flex-wrap gap-2">
            {otherCommunities.map((x) => (
              <Link
                key={x.slug}
                href={`/community/${x.slug}`}
                className="pill chip-outline hover:bg-secondary"
              >
                {x.flag} {x.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
