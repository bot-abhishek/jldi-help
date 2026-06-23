// Public API surface — components import only from here, never from individual
// service files directly. Swapping to FastAPI is a one-line change in client.ts.

export { categoriesApi } from "./services/categories";
export { communitiesApi } from "./services/communities";
export { vendorsApi } from "./services/vendors";
export { bookingsApi } from "./services/bookings";
export { authApi } from "./services/auth";

export type { Vendor, Category, Community, BookingRequest, Booking, MagicLinkRequest, VendorQuery } from "./types";

// Convenience aggregate — use when you need multiple services in one import
import { categoriesApi } from "./services/categories";
import { communitiesApi } from "./services/communities";
import { vendorsApi } from "./services/vendors";
import { bookingsApi } from "./services/bookings";
import { authApi } from "./services/auth";

export const api = {
  categories: categoriesApi,
  communities: communitiesApi,
  vendors: vendorsApi,
  bookings: bookingsApi,
  auth: authApi,
};
