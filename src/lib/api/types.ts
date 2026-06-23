// Shared DTOs — keep aligned with FastAPI Pydantic schemas.
export type {
  Vendor, Category, Community,
} from "@/lib/mock-data";

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
