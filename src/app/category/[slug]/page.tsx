import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { CategoryView } from "@/features/category";
import { findCategory, vendors, categories } from "@/lib/mock-data";
// When FastAPI is ready: import { categoriesApi, vendorsApi } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} near you — JaldiHelp`,
    description: category.blurb,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // With FastAPI: const category = await categoriesApi.get(slug);
  const category = findCategory(slug);
  if (!category) notFound();

  const inCat = vendors.filter((v) => v.category === slug);
  const others = vendors.filter((v) => v.category !== slug).slice(0, 6 - inCat.length);
  const list = [...inCat, ...others];

  const otherCategories = categories.filter((c) => c.slug !== slug);

  return (
    <PageLayout>
      <CategoryView category={category} vendors={list} otherCategories={otherCategories} />
    </PageLayout>
  );
}
