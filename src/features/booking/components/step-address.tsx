export function StepAddress() {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4 flex items-center gap-3">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-cream text-sm num-pill">3</span>
        Service address
      </h2>
      <div className="space-y-3">
        <input
          defaultValue="42 Camden St Lower"
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm"
        />
        <div className="grid sm:grid-cols-2 gap-3">
          <input defaultValue="Dublin 2" className="px-4 py-3 rounded-xl border border-border bg-card text-sm" />
          <input defaultValue="D02 XY45 (Eircode)" className="px-4 py-3 rounded-xl border border-border bg-card text-sm" />
        </div>
        <textarea
          placeholder="Notes for the vendor (gate code, pets, parking, accessibility…)"
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm min-h-24"
        />
      </div>
    </section>
  );
}
