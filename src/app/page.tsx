import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { HomeView } from "@/features/home";
import { categories, communities, vendors, stats, testimonials, howItWorks } from "@/lib/mock-data";
// When FastAPI is ready, replace above with:
// import { categoriesApi, communitiesApi, vendorsApi } from "@/lib/api";

export const metadata: Metadata = {
  title: "JaldiHelp — Local services in Ireland, sorted in minutes",
  description:
    "From a leaking tap to a wedding priest — find a verified local pro nearby and book in under a minute.",
};

export default function HomePage() {
  // With FastAPI, this becomes:
  // const [categories, communities, allVendors] = await Promise.all([
  //   categoriesApi.list(),
  //   communitiesApi.list(),
  //   vendorsApi.list(),
  // ]);
  const featuredVendors = vendors.slice(0, 6);

  return (
    <PageLayout>
      <HomeView
        categories={categories}
        communities={communities}
        featuredVendors={featuredVendors}
        stats={stats}
        testimonials={testimonials}
        howItWorks={howItWorks}
      />
    </PageLayout>
  );
}
