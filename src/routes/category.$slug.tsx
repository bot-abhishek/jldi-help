import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { VendorCard } from "@/components/vendor-card";
import { findCategory, vendors, categories } from "@/lib/mock-data";
import { MapPin, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = findCategory(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.cat.name ?? "Category"} near you — Sorted` },
      { name: "description", content: loaderData?.cat.blurb ?? "Local services" },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  // mix vendors — show this category first, then others
  const inCat = vendors.filter(v => v.category === cat.slug);
  const others = vendors.filter(v => v.category !== cat.slug).slice(0, 6 - inCat.length);
  const list = [...inCat, ...others];

  return (
    <PageLayout>
      <section className="border-b border-border" style={{background:"linear-gradient(135deg, var(--teal-soft) 0%, var(--amber-soft) 100%)"}}>
        <div className="container-x py-12">
          <Link to="/browse" className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5"/>All categories</Link>
          <div className="mt-4 flex items-start gap-6">
            <div className="text-6xl">{cat.icon}</div>
            <div>
              <h1 className="font-display text-5xl md:text-6xl">{cat.name}</h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{cat.blurb}</p>
              <div className="mt-4 flex items-center gap-3 text-sm flex-wrap">
                <span className="pill chip-ink"><MapPin className="size-3"/>Dublin 2 · 5km</span>
                <span className="text-muted-foreground">{cat.count.toLocaleString()} vendors · {cat.subcategories.length} service types</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-2 flex-wrap">
            {cat.subcategories.map(s => (
              <span key={s.slug} className="pill chip-outline bg-card">{s.name}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-12">
        <h2 className="font-display text-2xl mb-5">Top-rated nearby</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(v => <VendorCard key={v.id} vendor={v}/>)}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl mb-4">Other categories</h3>
          <div className="flex gap-2 flex-wrap">
            {categories.filter(c => c.slug !== cat.slug).map(c => (
              <Link key={c.slug} to="/category/$slug" params={{slug:c.slug}} className="pill chip-outline hover:bg-secondary">{c.icon} {c.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
