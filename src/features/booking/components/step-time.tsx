"use client";

import { Calendar } from "lucide-react";

const SLOTS = ["Today · 14:30", "Today · 17:00", "Tomorrow · 09:00", "Tomorrow · 11:30", "Tomorrow · 16:00", "Sat 28 · 10:00"];

type Props = { selected: string; onSelect: (slot: string) => void };

export function StepTime({ selected, onSelect }: Props) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-3">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-cream text-sm num-pill">2</span>
        Pick a time <Calendar className="size-4" />
      </h2>
      <div className="grid sm:grid-cols-3 gap-2">
        {SLOTS.map((s) => (
          <button
            key={s}
            onClick={() => onSelect(s)}
            className={"px-4 py-3 rounded-xl border text-sm font-medium transition " +
              (selected === s ? "border-teal bg-teal-soft text-foreground" : "border-border hover:bg-secondary")}
          >
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}
