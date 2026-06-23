type Step = { n: number; title: string; body: string };

export function HowItWorksSection({ steps }: { steps: Step[] }) {
  return (
    <section className="ink-grad rounded-3xl mx-4 md:mx-8 my-10">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <span className="pill" style={{ background: "rgba(255,255,255,.1)", color: "#e6fbf8" }}>
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Four steps from &quot;I need someone&quot; to &quot;it&apos;s done.&quot;
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-white/20 pt-5">
              <div className="font-display text-5xl num-pill opacity-60">0{s.n}</div>
              <div className="mt-2 font-display text-xl text-cream">{s.title}</div>
              <p className="mt-2 text-sm" style={{ color: "rgba(230,251,248,.7)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
