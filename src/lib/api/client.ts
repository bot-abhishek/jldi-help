// =============================================================================
// JaldiHelp API Client
// -----------------------------------------------------------------------------
// Today:    USE_MOCKS = true  → returns local mock data, UI is fully clickable.
// Tomorrow: set NEXT_PUBLIC_USE_MOCKS=false in .env.local → every call hits
//           the FastAPI backend at NEXT_PUBLIC_API_BASE_URL.
//
// FastAPI endpoint conventions (must match Pydantic schemas on the backend):
//   GET    /api/v1/categories
//   GET    /api/v1/categories/:slug
//   GET    /api/v1/communities
//   GET    /api/v1/communities/:slug
//   GET    /api/v1/vendors?category=&community=&q=&near=
//   GET    /api/v1/vendors/:id
//   POST   /api/v1/bookings
//   GET    /api/v1/bookings/:id
//   POST   /api/v1/auth/magic-link
// =============================================================================

export const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS !== "false";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/v1";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

// Next.js extends fetch with cache options — pass { next: { revalidate: 60 } }
// in server components for ISR, or { cache: "no-store" } for always-fresh data.
export async function http<T>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } }
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) throw new ApiError(res.status, await res.text());
  return res.json() as Promise<T>;
}