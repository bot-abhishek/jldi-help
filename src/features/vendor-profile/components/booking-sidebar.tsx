import Link from "next/link";
import { ShieldCheck, CheckCircle2, Award, Calendar, MessageCircle } from "lucide-react";
import type { Vendor } from "@/lib/mock-data";

const availabilityLabel = (a: Vendor["availability"]) =>
  a === "today" ? "Today" : a === "this-week" ? "This week" : "Next week";

export function BookingSidebar({ vendor: v }: { vendor: Vendor }) {
  return (
    <div className="card-soft p-6 sticky top-20">
      <div className="text-sm text-muted-foreground">From</div>
      <div className="font-display text-3xl num-pill">
        €{v.priceFrom}{" "}
        <span className="text-sm text-muted-foreground font-sans">{v.priceUnit}</span>
      </div>

      <div className="mt-4 pill chip-amber">
        Next available: {availabilityLabel(v.availability)}
      </div>

      <div className="mt-5 space-y-2">
        <Link
          href={`/book/${v.id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ink text-cream font-semibold text-sm hover:opacity-90"
        >
          <Calendar className="size-4" />
          Request to book
        </Link>
        <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-secondary">
          <MessageCircle className="size-4" />
          Send a message
        </button>
      </div>

      <div className="mt-5 text-xs text-muted-foreground space-y-1.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-teal" />
          Payment held in escrow until job is done
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-3.5 text-success" />
          Free cancellation up to 24h
        </div>
        <div className="flex items-center gap-2">
          <Award className="size-3.5 text-amber" />
          Backed by JaldiHelp Guarantee
        </div>
      </div>
    </div>
  );
}
