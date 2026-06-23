import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ForVendorsView } from "@/features/for-vendors";

export const metadata: Metadata = {
  title: "List your service on JaldiHelp",
  description: "Get found by every customer near you. Free to list, 18% commission only on completed jobs.",
};

export default function ForVendorsPage() {
  return (
    <PageLayout>
      <ForVendorsView />
    </PageLayout>
  );
}
