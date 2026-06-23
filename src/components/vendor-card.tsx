import Link from "next/link";
import { Star, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import type { Vendor } from "@/lib/mock-data";

export function Avatar({ initials, color, size = 56 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="rounded-2xl grid place-items-center text-cream font-display tracking-tight shrink-0"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 60%, #0b0f1a 130%)`,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}

const verifiedLabel = (v: Vendor["verified"]) =>
  v === "BACKGROUND_CHECKED"
    ? "Background-checked"
    : v === "CREDENTIAL_VERIFIED"
      ? "Credential-verified"
      : "ID-verified";

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Link href={`/vendor/${vendor.id}`} className="card-soft p-5 flex flex-col gap-4 group">
      <div className="flex items-start gap-4">
        <Avatar initials={vendor.initials} color={vendor.color} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-lg leading-tight truncate">{vendor.name}</h3>
            <span className="pill chip-teal">
              <ShieldCheck className="size-3" />{verifiedLabel(vendor.verified)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground truncate">{vendor.tagline}</p>
          <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="inline-flex items-center gap-1 num-pill">
              <Star className="size-3 fill-amber text-amber" />
              <b className="text-foreground">{vendor.rating}</b> ({vendor.reviewCount})
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" />{vendor.area} · {vendor.distanceKm} km
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" />~{vendor.responseMins} min reply
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {vendor.languages.slice(0, 3).map((l) => (
          <span key={l} className="pill chip-outline">{l}</span>
        ))}
        {vendor.availability === "today" && (
          <span className="pill chip-amber">Available today</span>
        )}
      </div>

      <div className="flex items-end justify-between pt-2 border-t border-border">
        <div>
          <div className="text-xs text-muted-foreground">From</div>
          <div className="font-display text-xl num-pill">
            €{vendor.priceFrom}{" "}
            <span className="text-xs text-muted-foreground font-sans">{vendor.priceUnit}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="pill chip-outline gap-1"><MessageCircle className="size-3" />Message</span>
          <span className="pill chip-ink">View · Book</span>
        </div>
      </div>
    </Link>
  );
}
