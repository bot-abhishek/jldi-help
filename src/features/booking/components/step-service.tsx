"use client";

import type { Vendor } from "@/lib/mock-data";

type Props = {
  vendor: Vendor;
  selected: string;
  onSelect: (name: string) => void;
};

export function StepService({ vendor, selected, onSelect }: Props) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-3">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-cream text-sm num-pill">1</span>
        Choose a service
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {vendor.services.map((s) => (
          <button
            key={s.name}
            onClick={() => onSelect(s.name)}
            className={"card-soft p-4 text-left transition " + (selected === s.name ? "ring-2 ring-teal" : "hover:bg-secondary")}
          >
            <div className="font-semibold text-sm">{s.name}</div>
            <div className="text-xs text-muted-foreground">Approx. {s.duration}</div>
            <div className="font-display text-lg num-pill mt-1">
              €{s.price}<span className="text-xs text-muted-foreground font-sans">{s.unit}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
