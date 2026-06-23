import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { BookingFlow } from "@/features/booking";
import { findVendor } from "@/lib/mock-data";
// When FastAPI is ready: import { vendorsApi } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Confirm your booking — JaldiHelp",
};

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  // With FastAPI: const vendor = await vendorsApi.get(id);
  const vendor = findVendor(id);
  if (!vendor) notFound();

  return (
    <PageLayout>
      <BookingFlow vendor={vendor} />
    </PageLayout>
  );
}
