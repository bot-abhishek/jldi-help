import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { CommunitiesView } from "@/features/communities";
import { communities } from "@/lib/mock-data";
// When FastAPI is ready: import { communitiesApi } from "@/lib/api";

export const metadata: Metadata = {
  title: "Communities — JaldiHelp",
  description: "Browse services by community across every category.",
};

export default function CommunitiesPage() {
  return (
    <PageLayout>
      <CommunitiesView communities={communities} />
    </PageLayout>
  );
}
