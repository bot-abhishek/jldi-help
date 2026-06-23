import { Avatar } from "@/components/vendor-card";
import type { Vendor } from "@/lib/mock-data";

type Props = {
  vendor: Vendor;
  svc: Vendor["services"][number] | undefined;
  slot: string;
  subtotal: number;
  fee: number;
  total: number;
};

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium text-right">{v}</span>
    </div>
  );
}

export function BookingSummary({ vendor: v, svc, slot, subtotal, fee, total }: Props) {
  return (
    <div className="card-soft p-6 sticky top-20">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <Avatar initials={v.initials} color={v.color} size={48} />
        <div>
          <div className="font-semibold">{v.name}</div>
          <div className="text-xs text-muted-foreground">
            {v.area} · ⭐ {v.rating}
          </div>
        </div>
      </div>

      <div className="py-4 space-y-2 text-sm">
        <Row k="Service" v={svc?.name ?? ""} />
        <Row k="When" v={slot} />
        <Row k="Duration" v={svc?.duration ?? ""} />
        <Row k="Address" v="42 Camden St, D02" />
      </div>

      <div className="py-4 border-t border-border space-y-2 text-sm">
        <Row k="Service" v={`€${subtotal}`} />
        <Row k="JaldiHelp fee (4%)" v={`€${fee}`} />
        <div className="flex justify-between pt-2 border-t border-border font-display text-xl">
          <span>Total</span>
          <span className="num-pill">€{total}</span>
        </div>
      </div>

      <button className="mt-4 w-full px-5 py-3.5 rounded-xl bg-ink text-cream font-semibold text-sm hover:opacity-90">
        Request booking
      </button>
    </div>
  );
}
