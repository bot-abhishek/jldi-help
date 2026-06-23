import { Star } from "lucide-react";

type Testimonial = { name: string; quote: string; rating: number; vendor: string };

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="container-x py-20">
      <div className="mb-10">
        <span className="pill chip-amber">From the neighbourhood</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Real bookings. Real reviews.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="card-soft p-6">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="font-display text-xl leading-snug">&quot;{t.quote}&quot;</p>
            <div className="mt-5 text-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">Booked {t.vendor}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
