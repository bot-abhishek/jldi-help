import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { AboutView } from "@/features/about";

export const metadata: Metadata = {
  title: "About JaldiHelp",
  description:
    "JaldiHelp is building the trusted, location-precise local services infrastructure that's never existed.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutView />
    </PageLayout>
  );
}
