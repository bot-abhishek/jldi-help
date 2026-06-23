import Link from "next/link";
import { Eye } from "lucide-react";
import { Avatar } from "@/components/vendor-card";
import { KpiBar } from "./components/kpi-bar";
import { UpcomingBookings } from "./components/upcoming-bookings";
import { NewRequests } from "./components/new-requests";
import { PerformanceChart } from "./components/performance-chart";
import type { Vendor } from "@/lib/mock-data";

export function VendorDashboardView({ vendor: v }: { vendor: Vendor }) {
  return (
    <div className="container-x py-10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Avatar initials={v.initials} color={v.color} size={64} />
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Vendor dashboard</div>
            <h1 className="font-display text-3xl">Welcome back, {v.name.split(" ")[0]}</h1>
            <div className="text-sm text-muted-foreground">
              Your listing is live · Dublin 6 · {v.subcategory}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={`/vendor/${v.id}`} className="pill chip-outline gap-1.5">
            <Eye className="size-3.5" />View public profile
          </Link>
          <button className="pill chip-ink">+ Add service</button>
        </div>
      </div>

      <div className="mt-8">
        <KpiBar />
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <UpcomingBookings />
        <NewRequests />
      </div>

      <div className="mt-6">
        <PerformanceChart />
      </div>
    </div>
  );
}
