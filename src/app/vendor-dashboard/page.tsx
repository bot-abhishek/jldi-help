import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { VendorDashboardView } from "@/features/vendor-dashboard";
import { vendors } from "@/lib/mock-data";
// When FastAPI is ready, this will fetch the authenticated vendor's data:
// import { vendorsApi } from "@/lib/api";

export const metadata: Metadata = {
  title: "Vendor dashboard preview — JaldiHelp",
};

export default function VendorDashboardPage() {
  const vendor = vendors[0]; // Preview: first vendor. Real: authenticated user's vendor profile.

  return (
    <PageLayout>
      <VendorDashboardView vendor={vendor} />
    </PageLayout>
  );
}
