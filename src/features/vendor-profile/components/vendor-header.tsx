import { Star, MapPin, Clock, ShieldCheck, Globe } from "lucide-react";
import { Avatar } from "@/components/vendor-card";
import type { Vendor } from "@/lib/mock-data";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl num-pill">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}

export function VendorHeader({ vendor: v }: { vendor: Vendor }) {
  return (
    <div className="card-soft p-6 md:p-8">
      <div className="flex items-start gap-5">
        <Avatar initials={v.initials} color={v.color} size={88} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="pill chip-teal">
              <ShieldCheck className="size-3" />
              {v.verified.replace(/_/g, " ").toLowerCase()}
            </span>
            {v.badges.map((b: string) => (
              <span key={b} className="pill chip-outline">
                {b}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">{v.name}</h1>
          <p className="text-muted-foreground mt-1">{v.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5 fill-amber text-amber" />
              <b>{v.rating}</b>{" "}
              <span className="text-muted-foreground">({v.reviewCount} reviews)</span>
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <MapPin className="size-3.5" />
              {v.area}, {v.city} · {v.distanceKm} km
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3.5" />
              Replies in ~{v.responseMins} min
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Globe className="size-3.5" />
              {v.languages.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center border-t border-border pt-5">
        <Stat label="Trust score" value={`${v.trustScore}/100`} />
        <Stat label="Years experience" value={String(v.yearsExperience)} />
        <Stat label="Jobs completed" value={String(v.jobsCompleted)} />
      </div>
    </div>
  );
}
