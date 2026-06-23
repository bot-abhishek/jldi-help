"use client";

import Link from "next/link";
import { Mail, Phone, Apple, Chrome } from "lucide-react";

export function AuthView() {
  return (
    <section className="container-x py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div className="hidden lg:block">
        <h1 className="font-display text-6xl leading-[0.95]">
          Welcome back.<br /><span className="text-teal">Let&apos;s get it sorted.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-md">
          One account for booking, messaging, payments and reviews. Switch to vendor mode anytime.
        </p>
      </div>

      <div className="card-soft p-8 max-w-md w-full mx-auto">
        <h2 className="font-display text-3xl">Sign in or sign up</h2>
        <p className="text-sm text-muted-foreground mt-1">No password needed — we&apos;ll send you a magic link.</p>

        <div className="mt-6 space-y-3">
          <button className="w-full px-4 py-3 rounded-xl border border-border font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-secondary">
            <Chrome className="size-4" />Continue with Google
          </button>
          <button className="w-full px-4 py-3 rounded-xl border border-border font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-secondary">
            <Apple className="size-4" />Continue with Apple
          </button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex-1 h-px bg-border" />OR<div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-3">
          <div className="relative">
            <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm"
            />
          </div>
          <div className="relative">
            <Phone className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              placeholder="+353 …"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm"
            />
          </div>
          <button className="w-full px-5 py-3.5 rounded-xl bg-ink text-cream font-semibold text-sm">
            Send magic link
          </button>
        </div>

        <div className="mt-6 text-xs text-muted-foreground text-center">
          Are you a service provider?{" "}
          <Link href="/for-vendors" className="font-semibold text-foreground underline-offset-4 hover:underline">
            List your service →
          </Link>
        </div>
      </div>
    </section>
  );
}
