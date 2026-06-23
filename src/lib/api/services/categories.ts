import { http, USE_MOCKS } from "../client";
import * as mock from "@/lib/mock-data";
import type { Category } from "../types";

export const categoriesApi = {
  list: async (): Promise<Category[]> =>
    USE_MOCKS ? mock.categories : http<Category[]>("/categories"),

  get: async (slug: string): Promise<Category | undefined> =>
    USE_MOCKS ? mock.findCategory(slug) : http<Category>(`/categories/${slug}`),
};