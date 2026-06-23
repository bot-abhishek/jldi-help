import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VendorCta() {
  return (
    <section className="container-x pb-24">
      <div
        className="card-soft p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center"
        style={{ background: "linear-gradient(135deg, var(--amber-soft) 0%, var(--teal-soft) 100%)" }}
      >
        <div>
          <span className="pill chip-ink">For vendors</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Get found by every customer near you.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            List for free. Pay only when you get booked — a flat 18% commission, no monthly fees, no
            contracts. Your reputation, your prices, your calendar.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="/for-vendors"
            className="px-6 py-3.5 rounded-full bg-ink text-cream font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90"
          >
            Start listing — it&apos;s free <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/vendor-dashboard"
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            See a vendor dashboard →
          </Link>
        </div>
      </div>
    </section>
  );
}
