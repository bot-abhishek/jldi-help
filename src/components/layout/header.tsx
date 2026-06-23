"use client";

import Link from "next/link";
import { MapPin, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-x flex items-center gap-6 h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-grid place-items-center size-9 rounded-xl bg-ink text-cream font-display text-sm font-bold leading-none tracking-tight">
            JH
          </span>
          <span className="font-display text-xl tracking-tight">
            jaldihelp<span className="text-teal">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium ml-2">
          <Link href="/browse" className="px-3 py-1.5 rounded-full hover:bg-secondary">Browse</Link>
          <Link href="/communities" className="px-3 py-1.5 rounded-full hover:bg-secondary">Communities</Link>
          <Link href="/how-it-works" className="px-3 py-1.5 rounded-full hover:bg-secondary">How it works</Link>
          <Link href="/for-vendors" className="px-3 py-1.5 rounded-full hover:bg-secondary">For vendors</Link>
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-2">
          <button className="pill chip-outline gap-1.5"><MapPin className="size-3.5" />Dublin 2 · 5km</button>
          <Link href="/browse" className="pill chip-outline gap-1.5"><Search className="size-3.5" />Search</Link>
          <Link href="/auth" className="px-3 py-1.5 text-sm font-semibold hover:underline">Sign in</Link>
          <Link href="/for-vendors" className="px-3.5 py-1.5 text-sm font-semibold rounded-full bg-ink text-cream hover:opacity-90">
            List your service
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden ml-auto p-2 rounded-lg border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x py-3 flex flex-col gap-2 text-sm font-medium">
            <Link href="/browse" onClick={() => setOpen(false)}>Browse</Link>
            <Link href="/communities" onClick={() => setOpen(false)}>Communities</Link>
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link href="/for-vendors" onClick={() => setOpen(false)}>For vendors</Link>
            <Link href="/auth" onClick={() => setOpen(false)}>Sign in</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
