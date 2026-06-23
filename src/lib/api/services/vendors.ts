import { http, USE_MOCKS } from "../client";
import * as mock from "@/lib/mock-data";
import type { Vendor, VendorQuery } from "../types";

export const vendorsApi = {
  list: async (query: VendorQuery = {}): Promise<Vendor[]> => {
    if (USE_MOCKS) {
      return mock.vendors.filter(
        (v) =>
          (!query.category || v.category === query.category) &&
          (!query.community || v.communities.includes(query.community ?? "")),
      );
    }
    const qs = new URLSearchParams(query as Record<string, string>).toString();
    return http<Vendor[]>(`/vendors${qs ? `?${qs}` : ""}`);
  },

  get: async (id: string): Promise<Vendor | undefined> =>
    USE_MOCKS ? mock.findVendor(id) : http<Vendor>(`/vendors/${id}`),
};
