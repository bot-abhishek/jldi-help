import { http, USE_MOCKS } from "../client";
import * as mock from "@/lib/mock-data";
import type { Community } from "../types";

export const communitiesApi = {
  list: async (): Promise<Community[]> =>
    USE_MOCKS ? mock.communities : http<Community[]>("/communities"),

  get: async (slug: string): Promise<Community | undefined> =>
    USE_MOCKS ? mock.findCommunity(slug) : http<Community>(`/communities/${slug}`),
};
