import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { VendorHeader } from "./components/vendor-header";
import { VendorServices } from "./components/vendor-services";
import { VendorVerification } from "./components/vendor-verification";
import { VendorReviews } from "./components/vendor-reviews";
import { BookingSidebar } from "./components/booking-sidebar";
import { RelatedVendors } from "./components/related-vendors";
import type { Vendor } from "@/lib/mock-data";

type VendorProfileViewProps = {
  vendor: Vendor;
  related: Vendor[];
};

export function VendorProfileView({ vendor: v, related }: VendorProfileViewProps) {
  return (
    <>
      <div className="container-x py-8">
        <Link
          href="/browse"
          className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to results
        </Link>
      </div>

      <section className="container-x grid lg:grid-cols-[1fr_360px] gap-10 pb-16">
        <div>
          <VendorHeader vendor={v} />

          <section className="mt-10">
            <h2 className="font-display text-2xl mb-4">About</h2>
            <p className="text-base leading-relaxed">{v.bio}</p>
          </section>

          <VendorServices vendor={v} />
          <VendorVerification />
          <VendorReviews vendor={v} />
        </div>

        <aside>
          <BookingSidebar vendor={v} />
        </aside>
      </section>

      <RelatedVendors vendors={related} />
    </>
  );
}
