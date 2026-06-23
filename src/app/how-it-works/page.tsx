import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { HowItWorksView } from "@/features/how-it-works";
import { howItWorks } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "How JaldiHelp works",
  description: "Four steps from 'I need someone' to 'it's done.'",
};

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <HowItWorksView steps={howItWorks} />
    </PageLayout>
  );
}
