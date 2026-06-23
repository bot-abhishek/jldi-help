import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { BrowseView } from "@/features/browse";
import { categories, vendors, communities } from "@/lib/mock-data";
// When FastAPI is ready, replace with: import { vendorsApi, categoriesApi, communitiesApi } from "@/lib/api";

export const metadata: Metadata = {
  title: "Browse local services — JaldiHelp",
  description:
    "Filter trusted local vendors by category, availability, price, language and community.",
};

export default function BrowsePage() {
  // With FastAPI:
  // const [allVendors, allCategories, allCommunities] = await Promise.all([
  //   vendorsApi.list(),
  //   categoriesApi.list(),
  //   communitiesApi.list(),
  // ]);

  return (
    <PageLayout>
      <BrowseView vendors={vendors} categories={categories} communities={communities} />
    </PageLayout>
  );
}
