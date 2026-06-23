import Link from "next/link";
import type { Community } from "@/lib/mock-data";

export function CommunitiesView({ communities }: { communities: Community[] }) {
  return (
    <>
      <section className="hero-grad border-b border-border">
        <div className="container-x py-16">
          <h1 className="font-display text-5xl md:text-6xl max-w-3xl">
            Browse by community — across every category, in any language.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A Polish-speaking plumber, a Polish delicatessen caterer, a Polish-speaking hairdresser
            — three different categories, one community, surfaced together.
          </p>
        </div>
      </section>

      <div className="container-x py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {communities.map((c) => (
          <Link
            key={c.slug}
            href={`/community/${c.slug}`}
            className="card-soft p-6 flex flex-col gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <div className="text-5xl">{c.flag}</div>
            <div className="font-display text-2xl">Services for {c.name}</div>
            <div className="text-xs text-muted-foreground">{c.primaryLanguage}</div>
            <div className="text-xs num-pill text-teal mt-2">{c.vendorCount} vendors in Dublin</div>
          </Link>
        ))}
      </div>
    </>
  );
}
