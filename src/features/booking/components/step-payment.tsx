"use client";

import { CreditCard, Lock } from "lucide-react";

type Props = {
  selected: "card" | "cash";
  onSelect: (method: "card" | "cash") => void;
};

export function StepPayment({ selected, onSelect }: Props) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-3">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-cream text-sm num-pill">4</span>
        Payment method <CreditCard className="size-4" />
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        <button
          onClick={() => onSelect("card")}
          className={"card-soft p-4 text-left " + (selected === "card" ? "ring-2 ring-teal" : "")}
        >
          <div className="font-semibold text-sm flex items-center gap-2">
            <CreditCard className="size-4" />Card · Held in escrow
          </div>
          <div className="text-xs text-muted-foreground mt-1">Charged when the job is marked complete</div>
        </button>
        <button
          onClick={() => onSelect("cash")}
          className={"card-soft p-4 text-left " + (selected === "cash" ? "ring-2 ring-teal" : "")}
        >
          <div className="font-semibold text-sm">Pay cash on site</div>
          <div className="text-xs text-muted-foreground mt-1">Not protected by JaldiHelp Guarantee</div>
        </button>
      </div>

      {selected === "card" && (
        <div className="mt-4 card-soft p-5 space-y-3">
          <input
            placeholder="Card number  •••• •••• •••• 4242"
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm"
          />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="px-4 py-3 rounded-xl border border-border bg-card text-sm" />
            <input placeholder="CVC" className="px-4 py-3 rounded-xl border border-border bg-card text-sm" />
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Lock className="size-3" />Secured by Stripe · Funds held in escrow until job complete
          </div>
        </div>
      )}
    </section>
  );
}
