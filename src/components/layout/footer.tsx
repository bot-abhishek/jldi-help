import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-sand/60">
      <div className="container-x py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-grid place-items-center size-9 rounded-xl bg-ink text-cream font-display text-sm font-bold leading-none tracking-tight">
              JH
            </span>
            <span className="font-display text-xl">
              jaldihelp<span className="text-teal">.</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A location-first marketplace for every local service a household needs — built for
            Ireland, designed to travel.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © 2026 JaldiHelp Technologies Ltd · Dublin, Ireland
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/browse">All categories</Link>
            </li>
            <li>
              <Link href="/communities">Communities</Link>
            </li>
            <li>
              <Link href="/how-it-works">How it works</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">For Vendors</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/for-vendors">List your service</Link>
            </li>
            <li>
              <Link href="/vendor-dashboard">Vendor dashboard</Link>
            </li>
            <li>
              <Link href="/for-vendors">Trust &amp; verification</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">Investors</Link>
            </li>
            <li>
              <Link href="/about">Press</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
