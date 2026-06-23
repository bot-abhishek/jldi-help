import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { VendorProfileView } from "@/features/vendor-profile";
import { findVendor, vendors } from "@/lib/mock-data";
// When FastAPI is ready: import { vendorsApi } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vendor = findVendor(id);
  if (!vendor) return {};
  return {
    title: `${vendor.name} — ${vendor.tagline} | JaldiHelp`,
    description: vendor.bio,
  };
}

export default async function VendorPage({ params }: Props) {
  const { id } = await params;

  // With FastAPI: const vendor = await vendorsApi.get(id);
  const vendor = findVendor(id);
  if (!vendor) notFound();

  const related = vendors.filter((v) => v.id !== id && v.category === vendor.category).slice(0, 3);

  return (
    <PageLayout>
      <VendorProfileView vendor={vendor} related={related} />
    </PageLayout>
  );
}
