import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/mock-data";

export function CategoriesGrid({ categories }: { categories: Category[] }) {
  return (
    <section className="container-x py-20">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="pill chip-teal">Browse by category</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Ten ways to get something done.
          </h2>
        </div>
        <Link
          href="/browse"
          className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          See all categories <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="card-soft p-5 flex flex-col gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <div className="text-3xl">{c.icon}</div>
            <div className="font-display text-lg leading-tight">{c.name}</div>
            <div className="text-xs text-muted-foreground line-clamp-2">{c.blurb}</div>
            <div className="text-xs num-pill text-teal mt-auto pt-2">
              {c.count.toLocaleString()} vendors
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
