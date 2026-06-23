// Public API surface. Components should ONLY import from here, never from
// the underlying mock-data file. That way swapping to FastAPI is a one-line
// change in client.ts (USE_MOCKS = false).
import { http, isMockMode } from "./client";
import * as mock from "@/lib/mock-data";
import type { Booking, BookingRequest, MagicLinkRequest } from "./types";
import type { Vendor, Category, Community } from "@/lib/mock-data";

// ----- Categories ------------------------------------------------------------
export const categoriesApi = {
  list: async (): Promise<Category[]> =>
    isMockMode() ? mock.categories : http("/categories"),
  get: async (slug: string): Promise<Category | undefined> =>
    isMockMode() ? mock.findCategory(slug) : http(`/categories/${slug}`),
};

// ----- Communities -----------------------------------------------------------
export const communitiesApi = {
  list: async (): Promise<Community[]> =>
    isMockMode() ? mock.communities : http("/communities"),
  get: async (slug: string): Promise<Community | undefined> =>
    isMockMode() ? mock.findCommunity(slug) : http(`/communities/${slug}`),
};

// ----- Vendors ---------------------------------------------------------------
export type VendorQuery = { category?: string; community?: string; q?: string; near?: string };
export const vendorsApi = {
  list: async (query: VendorQuery = {}): Promise<Vendor[]> => {
    if (isMockMode()) {
      return mock.vendors.filter(v =>
        (!query.category || v.category === query.category) &&
        (!query.community || v.communities.includes(query.community))
      );
    }
    const qs = new URLSearchParams(query as Record<string, string>).toString();
    return http(`/vendors${qs ? `?${qs}` : ""}`);
  },
  get: async (id: string): Promise<Vendor | undefined> =>
    isMockMode() ? mock.findVendor(id) : http(`/vendors/${id}`),
};

// ----- Bookings --------------------------------------------------------------
export const bookingsApi = {
  create: async (req: BookingRequest): Promise<Booking> => {
    if (isMockMode()) {
      return {
        ...req,
        id: `bk-${Math.floor(performance.now())}`,
        status: "pending",
        total: 100,
        createdAt: new Date().toISOString(),
      };
    }
    return http("/bookings", { method: "POST", body: JSON.stringify(req) });
  },
  get: async (id: string): Promise<Booking> =>
    isMockMode() ? Promise.reject(new Error("mock")) : http(`/bookings/${id}`),
};

// ----- Auth ------------------------------------------------------------------
export const authApi = {
  sendMagicLink: async (req: MagicLinkRequest): Promise<{ ok: true }> =>
    isMockMode() ? { ok: true } : http("/auth/magic-link", { method: "POST", body: JSON.stringify(req) }),
};

export const api = {
  categories: categoriesApi,
  communities: communitiesApi,
  vendors: vendorsApi,
  bookings: bookingsApi,
  auth: authApi,
};
