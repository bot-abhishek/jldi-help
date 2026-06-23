import type { Category, Community, Vendor } from "@/lib/mock-data";
import { HeroSection } from "./components/hero-section";
import { StatsBar } from "./components/stats-bar";
import { CategoriesGrid } from "./components/categories-grid";
import { CommunitiesShowcase } from "./components/communities-showcase";
import { FeaturedVendors } from "./components/featured-vendors";
import { HowItWorksSection } from "./components/how-it-works-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { VendorCta } from "./components/vendor-cta";

type HomeViewProps = {
  categories: Category[];
  communities: Community[];
  featuredVendors: Vendor[];
  stats: { vendors: string; cities: number; bookings: string; categories: number };
  testimonials: { name: string; quote: string; rating: number; vendor: string }[];
  howItWorks: { n: number; title: string; body: string }[];
};

export function HomeView({ categories, communities, featuredVendors, stats, testimonials, howItWorks }: HomeViewProps) {
  return (
    <>
      <HeroSection />
      <StatsBar stats={stats} />
      <CategoriesGrid categories={categories} />
      <CommunitiesShowcase communities={communities} />
      <FeaturedVendors vendors={featuredVendors} />
      <HowItWorksSection steps={howItWorks} />
      <TestimonialsSection testimonials={testimonials} />
      <VendorCta />
    </>
  );
}
