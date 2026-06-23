// Shared DTOs — keep aligned with FastAPI Pydantic schemas.
// These types are the single source of truth between the frontend and backend.
export type { Vendor, Category, Community } from "@/lib/mock-data";

export type BookingRequest = {
  vendorId: string;
  serviceName: string;
  scheduledFor: string; // ISO datetime
  address: { line1: string; city: string; eircode: string; notes?: string };
  paymentMethod: "card" | "cash";
};

export type Booking = BookingRequest & {
  id: string;
  status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
  total: number;
  createdAt: string;
};

export type MagicLinkRequest = { email?: string; phone?: string };
export type MagicLinkResponse = { ok: true };

export type VendorQuery = {
  category?: string;
  community?: string;
  q?: string;
  near?: string;
};