import { http, USE_MOCKS } from "../client";
import type { Booking, BookingRequest } from "../types";

export const bookingsApi = {
  create: async (req: BookingRequest): Promise<Booking> => {
    if (USE_MOCKS) {
      return {
        ...req,
        id: `bk-${Date.now()}`,
        status: "pending",
        total: 100,
        createdAt: new Date().toISOString(),
      };
    }
    return http<Booking>("/bookings", { method: "POST", body: JSON.stringify(req) });
  },

  get: async (id: string): Promise<Booking> =>
    USE_MOCKS
      ? Promise.reject(new Error("Booking detail not available in mock mode"))
      : http<Booking>(`/bookings/${id}`),
};
