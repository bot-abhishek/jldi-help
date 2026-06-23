import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { VendorCard } from "@/components/vendor-card";
import type { Category, Vendor } from "@/lib/mock-data";

type CategoryViewProps = {
  category: Category;
  vendors: Vendor[];
  otherCategories: Category[];
};

export function CategoryView({ category: cat, vendors, otherCategories }: CategoryViewProps) {
  return (
    <>
      <section
        className="border-b border-border"
        style={{
          background: "linear-gradient(135deg, var(--teal-soft) 0%, var(--amber-soft) 100%)",
        }}
      >
        <div className="container-x py-12">
          <Link
            href="/browse"
            className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            All categories
          </Link>
          <div className="mt-4 flex items-start gap-6">
            <div className="text-6xl">{cat.icon}</div>
            <div>
              <h1 className="font-display text-5xl md:text-6xl">{cat.name}</h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{cat.blurb}</p>
              <div className="mt-4 flex items-center gap-3 text-sm flex-wrap">
                <span className="pill chip-ink">
                  <MapPin className="size-3" />
                  Dublin 2 · 5km
                </span>
                <span className="text-muted-foreground">
                  {cat.count.toLocaleString()} vendors · {cat.subcategories.length} service types
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-2 flex-wrap">
            {cat.subcategories.map((s) => (
              <span key={s.slug} className="pill chip-outline bg-card">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-12">
        <h2 className="font-display text-2xl mb-5">Top-rated nearby</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vendors.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl mb-4">Other categories</h3>
          <div className="flex gap-2 flex-wrap">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="pill chip-outline hover:bg-secondary"
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
