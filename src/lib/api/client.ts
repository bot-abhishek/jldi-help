// =============================================================================
// Sorted API Client — modular layer
// -----------------------------------------------------------------------------
// Today: returns mock data from `@/lib/mock-data` so the UI is fully clickable.
// Tomorrow: flip `USE_MOCKS` to false (or set VITE_API_BASE_URL) and every call
// will hit your FastAPI backend at the same paths described in each function.
//
// Conventions (must match the FastAPI side):
//   GET    /api/v1/categories
//   GET    /api/v1/categories/:slug
//   GET    /api/v1/communities
//   GET    /api/v1/communities/:slug
//   GET    /api/v1/vendors?category=&community=&q=&near=
//   GET    /api/v1/vendors/:id
//   POST   /api/v1/bookings
//   GET    /api/v1/bookings/:id
//   POST   /api/v1/auth/magic-link
//
// Folder layout mirrors a Next.js / React structure so the move is cheap:
//   src/lib/api/client.ts   — low-level fetch wrapper
//   src/lib/api/index.ts    — typed methods, grouped by resource
//   src/lib/api/types.ts    — request/response DTOs (single source of truth)
// =============================================================================

const USE_MOCKS = true;
export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? "/api/v1";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) throw new ApiError(res.status, await res.text());
  return res.json() as Promise<T>;
}

export const isMockMode = () => USE_MOCKS;
