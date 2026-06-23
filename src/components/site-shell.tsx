import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MapPin, Search, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-x flex items-center gap-6 h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-grid place-items-center size-9 rounded-xl bg-ink text-cream font-display text-sm font-bold leading-none tracking-tight">JH</span>
          <span className="font-display text-xl tracking-tight">jaldihelp<span className="text-teal">.</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium ml-2">
          <Link to="/browse" className="px-3 py-1.5 rounded-full hover:bg-secondary">Browse</Link>
          <Link to="/communities" className="px-3 py-1.5 rounded-full hover:bg-secondary">Communities</Link>
          <Link to="/how-it-works" className="px-3 py-1.5 rounded-full hover:bg-secondary">How it works</Link>
          <Link to="/for-vendors" className="px-3 py-1.5 rounded-full hover:bg-secondary">For vendors</Link>
        </div>

        <div className="ml-auto hidden md:flex items-center gap-2">
          <button className="pill chip-outline gap-1.5"><MapPin className="size-3.5"/>Dublin 2 · 5km</button>
          <Link to="/browse" className="pill chip-outline gap-1.5"><Search className="size-3.5"/>Search</Link>
          <Link to="/auth" className="px-3 py-1.5 text-sm font-semibold hover:underline">Sign in</Link>
          <Link to="/for-vendors" className="px-3.5 py-1.5 text-sm font-semibold rounded-full bg-ink text-cream hover:opacity-90">List your service</Link>
        </div>

        <button onClick={() => setOpen(o=>!o)} className="md:hidden ml-auto p-2 rounded-lg border border-border"><Menu className="size-4"/></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-2 text-sm font-medium">
            <Link to="/browse">Browse</Link>
            <Link to="/communities">Communities</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/for-vendors">For vendors</Link>
            <Link to="/auth">Sign in</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-sand/60">
      <div className="container-x py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2"><span className="inline-grid place-items-center size-9 rounded-xl bg-ink text-cream font-display text-sm font-bold leading-none tracking-tight">JH</span>
            <span className="font-display text-xl">jaldihelp<span className="text-teal">.</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">A location-first marketplace for every local service a household needs — built for Ireland, designed to travel.</p>
          <p className="mt-6 text-xs text-muted-foreground">© 2026 JaldiHelp Technologies Ltd · Dublin, Ireland</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/browse">All categories</Link></li>
            <li><Link to="/communities">Communities</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">For Vendors</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/for-vendors">List your service</Link></li>
            <li><Link to="/vendor-dashboard">Vendor dashboard</Link></li>
            <li><Link to="/for-vendors">Trust & verification</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">Investors</Link></li>
            <li><Link to="/about">Press</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
