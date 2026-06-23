import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { CommunityView } from "@/features/community";
import { findCommunity, vendors, communities, categories } from "@/lib/mock-data";
// When FastAPI is ready: import { communitiesApi, vendorsApi, categoriesApi } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = findCommunity(slug);
  if (!community) return {};
  return {
    title: `Services for the ${community.name} community in Dublin — JaldiHelp`,
    description: `Find ${community.name} community vendors across every category in Dublin.`,
  };
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;

  // With FastAPI: const community = await communitiesApi.get(slug);
  const community = findCommunity(slug);
  if (!community) notFound();

  // Vendors tagged with this community, with fillers if < 3
  const tagged = vendors.filter((v) => v.communities.includes(slug));
  const list = tagged.length >= 3
    ? tagged
    : [...tagged, ...vendors.filter((v) => !tagged.includes(v)).slice(0, 6 - tagged.length)];

  const otherCommunities = communities.filter((c) => c.slug !== slug);

  return (
    <PageLayout>
      <CommunityView
        community={community}
        vendors={list}
        categories={categories}
        otherCommunities={otherCommunities}
      />
    </PageLayout>
  );
}
