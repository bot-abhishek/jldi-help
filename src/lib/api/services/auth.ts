import { http, USE_MOCKS } from "../client";
import type { MagicLinkRequest, MagicLinkResponse } from "../types";

export const authApi = {
  sendMagicLink: async (req: MagicLinkRequest): Promise<MagicLinkResponse> =>
    USE_MOCKS
      ? { ok: true }
      : http<MagicLinkResponse>("/auth/magic-link", {
          method: "POST",
          body: JSON.stringify(req),
        }),
};
