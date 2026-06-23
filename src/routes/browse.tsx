import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site-shell";
import { VendorCard } from "@/components/vendor-card";
import { categories, vendors, communities } from "@/lib/mock-data";
import { SlidersHorizontal, MapPin, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/browse")({
  head: () => ({ meta: [{ title: "Browse local services — Sorted" }, { name: "description", content: "Filter trusted local vendors by category, availability, price, language and community." }] }),
  component: Browse,
});

function Browse() {
  return (
    <PageLayout>
      <section className="border-b border-border bg-card">
        <div className="container-x py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-teal"/>Showing results near <b className="text-foreground">Dublin 2 · D02 XY45</b> · 5 km radius <button className="underline ml-2">Change</button></div>
          <h1 className="font-display text-4xl md:text-5xl mt-3">All local services near you</h1>
          <p className="text-muted-foreground mt-2">{vendors.length * 47} verified vendors across {categories.length} categories</p>

          {/* category pills */}
          <div className="mt-6 flex gap-2 flex-wrap">
            <Link to="/browse" className="pill chip-ink">All</Link>
            {categories.map(c => (
              <Link key={c.slug} to="/category/$slug" params={{slug:c.slug}} className="pill chip-outline hover:bg-secondary">{c.icon} {c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* FILTERS */}
        <aside className="space-y-6">
          <div className="card-soft p-5">
            <div className="flex items-center gap-2 font-semibold text-sm mb-4"><SlidersHorizontal className="size-4"/>Filters</div>

            <Filter title="Availability" options={["Available today","This week","Specific date"]} />
            <Filter title="Price range" options={["€ Under 50","€€ 50–150","€€€ 150–500","€€€€ 500+"]} />
            <Filter title="Minimum rating" options={["4.5+","4.0+","3.5+"]} />
            <Filter title="Verification tier" options={["Background-checked","Credential-verified","ID-verified"]} />
            <Filter title="Language" options={["English","Polish","Hindi","Portuguese","Tagalog","Arabic"]} />
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Community</div>
              <div className="flex flex-wrap gap-1.5">
                {communities.slice(0,6).map(c => (
                  <Link key={c.slug} to="/community/$slug" params={{slug:c.slug}} className="pill chip-outline">{c.flag} {c.name}</Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RESULTS */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-muted-foreground">{vendors.length} top results</p>
            <button className="text-sm font-semibold inline-flex items-center gap-1">Sort: Best match <ChevronDown className="size-3.5"/></button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {vendors.map(v => <VendorCard key={v.id} vendor={v}/>)}
          </div>

          <div className="mt-10 card-soft p-6 bg-secondary/60 text-sm">
            <b>Smart fallback:</b> showing additional vendors beyond 5 km. {" "}
            <button className="underline">Expand radius to 10 km</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function Filter({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{title}</div>
      <div className="space-y-1.5">
        {options.map(o => (
          <label key={o} className="flex items-center gap-2 text-sm cursor-pointer hover:text-foreground">
            <input type="checkbox" className="rounded border-border accent-teal"/>{o}
          </label>
        ))}
      </div>
    </div>
  );
}
