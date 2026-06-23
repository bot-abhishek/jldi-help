"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/vendor-card";
import { StepService } from "./components/step-service";
import { StepTime } from "./components/step-time";
import { StepAddress } from "./components/step-address";
import { StepPayment } from "./components/step-payment";
import { BookingSummary } from "./components/booking-summary";
import type { Vendor } from "@/lib/mock-data";

export function BookingFlow({ vendor: v }: { vendor: Vendor }) {
  const [service, setService] = useState(v.services[0]?.name ?? "");
  const [slot, setSlot] = useState("Today · 14:30");
  const [pay, setPay] = useState<"card" | "cash">("card");

  const svc = v.services.find((s) => s.name === service) ?? v.services[0];
  const subtotal = svc?.price ?? 0;
  const fee = Math.round(subtotal * 0.04);
  const total = subtotal + fee;

  return (
    <>
      <div className="container-x py-8">
        <Link
          href={`/vendor/${v.id}`}
          className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to {v.name}
        </Link>
      </div>

      <section className="container-x grid lg:grid-cols-[1fr_400px] gap-10 pb-20">
        <div>
          <h1 className="font-display text-4xl md:text-5xl">Confirm your booking</h1>
          <p className="text-muted-foreground mt-2">
            Review everything below, then send your request. The vendor has 30 minutes to accept.
          </p>

          <StepService vendor={v} selected={service} onSelect={setService} />
          <StepTime selected={slot} onSelect={setSlot} />
          <StepAddress />
          <StepPayment selected={pay} onSelect={setPay} />
        </div>

        <aside>
          <BookingSummary
            vendor={v}
            svc={svc}
            slot={slot}
            subtotal={subtotal}
            fee={fee}
            total={total}
          />
          <div className="mt-4 text-xs text-muted-foreground space-y-1.5 px-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-teal" />
              Payment held in escrow
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-success" />
              Free cancellation up to 24h
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-3.5" />
              Chat opens once accepted
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
