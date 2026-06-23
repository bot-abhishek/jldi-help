"use client";

import { MessageCircle } from "lucide-react";

const REQUESTS = [
  {
    who: "Ravi P.",
    what: "Deep cleaning",
    when: "Sun 29 · afternoon",
    note: "3-bed, pets at home",
    price: "€180 est.",
  },
  {
    who: "Adaeze N.",
    what: "Regular cleaning",
    when: "Weekly Mon mornings",
    note: "2-bed apartment",
    price: "€64 / visit",
  },
];

export function NewRequests() {
  return (
    <div className="card-soft p-6">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-2">
        <MessageCircle className="size-5" />
        New requests
      </h2>
      <div className="space-y-4">
        {REQUESTS.map((r, i) => (
          <div key={i} className="border border-border rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-sm">{r.who}</div>
              <div className="text-xs num-pill text-teal">{r.price}</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {r.what} · {r.when}
            </div>
            <div className="text-xs mt-2 italic">&quot;{r.note}&quot;</div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 px-3 py-2 rounded-lg bg-ink text-cream text-xs font-semibold">
                Accept
              </button>
              <button className="flex-1 px-3 py-2 rounded-lg border border-border text-xs font-semibold">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
